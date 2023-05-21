const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });

const mongoose = require("mongoose");
const uri = process.env.DATABASE;
mongoose.connect(uri).then(() => {
    console.log("Connection to database is successful");
}).catch((error) => {
    console.log("Some error occured while connecting");
    console.log(error);
})