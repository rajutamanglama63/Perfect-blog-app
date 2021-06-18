import React from 'react'
import './style.css'
import {Card, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {useSelector} from 'react-redux'

const useStyles = makeStyles((theme) => ({
    cardStyle : {
        display : "flex",
        flexDirection : "column",
        justifyContent : "center",
        alignItem : "center"
    }
}))

const ProfileInfo = () => {
    const classes = useStyles();
    const user = useSelector(state => state.auth);
    return (
        <div>
            <div className="container">
                <div className="card">
                    <Card className={classes.cardStyle}>
                        <Typography variant="h5" style={{textAlign : "center"}}>Your Profile</Typography>

                        <div>
                            <Typography variant="body1" component="h6">Id : {user._id}</Typography>
                            <Typography variant="body1" component="h6">Name : {user.username}</Typography>
                            <Typography variant="body1" component="h6">Email : {user.email}</Typography>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
