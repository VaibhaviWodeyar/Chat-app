const {Schema, model} = require("mongoose")


const studentSchema = new Schema({
    Name:{
        type:String
    },
    MobileNo:{
        type:String
    },
    Emailid:{
        type:String
    },
    Branch:{
        type:String
    },
    Password:{
        type:String
    },
    Role:{
        type:String
    }
},
{ timestamps: true }
)


module.exports = model("Student", studentSchema);