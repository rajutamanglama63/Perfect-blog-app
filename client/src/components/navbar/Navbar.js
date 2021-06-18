import React from 'react'
import { Button } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../../redux/actions/authAction'
import './navbar.css'

const Navbar = ({click}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth);

    const logoutHandler = () => {
        dispatch(logout());
        history.push('/');
    }
    return (
        <div>
            <div className="navbar">
                <div className="container">
                    <div className="navbar_content">
                        <div className="brand">
                            <h1>BLOGGER</h1>
                            <p>stories</p>
                        </div>
                        {user._id ? (
                            <>
                                <p className="greeting">Welcome {user.username}!</p>
                                <ul className="nav_lists">
                                    <li className="nav_item"><Link to="/" className="nav_link">Home</Link></li>
                                    <li className="nav_item"><Link to="/authhome" className="nav_link">Blogs</Link></li>
                                    <li className="nav_item"><Link to="/profile" className="nav_link">Profile</Link></li>
                                    <li className="nav_item"><Button variant="contained" color="default" size="small" onClick={logoutHandler}>Logout</Button></li>
                                </ul>
                            </>
                        ) : (
                            <>
                               <div className="greeting social_media">
                                    <FacebookIcon size="small" color="inherit" />
                                    <TwitterIcon size="small" color="inherit" />
                                    <InstagramIcon size="small" color="inherit" />
                               </div>
                              <ul className="nav_lists">
                                    <li className="nav_item"><Link to="/" className="nav_link">Home</Link></li>
                                    <li className="nav_item"><a href="#" className="nav_link">About</a></li>
                                    <li className="nav_item"><Link to="/signin" className="nav_link">Signin</Link></li>
                                    <li className="nav_item"><Link to="/signup" className="nav_link active">SignUp</Link></li>
                                </ul>  
                            </>
                        )}
                        <div className="hamburger-menu" onClick={click}>
                             <div></div>
                             <div></div>
                             <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
