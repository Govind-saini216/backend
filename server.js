import expres from 'express';
import mongoose from 'mongoose';
import userouter from './routes/user.js';
import reciperouter from './routes/recipe.js';
import bodyparser from 'express';
import cors from 'cors';

const app = expres();

app.use(bodyparser.json());
app.use(cors({
     origin:true,
     credentials:true,
     methods:["POST","GET","PUT","DELETE"]
}))

 
// api create router
app.use('/api',userouter)

// api create recipy
app.use('/api', reciperouter)

// database conactiviti
try {
    mongoose.connect("mongodb+srv://govindsain7737:govindsaini12345@mern-2023-project.1rabuaz.mongodb.net/mern-recipe-2024-app")
    .then(console.log("mongoo db is connect..!"))
} catch (error) {
    console.log(error.message);
}

// make a server
const port = 5000;

app.listen(port,()=>
    console.log(`server is running port ${port}`));