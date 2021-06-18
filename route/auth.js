const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../model/User");

const router = express.Router();

dotenv.config();

// SIGN_UP
router.post('/signup', async (req, res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password) {
        return res.status(400).json({msg : "All fields are required."});
    }

    try {
        let user = await User.findOne({email : email});
        if(user) {
            return res.status(400).json({msg : "User already exist."});
        }

        const salt = await bcrypt.genSalt(10);
        const hassedPassword = await bcrypt.hash(password, salt);

        user = new User({
            username,
            email,
            password : hassedPassword
        });

        await user.save();

        const token = await jwt.sign({_id : user._id, username : user.username, email : user.email}, process.env.JWT_SECRET, {expiresIn : 3600});
        res.status(200).send(token)
    } catch (error) {
        res.status(400).json({msg : error.message});
    }
});

// SIGN_IN
router.post('/signin', async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password) {
        return res.status(400).json({msg : "All fields are required."});
    }

    try {
        let user = await User.findOne({email : email});
        if(!user) {
            return res.status(400).json({msg : "User dosenot exist."});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(401).send("Invalid Credentials");
        }

        const token = await jwt.sign({_id : user._id, username : user.username, email : user.email}, process.env.JWT_SECRET, {expiresIn : 3600});
        res.status(200).send(token);
    } catch (error) {
        res.status(400).json({msg : error.message});
    }
});


module.exports = router;