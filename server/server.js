import  express  from "express";
import mongoose from 'mongoose';
const PORT = 4000;
const app  = express();
import cors from 'cors';

app.use(cors)

 await mongoose.connect("mongodb+srv://Viraj:N0TMOAn9hZzYtCUt@cluster0.ssbpou4.mongodb.net/Expenses?retryWrites=true&w=majority")
.then(() => console.log("MongoDB is Connected"))
.catch((err) => console.error(err));


app.get("/",(req,res) => {

    res.send("Helllo");
});

app.listen(PORT,() => {

    console.log(`Server is running on port: ${PORT}`);

});