const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const auth = async (req, res, next) => {
    const token = req.header("x-auth-token");
    if(!token) {
        return res.status(401).send("Access denied. Not authorized...");
    }

    try {
        // verify user
        const decodedPayload = await jwt.verify(token, process.env.JWT_SECRET);
        // add user from verified or decoded data from payload 
        req.user = decodedPayload;

        next();
    } catch (error) {
        res.status(400).send("Invalid auth token.");
    }
}

module.exports = auth;