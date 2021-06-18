import React from 'react'
import './style.css'
import useStyles from './style'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete'
import moment from 'moment'
import {Card, Typography, CardActions, CardContent, Button} from '@material-ui/core'
import {deleteBlog} from '../../redux/actions/blogAction'


const AuthBlogCard = ({blog, setCurrentId}) => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const editButtonHandler = () => {
        setCurrentId(blog._id);
        history.push('/form');
    }

    const deleteHandler = (id) => {
        dispatch(deleteBlog(id))
    }
    return (
        <div>
            <Card className={classes.card}>
                <div className={classes.card_heading}>
                    <Typography className={classes.title}  variant="h5" component="h2">{blog.title}</Typography>
                    <Button size='small' color='default' onClick={editButtonHandler}>
                        <EditIcon fontSize='small' variant='small' />
                    </Button>
                </div>
                <div className={classes.blog_info}>
                    <Typography className={classes.author} variant="subtitle1" component="p">{blog.author}</Typography>
                    <Typography className={classes.time} variant='subtitle2' style={{color : '#414241'}} component="p">{moment(blog.date).fromNow()}</Typography>
                </div>

                <CardContent>
                    <Typography className="blog" variant='body2' color='textSecondary' component='p'>
                        {blog.discription}
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions}>
                    <Button size='small' color='inherit'>show..</Button>
                    <Button size='small' color='secondary' onClick={() => deleteHandler(blog._id)}>
                        Delete
                        <DeleteIcon fontSize='small' />
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default AuthBlogCard
