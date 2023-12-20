const express = require('express');
const router = express.Router();
const users = require("../models/userSchema");
const user = require('../models/userSchema');

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.post("/register", async (req, res) => {
    const { name, Email, age, Mobile, Department, Description } = req.body;

    if (!name || !Email || !age || !Mobile || !Department || !Description) {
        res.send("error");
        return;
    }

    try {
        const preuser = await users.findOne({ Email: Email });

        if (preuser) {
            res.send("error");
        } else {
            const adduser = new users({
                name, Email, age, Description, Mobile, Department
            });
            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }
    } catch (error) {
        console.log(error);
    }
});
//get user data
router.get("/getdata", async(req, res) => {
    try{
        const userdata = await users.find();
         res.status(200).json(userdata);
        console.log(userdata);
    }catch (error) {
        console.log(error);
    }
})
router.get("/getuser/:id", async(req, res) => {
    try{
        const {id}=req.params;
        const userindividual=await users.findById({_id:id});
        console.log(userindividual);
        res.status(200).json(userindividual);

    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})
router.patch("/updateuser/:id", async(req, res) => {
    try{
        const {id}=req.params;
        const updateuser=await users.findByIdAndUpdate(id,req.body,{
        new:true
   });
   console.log(updateuser);
   res.status(200).json(updateuser);
}
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})
router.delete( "/deleteuser/:id", async(req, res) => {
    try{
        const {id}=req.params;
        const deleteuser=await users.findByIdAndDelete({_id:id});
        console.log(deleteuser);
        res.status(200).json(deleteuser);
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})


module.exports = router;
