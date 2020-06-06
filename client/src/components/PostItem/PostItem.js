import React from 'react'
import {Link} from 'react-router-dom';

import './PostItem.css';
const PostItem = ({title, body, date, username, id}) => {
    return (
        <div className="post">
            <h1 className="post__title"><Link 
                                            to={{pathname:`/post/${id}`,
                                            state:{
                                                title,
                                                body,
                                                date,
                                                username,
                                                id
                                            } 
                                            }}>{title}</Link> </h1>
            <p className="post__username">by, {username}</p>
            <p className="post__date">{date}</p>
            <p className="post__body">{body} </p>
        </div>
    )
}

export default PostItem;
