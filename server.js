const express = require("express");
const app = express();
const { connectDataBase } = require("./config/database");
const errorHandler = require("./middlewares/errorhandler");
const morgan = require("morgan");
const { PORT, NODE_ENV } = require("./config");
const { success, info, error } = require("consola");
var bodyParser = require("body-parser");
const UserRoute = require("./routes/userRoute");
const ChatRoute = require("./routes/chatRoute")
const MessageRoute = require('./routes/messageRoute')
const cors = require("cors")


const csv = require("csvtojson");
const fs = require("fs")




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/", (req, res) => {
  res.json({ message: "Hello Crud Node Express" });
});

const startServer = () => {
  try {
    connectDataBase();  

    if (NODE_ENV === "development") {
      app.use(morgan("dev"));
    }
   app.use(cors({
      origin:"http://localhost:3000",
      methods:["GET","POST"]
    }))
    app.use(bodyParser.json());
    app.use(express.json());
   
   
    app.use(express.urlencoded({ extended: true }));
   

    app.use("/user", UserRoute);
    app.use("/msg",ChatRoute)
    app.use("/message", MessageRoute)
  
    app.use(errorHandler);
    app.listen(PORT, (err) => {
      if (err) throw err;
      success(`server is running on ${PORT}`);
    });
  } catch (err) {
    error(err);
  }
};
startServer();