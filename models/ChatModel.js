const {Schema, model} = require("mongoose")


const ChatModel = new Schema({
  members:{
    type:Array
  }
},
{ timestamps: true }
)


module.exports = model("Chat", ChatModel);