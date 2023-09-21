import Like from "../models/Like.js";

export default async(req, res, next) => {
    req.body.user_id = req.user._id
    let one = await Like.findOne(req.body)  //req.body TIENE SOLO los datos del itinerario
    if(one) {
        req.isLiked = true
    } else {
        req.isLiked = false
    } 
    /* req.isLiked = one */
    return next()
}