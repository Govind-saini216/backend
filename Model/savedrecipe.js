import mongoose from "mongoose";

const savedrecipyschema = new mongoose.Schema({
    recipe:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'recipe'
    }
})

export const savedrecipe = mongoose.model('savedrecipe', savedrecipyschema)