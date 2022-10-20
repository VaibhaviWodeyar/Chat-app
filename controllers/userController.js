const UserModel = require("../models/UserModel");
const csv = require('csvtojson')
exports.registerController = async(req,res, next)=>{
    try {
        // let Add_Student = req.files[0]
                    // let payload = {...req.body, }
                    // await UserModel.create(payload)
                    // res.send(payload)
                  
    let user=await UserModel.findOne({Batch_Code:req.body.Batch_Code})
    if(user ==null){
        // console.log(req.files[0].path)
        console.log("heloooooooo")
      await csv().fromFile(req.files[0].path).then(async(jsonObj) => {
            let payload = {...req.body, Add_Student:jsonObj}
            await UserModel.create(payload)
            res.send(payload)
        })            
    }
    else{
        let data;
        csv().fromFile(req.files[0].path).then((jsonObj) => {
            data=jsonObj
            b(jsonObj)
        })
        let b=async(jsonObj)=>{
          
       for(let y of jsonObj){
        let a=await UserModel.updateOne({Batch_Code:req.body.Batch_Code}, { $push: { Add_Student: y } })
        console.log(a);
       } 
    }
    }
        
    } catch (error) {
        console.log(error)
    }
  
}


exports.getuserController = async (req, res) => {
    const data = await UserModel.find({})
    res.status(200).json(data)
}

