import React, {useState, useEffect} from 'react'

const PostPage = ({location, match}) => {
    const [postDetails, setPostDetails] = useState({}); 
    console.log(match.params);
    console.log(location);
    
    useEffect(() => {
        if(location.state !== undefined){
            setPostDetails(location.state)
        }else{
            fetchPostDetails(match.params.postId);
        }
    })

    const fetchPostDetails = (postId) => {
        
    }

    return (
        <div>
            <h1>{postDetails.title}</h1> 
            <p>{postDetails.body} </p>
        </div>
    )
}

export default PostPage



/**
 * !Rerender happens because of the <React.strictMode>
 * It happens only in production.
 * https://stackoverflow.com/questions/61328285/react-component-rendering-twice-when-using-usestate-hook
 */