import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {register} from '../../redux/actions/authAction'
import useStyles from './style'
import {Typography, Button, TextField} from '@material-ui/core'

const Signup = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const [blogger, setBlogger] = useState({
        username : "",
        email : "",
        password : ""
    });

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(blogger));
        setBlogger({
            username : "",
            email : "",
            password : ""
        });
    }

    if(auth._id) {
        return <Redirect to='/signin' />
    }
    return (
        <div>
            <form noValidate autoComplete="off" className={classes.formStyle} onSubmit={submitHandler}>
                <Typography variant="h6" className={classes.formTitle}>Sign up</Typography>
                <TextField 
                 name="username" 
                 variant="standard" 
                 label="username" 
                 margin="dense"
                 fullWidth  
                 value={blogger.username}
                 onChange={(e) => setBlogger({...blogger, username : e.target.value})}
                />
                <TextField 
                 name="email" 
                 variant='standard'
                 label="email" 
                 margin="dense"
                 fullWidth  
                 value={blogger.email}
                 onChange={(e) => setBlogger({...blogger, email : e.target.value})}
                />
                <TextField 
                 name="password" 
                 variant="standard" 
                 label="password" 
                 margin="dense"
                 fullWidth  
                 value={blogger.password}
                 onChange={(e) => setBlogger({...blogger, password : e.target.value})}
                />
                <Button className={classes.buttonSubmit} variant="contained" color="inherit" size="large" type="submit" fullWidth>Signup</Button>
            </form>
        </div>
    )
}

export default Signup
