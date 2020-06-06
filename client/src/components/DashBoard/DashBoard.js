import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

// eslint-disable-next-line
import { removeStoredAuthToken, getStoredAuthToken, getStoredUser, removeStoredUser } from "../../utils/auth";


//*COMPONENT IMPORT
import PostItem from '../PostItem/PostItem';
import Navbar from './../Navbar';

//*IMPORT CSS
import './DashBoard.css';

const DashBoard = () => {
    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);
    let history = useHistory();

    useEffect(() => {
        // if(!getStoredAuthToken() || getStoredAuthToken() === undefined){
        //     history.push('/login');
        // }
        setUserDetails();
        fetchPosts();
    }, [])


    const fetchPosts = async () => {
        const response = await fetch('http://localhost:5000/posts', {
            method: 'GET'
        });
        const resData = await response.json();
        setPosts(resData);
        console.log(new Date(resData[1].date).toLocaleDateString());

    }


    const setUserDetails = () => {
        const userDetails = getStoredUser();
        // console.log(userDetails);
        setUser(userDetails);
    }


    const logOutHandler = (e) => {
        e.preventDefault();
        removeStoredAuthToken();
        removeStoredUser();
        setUser('');
        history.push({
            pathname: '/login',
            state: {
                from: 'dashboard'
            }
        });
    }

    return (
        <>
            <Navbar />
            <div>
                <div className="header-section" >
                    <h1>Welcome to the DashBoard!</h1>
                    <p>Welcome {user.username}</p>
                    <button onClick={logOutHandler}>logout</button>
                </div>
                {posts.map((post) => <PostItem key={post._id} title={post.title} body={post.body} date={new Date(post.date).toLocaleDateString()} />)}
            </div>
        </>
    )
}

export default DashBoard
