const express = require('express');
const app = express();
const mongoose= require ('mongoose');
const routes = require ('./MealRoutes');
const cors = require ('cors');


require ('dotenv').config();
mongoose.set("strictQuery", false);


const PORT = 7000 || process.env.port;

app.use(express.json())
app.use (cors())

mongoose 
.connect (process.env.MONGODB_LINK)
.then (()=> console.log('We were connect to MONGO'))
.catch ((err)=> console.log(err))

app.use (routes);

app.listen ( PORT, () => {
    console.log(`I AM LISTENNING ON PORT ${PORT}`)
})


// %TCHjsS_uH.X2d7

// E2ztkX0tZIcpTvZQ - пароль кластера

// mongodb+srv://headway2121:<db_password>@cluster0.o1cvm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0