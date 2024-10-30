import { Schema , model} from "mongoose";

let ContactSchema = new Schema({

    name: {
        type: String,
        require: true,
    },
    emailId: {
        type: String,
        require: true,
    },
    message: {
        type: String,
        require: true,
    }
})

let contact = model('contact' , ContactSchema)

export default contact;