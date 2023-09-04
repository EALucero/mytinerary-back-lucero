import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) => {
    try {
        let { u_id } = req.params;
        let data = req.body;

        let updatedItinerary = await Itinerary.findOneAndUpdate(
            { _id: u_id, },
            data,
            { new: true }
        ).select('name photo mail');

        if (updatedItinerary) {
            return res.status(200).json({
                success: true,
                message: 'itinerary updated',
                response: updatedItinerary
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