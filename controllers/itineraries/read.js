import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) => {
    try {
        console.log(req.query);   
        let objetoDeBusqueda = {}
        let objetoDeOrdenamiento = {}
        if (req.query.admin_id) {
            objetoDeBusqueda.admin_id = req.query.admin_id       
        }
        if (req.query.itinerary) {
            objetoDeBusqueda.itinerary = new RegExp(req.query.itinerary,'i')
    
        }
        if (req.query.sort) { 
            objetoDeOrdenamiento.itinerary = req.query.sort
        }        
        let allItineraries = await Itinerary
            .find(objetoDeBusqueda, 'name price photo city_id')
            .populate('city_id', 'country photo city -_id')
            .sort(objetoDeOrdenamiento)
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