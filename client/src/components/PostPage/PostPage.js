import React, {useState, useEffect} from 'react'

const PostPage = ({location, match}) => {
    const [postDetails, setPostDetails] = useState({}); 
    
    useEffect( () => {
        (async () => {

            if(location.state !== undefined){
                setPostDetails(location.state)
            }else{
                const resPostDetails = await fetchPostDetails(match.params.postId);
                setPostDetails(resPostDetails);
            }
        })()
    }, [])
    
    const fetchPostDetails = async (postId) => {
        const response = await fetch(`http://localhost:5000/posts/${postId}`);
        const resPostDetails = await response.json();
        return resPostDetails;
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