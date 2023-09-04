import City from "../../models/City.js";

export default async (req, res, next) => {
    try {
        console.log(req.query);   //QUERY ES UN OBJETO CON TODAS LAS CONSULTAS/IGUALDADES A BUSCAR EN LA BASE DE DATOS
        //let objetoDeBusqueda = { admin_id: '64dbb5a0dc9ccf4b5ed350d1'} //para el ejemplo ES IGUAL a req.query
        let objetoDeBusqueda = {}
        let objetoDeOrdenamiento = {}
        if (req.query.admin_id) {
            objetoDeBusqueda.admin_id = req.query.admin_id       
        }
        if (req.query.city) {
            objetoDeBusqueda.city = new RegExp(req.query.city,'i')
            //new RegExp(req.query.title,'i')
        }
        if (req.query.sort) { 
            objetoDeOrdenamiento.city = req.query.sort
            //agrego la propiedad por la cual QUIERO ORDENAR
            //si es 1 ordena ascendentemente
            //si es -1 ordena descendientemente
        }        
        let allCities = await City
            .find(objetoDeBusqueda, 'country city photo smallDescription admin_id')
            .populate('admin_id', 'photo name mail _id')
            .sort(objetoDeOrdenamiento)
        //let allCities = await City.find().select('country city photo smallDescription admin_id').populate('admin_id', 'photo name mail -_id')
        if (allCities.length > 0) {
            return res.status(200).json({
                success: true,
                message: 'cities found',
                response: allCities
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