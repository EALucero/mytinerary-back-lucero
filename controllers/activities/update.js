import Activity from "../../models/Activity.js";

export default async (req, res, next) => {
    try {
        let updatedCity = await Activity.findByIdAndUpdate(
            req.params.u_id,
            req.body,
            { new: true }
        ).select('name photo mail')
        if (updatedCity) {
            return res.status(200).json({
                success: true,
                message: 'activity updated',
                response: updatedCity
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