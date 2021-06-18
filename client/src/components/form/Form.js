import React,{useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {createBlog} from '../../redux/actions/blogAction'
import useStyles from './style'
import {Typography, Button, TextField} from '@material-ui/core'
import {updateBlog} from '../../redux/actions/blogAction'

const Form = ({currentId, setCurrentId}) => {
    const classes = useStyles();
    const history = useHistory();
    const blogPosts = useSelector((state) => currentId ? state.blog.find((data) => data._id === currentId) : null)
    const dispatch = useDispatch();
    const [blogs, setBlogs] = useState({
        title : "",
        discription : ""
    });

    useEffect(() => {
        if(blogPosts) {
            return setBlogs(blogPosts);
        }
    }, [blogPosts]);

    const clear = () => {
        setCurrentId(null);
        setBlogs({ 
            title: '', 
            discription: ''
        });
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if(currentId === null) {
            dispatch(createBlog(blogs));
            clear();
        } else {
            dispatch(updateBlog(currentId, blogs))
            clear();
        }
        history.push('/authhome');
    }

    return (
        <div>
            <form noValidate autoComplete="off" className={classes.formStyle} onSubmit={submitHandler}>
                <Typography variant="h6" className={classes.formTitle}>Your creativity</Typography>
                <TextField 
                 name="title" 
                 variant="outlined"
                 label="Title" 
                 margin="dense"
                 fullWidth  
                 value={blogs.title}
                 onChange={(e) => setBlogs({...blogs, title : e.target.value})}
                />
                <TextField 
                 name="discription" 
                 variant="outlined" 
                 label="Create your blog..." 
                 margin="dense"
                 fullWidth  
                 multiline 
                 rows={6} 
                 value={blogs.discription}
                 onChange={(e) => setBlogs({...blogs, discription : e.target.value})}
                />
                <Button className={classes.buttonSubmit} variant="contained" color="inherit" size="large" type="submit" fullWidth>Submit</Button>
            </form>
        </div>
    )
}

export default Form
