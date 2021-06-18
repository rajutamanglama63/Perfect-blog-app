import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'
import useStyles from './style'
import {Typography, Button, TextField} from '@material-ui/core'
import {login} from '../../redux/actions/authAction'

const Signin = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const [credentials, setCredentials] = useState({
        email : "",
        password : ""
    });

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(credentials.email, credentials.password));
        setCredentials({
            email : "",
            password : ""
        });
    }

    if(auth._id) {
        return <Redirect to='/authhome' />
    }
    return (
        <div>
            <form noValidate autoComplete="off" className={classes.formStyle} onSubmit={submitHandler}>
                <Typography variant="h6" className={classes.formTitle}>Sign in</Typography>
                <TextField 
                 name="email" 
                 variant='standard'
                 label="email" 
                 margin="dense"
                 fullWidth  
                 value={credentials.email}
                 onChange={(e) => setCredentials({...credentials, email : e.target.value})}
                />
                <TextField 
                 name="password" 
                 variant="standard" 
                 label="password" 
                 margin="dense"
                 fullWidth  
                 value={credentials.password}
                 onChange={(e) => setCredentials({...credentials, password : e.target.value})}
                />
                <Button className={classes.buttonSubmit} variant="contained" color="inherit" size="large" type="submit" fullWidth>Signin</Button>
            </form>
        </div>
    )
}

export default Signin