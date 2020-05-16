import React,{useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom';

import {getStoredAuthToken, getStoredUser} from "../../utils/auth";

const DashBoard = () => {
    const [user, setUser] = useState({});

    let history = useHistory();

    useEffect((history) => {
        if(!getStoredAuthToken() || getStoredAuthToken() === undefined){
            history.push('/login');
        }
        setUserDetails();
    },[])

    
    const setUserDetails = () => {
        const userDetails = getStoredUser();
        // console.log(userDetails);
        setUser(userDetails);
    }

    return (
        <div>
            <h1>Welcome to the DashBoard!</h1>
            <p>Welcome {user.username}</p>
        </div>
    )
}

export default DashBoard
