import Itinerary from "../../models/Itinerary.js";

export default async (req, res, next) => {
    try {
        let { id } = req.params;
        let deletedItinerary = await Itinerary.findByIdAndDelete(id)
        //AGREGAR CONDICIONAL POR SI NO ENCUENTRA AL ITINERARIO (card mensaje)
        if (deletedItinerary) {
            return res.status(200).json({
                success: true,
                message: 'itinerary deleted',
                response: deletedItinerary.id
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