import Comment from "../../models/Comment.js";

export default async (req, res, next) => {
    try {
        let queries = {};
        if (req.query.itinerary_id) {
            queries.itinerary_id = req.query.itinerary_id
        }

        let all = await Comment.find(queries)
            .populate('itinerary_id', 'name')
            .populate('user_id', 'name mail')
            .sort({ createdAt: 1 }) //usar mejor el updated
            
        if (all.length > 0) {
            return res.status(200).json({
                success: true,
                message: 'comment read',
                response: all
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'comment not found',
                response: null
            })
        }
    } catch (error) {
        next(error)
    }
}