import React from 'react';
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core'
import './sideDrawer.css'

const SideDrawer = ({ show, click }) => {
    const SideDrawerClass = ["side-drawer"];

    if(show) {
        SideDrawerClass.push("show");
    }
    return (
        <div className={SideDrawerClass.join(" ")}>
            <ul className="sidedrawer-links" onClick={click}>
                <li className="nav_item"><Link to="/" className="nav_link">Home</Link></li>
                <li className="nav_item"><a href="#" className="nav_link">Contact</a></li>
                <li className="nav_item"><Link to="/signin" className="nav_link">Signin</Link></li>
                <li className="nav_item"><Link to="/signup" className="nav_link">SignUp</Link></li>
                <li className="nav_item"><Button variant="contained" color="default" size="large" fullWidth>Logout</Button></li>
            </ul>
        </div>
    )
}

export default SideDrawer