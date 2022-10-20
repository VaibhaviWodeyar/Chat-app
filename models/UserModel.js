const { model, Schema } = require("mongoose");
const UserSchema = new Schema(
    {
      Batch_Code: {
            type: String,
            // enum: ["user", "Trainer", "fees-tracker","councillor"],
            // default: "user",
          },
        Subject:{
            type:String
        },
        Branch:{
            type:String
        },
        Courses:{
            type:String
        },
        Class_Time_and_Date:{
            type:String,
        },
        Trainer:{
            type:String
        },
        Tracker:{
            type:String
        },
        Add_Student:{
            type:{}
        }
    },
    { timestamps: true }
)

module.exports = model("User", UserSchema);
