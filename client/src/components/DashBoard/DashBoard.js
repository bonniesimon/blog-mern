import React,{useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom';

import {removeStoredAuthToken, getStoredAuthToken, getStoredUser, removeStoredUser} from "../../utils/auth";


//*COMPONENT IMPORT
import Navbar from './../Navbar';

const DashBoard = () => {
    const [user, setUser] = useState({});

    let history = useHistory();

    useEffect(() => {
        // if(!getStoredAuthToken() || getStoredAuthToken() === undefined){
        //     history.push('/login');
        // }
        setUserDetails();
        fetchPosts();
    },[])

    
    const fetchPosts = async () => {
        const response = await fetch('http://localhost:5000/posts',{
            method:'GET'
        });
        const resData = await response.json();
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
            pathname:'/login',
            state:{
                from:'dashboard'
            }
        });
    }

    return (
        <>
        <Navbar/>
        <div>
            <h1>Welcome to the DashBoard!</h1>
            <p>Welcome {user.username}</p>
            <button onClick={logOutHandler}>logout</button>
        </div>
        </>
    )
}

export default DashBoard
