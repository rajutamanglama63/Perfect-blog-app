import {CREATE_BLOG, DELETE_BLOG, UPDATE_BLOG, GET_BLOGS, GET_ALL_BLOGS} from '../constants/actionTypes'
import {setHeaders} from '../../utils/index'
import axios from 'axios'

// CREATE BLOG AUTHORIZEDLY
export const createBlog = (newBlog) => async (dispatch, getState) => {
    const author = getState().auth.username;
    const uid = getState().auth._id;
    try {
        const blog = await axios.post('/blog/create', {...newBlog, author, uid}, setHeaders());

        dispatch({
            type : CREATE_BLOG,
            blog : blog
        })
    } catch (error) {
        console.log(error);
    }
};

// GET AUTHENTICATED BLOGS
export const getBlogs = () => async (dispatch) => {
    try {
        const blogs = await axios.get('/blog/blogs', setHeaders());

        dispatch({
            type : GET_BLOGS,
            blogs : blogs
        })
    } catch (error) {
        console.log(error);
    }
};

// GET ALL BLOGS
export const getAllBlogs = () => async (dispatch) => {
    try {
        const allBlogs = await axios.get('/blog/allblogs');

        dispatch({
            type : GET_ALL_BLOGS,
            allBlogs : allBlogs
        })
    } catch (error) {
        console.log(error);
    }
};

// UPDATE BLOG AUTHORIZEDLY
export const updateBlog = (id, blogData) => async (dispatch) => {
    try {
        const {data} = await axios.patch(`/blog/update/${id}`, blogData, setHeaders());

        dispatch({
            type : UPDATE_BLOG,
            data : data
        });
    } catch (error) {
        console.log(error);
    }
};

// DELETE BLOG AUTHORIZEDLY
export const deleteBlog = (id) => async (dispatch) => {
    try {
        await axios.delete(`/blog/delete/${id}`, setHeaders());

        dispatch({
            type : DELETE_BLOG,
            id
        });
    } catch (error) {
        console.log(error);
    }
}