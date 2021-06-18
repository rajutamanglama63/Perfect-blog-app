const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    author : {
        type : String,
    },
    discription : {
        type : String,
        required : true
    },
    uid : {
        type : String
    },
    date : {
        type : Date,
        default : new Date()
    }
}
);

const Blog = mongoose.model("blog", blogSchema);

module.exports = Blog;