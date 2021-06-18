import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import BlogCard from '../../components/blogCards/BlogCard'
import {getAllBlogs} from '../../redux/actions/blogAction'
import './home.css'

const Home = () => {
    const blogs = useSelector(state => state.blog);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllBlogs());
    }, [dispatch]);

    return (
        <div>
            <div className="container">
                <h2 className="home_title">EXPLORE BLOG STORIES</h2>
                <div className="grid">
                    {blogs.map((blog) => (
                        <BlogCard key={blog._id} blog={blog}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
