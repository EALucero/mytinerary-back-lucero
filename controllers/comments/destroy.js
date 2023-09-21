import Comment from "../../models/Comment.js";

export default async (req, res, next) => {
    try {
        let { comment_id } = req.params;
        let one = await Comment.findByIdAndDelete(comment_id)
            .populate("itinerary_id", "name")
            .populate("user_id", "name mail");
        if (one) {
            return res.status(200).json({
                success: true,
                message: "comment destroyed",
                response: one,
            });
        } else {
            return res.status(404).json({
                success: false,
                message: "comment not found",
                response: null,
            });
        }
    } catch (error) {
        next(error);
    }
};