const express = require("express");
const dotenv = require("dotenv");

const app = express();

const connectDB = require("./config/db");
const authRouter = require("./route/auth");
const blogRouter = require("./route/blog");
dotenv.config();
const Port = process.env.PORT || 4000;

connectDB();

app.use(express.json());
  
app.use('/auth', authRouter);
app.use('/blog', blogRouter);

app.listen(Port, () => {
    console.log(`Server running on port http://localhost:${Port}`);
});