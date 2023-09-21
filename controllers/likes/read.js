import Like from "../../models/Like.js";

export default async (req, res, next) => {
    try {
        let queries = {}
        if (req.query.itinerary_id) {
            queries.itinerary_id = req.query.itinerary_id
        }

        let all = await Like.countDocuments(queries);
        return res.status(200).json({
            success: true,
            message: 'likes from itinerary',
            response: all
        });  
    } catch (error) {
        next(error)
    }
}