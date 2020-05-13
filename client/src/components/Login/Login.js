import React, {useState} from 'react'

const Login = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState(""); 

   const updateUsername = e => {
       const usernameValue = e.target.value;
       setUsername(usernameValue);
   }
   const updatePassword = e => {
       const passwordValue = e.target.value;
       setPassword(passwordValue);
   }
   const fetchData = async(URL, data) => {
       const response = await fetch(URL, {
           method:'POST',
           headers:{
               'Content-Type':'application/json'
           },
           body: JSON.stringify({"username": data.username, "password": data.password})
       })
    //    console.log(JSON.stringify({username: data.username, password: data.password}))
    const responseData = await response.json();
    console.log(responseData);
   }

   const onFormSubmit = e => {
        e.preventDefault();
        fetchData('http://localhost:5000/login',{username, password});
        
   }
   
    return (
        <div>
            <form onSubmit={onFormSubmit} >
                <input type="text" name="username" value={username} onChange={updateUsername}/>    
                <input type="password" name="password" value={password} onChange={updatePassword}/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}

export default Login



/**
 * *The json parse: unexpected character at line 1....... error was cause due to the cors- heroku thingy
 */