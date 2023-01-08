import  express  from "express";
import mongoose from 'mongoose';
const PORT = 4000;
const app  = express();
import cors from 'cors';

app.use(cors)


.then(() => console.log("MongoDB is Connected"))
.catch((err) => console.error(err));


app.get("/",(req,res) => {

    res.send("Helllo");
});

app.listen(PORT,() => {

    console.log(`Server is running on port: ${PORT}`);

});
