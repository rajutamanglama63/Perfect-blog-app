import React from 'react'
import useStyles from './style'
import moment from 'moment'
import {Card, Typography, CardActions, CardContent, Button} from '@material-ui/core'


const BlogCard = ({blog}) => {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.card}>
                <Typography className={classes.title}  variant="h5" component="h2">{blog.title}</Typography>
                <Typography className={classes.author} variant="subtitle1" component="p">{blog.author}</Typography>
                <Typography className={classes.time} variant='body2' style={{color : '#414241'}}>{moment(blog.date).fromNow()}</Typography>

                <CardContent>
                    <Typography className="blog" variant='body2' color='textSecondary' component='p'>
                        {blog.discription}
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions}>
                    <Button size='small' color='inherit'>show more</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default BlogCard
