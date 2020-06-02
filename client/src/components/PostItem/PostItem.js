import React from 'react'

import './PostItem.css';
const PostItem = ({title, body}) => {
    return (
        <div className="post">
            <h1 className="post__title">{title} </h1>
            <p className="post__body">{body} </p>
        </div>
    )
}

export default PostItem
