import React from 'react'

import './PostItem.css';
const PostItem = ({title, body, date, username}) => {
    
    return (
        <div className="post">
            <h1 className="post__title">{title} </h1>
            <p className="post__username">by, {username}</p>
            <p className="post__date">{date}</p>
            <p className="post__body">{body} </p>
        </div>
    )
}

export default PostItem;
