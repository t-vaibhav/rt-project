import mongoose from "mongoose";
const { Schema } = mongoose;


/** result model */
const registerModel = new Schema({
    dp: { type: String },
    fname: { type: String, "required": true },
    lname: { type: String, default: '' },
    gender: { type: String },
    mnum: { type: Number, },
    email: { type: String, "required": true },
    password: { type: String, "required": true },
    cpassword: { type: String, "required": true },
    createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('register', registerModel);