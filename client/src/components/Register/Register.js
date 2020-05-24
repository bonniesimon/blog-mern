import React from 'react'

const Register = ({location}) => {
    let toast = '';
    // console.log(location.state);
    if(location.state !== undefined){

        if( location.state.needToRegister === true){
            toast = "You need to login"
        }
    }
    return (
        <div>
            <h1>Register Page</h1>
            <p>{toast}</p>
        </div>
    )
}

export default Register
