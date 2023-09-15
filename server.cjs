const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config=({path:'./config.env'})
const app=require('./app.cjs');
const uri="mongodb+srv://vvansh739:12345678Rt.@cluster0.8c97igz.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uri, {useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((con) => {
    //console.log(con.connections)
    console.log('Connected to MongoDB');
    //console.log(process.env.NODE_ENV);
    // Your application logic goes here
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });
  const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});