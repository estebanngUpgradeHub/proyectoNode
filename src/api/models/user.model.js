const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 


const userSchema = new Schema({
    email:{type: String, required: true}, 
    username: {type: String, required: true}, 
    password: {type: String, required: true}, 
    role: {type: String, default: "user", enum: ["admin", "user"]},
    avatar: {type: String, default:  avatarP = () => {
        if (User.gender === "Female" ) {
            return "https://res.cloudinary.com/dizd9f3ky/image/upload/v1697206175/imageFemale_efggh9.png"
        } else if (User.gender === "Male" ) {
            return "https://res.cloudinary.com/dizd9f3ky/image/upload/v1697206175/imageMale_mqwzhf.png"
        }
    
    },},
    gender: {type: String, enum: ["Male", "Female"], required: true}
},{
    
    collection: "user"
});






const User = mongoose.model("user", userSchema);
module.exports = User; 
