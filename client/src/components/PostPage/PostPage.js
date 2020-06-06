import React from 'react'

const PostPage = ({location, match}) => {
    console.log(match.params);
    
    return (
        <div>
            <h1>postPage</h1>
        </div>
    )
}

export default PostPage
