import React, {useEffect} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {Button} from '@material-ui/core'
import AuthBlogCard from '../../components/authBlogCard/AuthBlogCard'
import {makeStyles} from '@material-ui/core/styles'
import {useDispatch, useSelector} from 'react-redux'
import {getBlogs} from '../../redux/actions/blogAction'
import './authHome.css'

const useStyles = makeStyles((theme) => ({
    createBtn : {
        marginBottom : "0.5rem",
    },
    link : {
        textDecoration : "none"
    }
}))

const AuthHome = ({currentId, setCurrentId}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const blogs = useSelector(state => state.blog);
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(getBlogs());
    }, [currentId, dispatch]);

    if (!auth._id) return <Redirect to="/signin" />;

    return (
        <div>
            <div className="container">
                <Link to="/form" className={classes.link}>
                    <Button variant="contained" color="inherit" size="large" className={classes.createBtn}>Create Blog</Button> 
                </Link>
                <h2 className="home_title">YOUR PERSONAL BLOGS</h2>
                <div className="grid">
                    {blogs.map((blog) => (
                        <AuthBlogCard key={blog._id} blog={blog} setCurrentId={setCurrentId}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AuthHome