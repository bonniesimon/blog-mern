import React, {useState} from 'react'

const PostPage = ({location, match}) => {
    const [postDetails, setPostDetails] = useState({}); 
    console.log(match.params);
    console.log(location, "Hey");
    // if(location.state !== undefined){
    //     setPostDetails(location.state);    
    // }
    
    return (
        <div>
            
        </div>
    )
}

export default PostPage



/**
 * !Rerender happens because of the <React.strictMode>
 * It happens only in production.
 * https://stackoverflow.com/questions/61328285/react-component-rendering-twice-when-using-usestate-hook
 */