import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) => {
    try {
        let queries = {};

        if (req.query.city_id) {
            queries.city_id = req.query.city_id;
        }

        let allItineraries = await Itinerary.find(queries, "-__v -createdAt -updatedAt")
            .populate({
                path: "city_id",
                select: "city photo admin_id",
                populate: {
                    path: "admin_id",
                    select: "name photo _id",
                },
            });

        if (allItineraries.length > 0) {
            return res.status(200).json({
                success: true,
                message: 'itineraries found',
                response: allItineraries
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'not found',
                response: null
            })
        }
    } catch (error) {
        next(error)
    }
}