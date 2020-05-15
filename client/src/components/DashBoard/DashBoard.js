import React,{useEffect} from 'react'
import {useHistory} from 'react-router-dom';

import {getStoredAuthToken, getStoredUser} from "../../utils/auth";

const DashBoard = () => {
    let history = useHistory();
    useEffect(() => {
        
        if(!getStoredAuthToken() || getStoredAuthToken() === undefined){
            history.push('/login');
        }
    },[])

    
    return (
        <div>
            <h1>Welcome to the DashBoard!</h1>
        </div>
    )
}

export default DashBoard
