const express = require("express");
const Blog = require("../model/Blog");
const auth = require("../middleware/auth");

const router = express.Router();

// CREATE BLOG
router.post('/create', auth, async (req, res) => {
    const {title, discription, author, uid, date} = req.body;
    try {
        const blog = new Blog({
            title,
            discription,
            author,
            uid,
            date
        });
        await blog.save();

        res.status(200).send(blog);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

// DELETE BLOG
router.delete('/delete/:id', auth, async (req, res) => {
    const {id} = req.params;
    const blog = await Blog.findById(req.params.id);
    try {
        if(!blog) {
            return res.status(404).send("Blog not found.");
        }

        if(blog.uid !== req.user._id) {
            return res.status(401).send("Blog deletation fail. Unauthorized.")
        }

        const deletedBlog = await Blog.findByIdAndDelete(id);

        res.status(200).json(deletedBlog);
    } catch (error) {
        res.status(500).json(error.message);
    }
});

// UPDATE BLOG
router.patch('/update/:id', auth, async (req, res) => {
    const {id} = req.params;
    const blog = await Blog.findById(req.params.id);
    const {title, discription, author, uid, date} = req.body;

    try {
        if(!blog) {
            return res.status(404).send("Blog not found.");
        }

        if(blog.uid !== req.user._id) {
            return res.status(401).send("Blog deletation fail. Unauthorized.")
        }

        const blogToBeUpdated = {title, discription, author, uid, date};

        const updatedBlog = await Blog.findByIdAndUpdate(id, blogToBeUpdated, {new : true});

        res.status(200).json(updatedBlog);
    } catch (error) {
        res.status(500).json(error.message);
    }
});

// GET ALL AUTHENTICATED BLOGS
router.get('/blogs', auth, async (req, res) => {
    try {
        const blogs = await Blog.find().sort({date : -1});

        const filteredBlogs = blogs.filter((blog) => blog.uid === req.user._id);
        res.send(filteredBlogs);

        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json(error.message);
    }
});
// GET ALL  BLOGS
router.get('/allblogs', async (req, res) => {
    try {
        const blogs = await Blog.find().sort({date : -1});

        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json(error.message);
    }
});

module.exports = router;