import { model, Schema, Types } from "mongoose";

const collection = 'comments'
const schema = new Schema({
    text: { type:String, required:true },
    itinerary_id: { type:Types.ObjectId, ref:'itineraries', required:true },
    user_id: { type:Types.ObjectId, ref:'users', required:true }
}, { timestamps: true })

const Comment = model(collection, schema)
export default Comment;