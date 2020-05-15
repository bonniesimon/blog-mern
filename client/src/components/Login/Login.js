import React, { useState } from 'react'
import {useHistory} from 'react-router-dom';

import {storeAuthToken, storeUser} from '../../utils/auth';


/**
 * TODO: [] useEffect to check if user already logged in
 *          * Check if authToken and user present in localStorage. 
 */

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const updateUsername = e => {
        const usernameValue = e.target.value;
        setUsername(usernameValue);
    }
    const updatePassword = e => {
        const passwordValue = e.target.value;
        setPassword(passwordValue);
    }


    /**
     * 
     * @param {string} URL 
     * @param {object} data
     * @return JWT 
     */
    const fetchData = async (URL, data) => {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "username": data.username, "password": data.password })
        })
        //    console.log(JSON.stringify({username: data.username, password: data.password}))
        const status = response.status;
        const resData = await response.json();
        // console.log(response.status);
        return {resData, status};
    }

    


    const onFormSubmit =async e => {
        e.preventDefault();
        const {resData, status} = await fetchData('http://localhost:5000/login', { username, password });
        console.log(resData, status);
        if(status === 200){
            storeAuthToken(resData.token);
            storeUser(resData.user);
            history.push('/');
        }
        
    }




    return (
        <div>
            <form onSubmit={onFormSubmit} >
                <input type="text" name="username" value={username} onChange={updateUsername} />
                <input type="password" name="password" value={password} onChange={updatePassword} />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login



/**
 * *The json parse: unexpected character at line 1....... error was cause due to the cors- heroku thingy
 */