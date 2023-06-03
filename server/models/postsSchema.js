import mongoose, { model } from "mongoose";
import { Schema } from "mongoose";

const postModel = new Schema(
    {
        username: { type: String, "required": true },
        topic: { type: String, "required": true },
        title: { type: String, "required": true },
        description: { type: String },
        image: { type: String, "required": true },
        createdat: { type: Date, default: Date.now }
    }
)

const posts = new model('posts', postModel)

export default posts