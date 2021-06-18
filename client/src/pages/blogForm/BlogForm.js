import React from 'react'
import './blogForm.css'
import Form from '../../components/form/Form'

const BlogForm = ({currentId, setCurrentId}) => {
    return (
        <div>
            <div className="container">
                <Form currentId={currentId} setCurrentId={setCurrentId} />
            </div>
        </div>
    )
}

export default BlogForm
