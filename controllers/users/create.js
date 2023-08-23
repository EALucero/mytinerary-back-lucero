import User from "../../models/User.js";

export default async (req, res) => {
    //req es el objeto donde el cliente me manda MUCHOS DATOS importantes acerca de la peticion
    //las propiedades de req MAS IMPORTANTES SON:
    //BODY: objeto que generalmente se envia a traves de formularios
    //PARAMS (parametros): suelen ser estaticos como el id de una ciudad a buscar por ejemplo
    //QUERIES (consultas): son opcionales y nos indican algunas consultas/filtros/nodos de ver la info/de pagina, etc
    try {
        let newUser = await User.create(req.body);
        return res.status(201).json({
            success: true,
            message: 'user created',
            response: newUser._id
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'not created',
            response: null
        });
    }
}