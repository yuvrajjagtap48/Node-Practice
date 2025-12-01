const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : { type: String , required: true },
    lastName : { type: String , required: true },
    email : { type: String , required: true , unique: true, trim : true },
    password : { type: String , required: true },
    age : { type: Number , required: true, min : 18 },
    gender : { type: String  , validate(value) { // this validate function only run when we create new object but not when we update existing object we have enable using tunValidators 
        if (!["male", "female", "other"].includes(value)) {
            throw new Error("Gender data is not valid");
        }
    } },
    photoUrl : { type: String , default : "https://www.pngall.com/wp-content/uploads/5/Profile-PNG-High-Quality-Image.png"  },
    about : { type: String , default : "defult info"  },
    skills : { type: [String]  } ,

}
, { timestamps : true } // this will add createdAt and updatedAt fields automatically
);

// always write first letter of model name in capital letter
module.exports =  mongoose.model("User", userSchema);
