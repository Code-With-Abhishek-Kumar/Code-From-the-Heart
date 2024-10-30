// Mongoose se Schema aur model ko import kar rahe hain
import { Schema, model } from "mongoose";

// ContactSchema naam se ek naya schema create kar rahe hain
let ContactSchema = new Schema({

    // 'name' field, iska type String hai
    // 'required' ka matlab hai ki user ko ye field fill karna hoga
    name: {
        type: String,
        require: true, // ye field zaroori hai
    },

    // 'emailId' field, iska type bhi String hai
    // User ko ye field bhi fill karna hoga
    emailId: {
        type: String,
        require: true, // ye field zaroori hai
    },

    // 'message' field, iska type String hai
    // Ye field bhi user ko fill karni hogi
    message: {
        type: String,
        require: true, // ye field zaroori hai
    }
});

// 'contact' naam se model create kar rahe hain, jo ContactSchema ko use karta hai
let contact = model('contact', ContactSchema);

// contact model ko export kar rahe hain taaki dusre files mein use kiya ja sake
export default contact;
