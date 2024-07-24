const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const database = require("./database");
const playerModel = require("./database/models/Player");

const app = express();
app.use(express.json());
app.use(cors());
app.listen(5000, () => {
  console.log("listening on 5000");
});

app.post("/adduser/:uid", async (req, res) => {
  let data = req.body;
  let user = await playerModel.find({ id: req.params.uid });
  if (user.length == 0) {
    try{
        const query = await playerModel.insertMany({
            id: data.id,
            name: data.name,
            win: 0,
            try: 0,
          });
          res.json("Added")
          console.log("Added")
    }catch(err){

        throw err
    } 
   
  }
  else{
    res.json("user already exist");
    console.log("user already exist");
  }
});

app.patch("/win/:uid", async (req,res) => {
  try{
    let query =  await playerModel.updateOne({id:req.params.uid},{
       $inc : {win :1}
    })
    res.json("done")
  }catch(err){
    console.log(err)
  }
})

app.patch("/try/:uid", async (req,res) => {
  try{
    let query =  await playerModel.updateOne({id:req.params.uid},{
       $inc : {try :1}
    })
    res.json("done")
  }catch(err){
    console.log(err)
  }
})