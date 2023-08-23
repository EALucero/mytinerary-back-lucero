import { model, Schema } from "mongoose";

//lo primero que necesitamos crear es el espacio virtual donde se van a guardar todos los documentos/modelos
//es decir LA COLECCION (conjunto de documentos/modelos de datos)
let collection = 'users';

//lo siguiente es definir el schema de datos del modelo
//es decir EL MOLDE / LA FORMA que tiene que tener mi modelo
let schema = new Schema({
    name: { type: String, required: true },                //por default TODOS los datos son opcionales (required:false)
    lastName: { type: String },                          //si es opcional NO NECESITO agregar el required
    mail: { type: String, required: true, unique: true },    //unique:true comprueba que el mail SEA UNICO (no hay mails duplicados)
    photo: { type: String, default: "https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg" },    //default vuelve al paremetro OPCIONAL, en caso de que el cliente mande la foto, la usa, sino: USA LA FOTO DEFAULT (DARTH VADER)
    password: { type: String, required: true },
    country: { type: String, required: true },
}, {
    timestamps: true
});
// para crear un modelo de datos utilizo el metodo model
//pasando como parmetros DONDE tengo que crear los documentos y con que FORMA
let User = model(collection, schema);
export default User;