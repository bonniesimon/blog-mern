import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import Particles from 'react-particles-js';

import { getStoredAuthToken, storeAuthToken, storeUser } from '../../utils/auth';

import './Login.css'


/**
 * TODO: [x] useEffect to check if user already logged in
 *          * Check if authToken and user present in localStorage. 
 * TODO: [] Return error if status is not 200 i.e if user login failed
 */

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});
    const history = useHistory();

    // *To check if user already logged in
    useEffect(() => {
        const token = getStoredAuthToken();
        if (token) {
            history.push('/');
        }
    }, [])

    useEffect(() => {
        if (error.Error === "User needs to register") {
            history.push({
				pathname:'/register',
				state:{
					needToRegister:true
				}
			});
        }

    }, [error])

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
     * @return {{token, user}, status} 
     */
    const fetchData = async (URL, data) => {
        console.log("Clicked")
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
        return { resData, status };
    }




    const onFormSubmit = async e => {
        e.preventDefault();

        const { resData, status } = await fetchData('http://localhost:5000/login', { username, password });
        // console.log(resData, status);
        if (status === 200) {
            storeAuthToken(resData.token);
            storeUser(resData.user);
            history.push({pathname:'/', state:{}});
        } else if (status !== 200) {
            setError(resData);
        }

    }




    return (
        <>
            <div className="login-page">
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 160,
                                "density": {
                                    "enable": false
                                }
                            },
                            "size": {
                                "value": 10,
                                "random": true
                            },
                            "move": {
                                "direction": "bottom",
                                "out_mode": "out"
                            },
                            "line_linked": {
                                "enable": false
                            },
                        },
                        "interactivity": {
                            "events": {
                                "onclick": {
                                    "enable": true,
                                    "mode": "remove"
                                }
                            },
                            "modes": {
                                "remove": {
                                    "particles_nb": 10
                                }
                            }
                        }
                    }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    }}
                />
                <div className="formcontainer">
                    <form onSubmit={onFormSubmit} className="form" >
                        <div className="form__heading">
                            <h1 className="focus-in-contract">Login</h1>
                        </div>
                        <div className="form__components">
                            <div className="field">
                                <label htmlFor="username">Username</label>
                                <input className="field__input" type="text" id="username" name="username" value={username} onChange={updateUsername} />
                            </div>
                            <div className="field">
                                <label htmlFor="password">Password</label>
                                <input className="field__input" type="password" id="password" name="password" value={password} onChange={updatePassword} />
                            </div>
                            <div className="buttons-container">
                                <button type="reset" className="btn btn-reset">Reset</button>
                                {/* <button type="submit" className="btn btn-submit">Submit</button> */}
                                <input type="submit" value="Login" className="btn" onClick={onFormSubmit} />
                            </div>
                        </div>
                        <div className="form__footer">
                            <p>Not Already a member?<Link className="register-link" to={{pathname:'/register', state:{from:'login'}}}>Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login



/**
 * *The json parse: unexpected character at line 1....... error was cause due to the cors- heroku thingy
 */