import { Mongoose } from "mongoose";

const Schema = mongose.Schema;

const userSchema = new Schema ({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlegnth: 6
    }
});

export default Mongoose.model("User", userSchema);
