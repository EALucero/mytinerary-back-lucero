import Activity from "../../models/Activity.js";

export default async (req, res, next) => {
    try {
        console.log(req.query);   
        let objetoDeBusqueda = {}
        let objetoDeOrdenamiento = {}
        if (req.query.admin_id) {
            objetoDeBusqueda.admin_id = req.query.admin_id       
        }
        if (req.query.activity) {
            objetoDeBusqueda.activity = new RegExp(req.query.activity,'i')
        }
        if (req.query.sort) { 
            objetoDeOrdenamiento.activity = req.query.sort
        }        
        let allActivities = await Activity
            .find(objetoDeBusqueda, 'name photo itinerary_id')
            .populate('itinerary_id', 'name price photo -_id')
            .sort(objetoDeOrdenamiento)
        if (allActivities.length > 0) {
            return res.status(200).json({
                success: true,
                message: 'activities found',
                response: allActivities
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