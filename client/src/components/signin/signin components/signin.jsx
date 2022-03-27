import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './p3-signin.css'
const Signin=()=>{

    const [user,setUser] = useState({data:"",password:""})
    
    useEffect(() => {
      localStorage.removeItem("token")
      localStorage.removeItem("user")
    }, [])

    
    let name,value
    const handleInputs = (e)=>{
        name = e.target.name
        value = e.target.value
        setUser({...user,[name]:value})
    }

    const Verify = async(e)=>{
        e.preventDefault();
        let phone,email
        const {data,password} = user
        if(parseInt(data) === true){
            phone = data
            axios.post("http://localhost:5000/",{phone,password},
            {
                headers:{"Content-Type":"application/json"}
            }).then((res)=>{
                console.log(res)
                if(res.status === 200){
                    const token = res.data.Token
                    const userData = res.data.User.name
                    console.log("respose",res.data.User.name);
                    
                    localStorage.setItem('token',token)
                    localStorage.setItem('user',userData)
                    //window.location.href = "/order";

                }
            }).catch((e)=>{
                alert("Login Failed");
            })
        }else{
            email = data
            axios.post("http://localhost:5000/",{email,password},{
                headers:{
                    "Content-Type":"application/json"
                }
            }).then((res)=>{
                console.log(res)
                if(res.status === 200){
                    const token = res.data.token
                    const userData = res.data.User
                    console.log("setting local storage");
                    localStorage.setItem('token',token)
                    localStorage.setItem('user',userData)
                    window.location.href = "/order";
                }
            }).catch((e)=>{
                alert("Login Failed");
            })
        }
    }

    return(
        <div className='p3-signin-component'>
            <h1 className="p3-sign-in">SIGN IN</h1> 
            <form className='p3-signin-forms'  onSubmit={Verify}>
                <p className='p3-form-name'>Email/Phone</p>
                <input className='p3-forms' type='text' name="data" value={user.data} onChange={handleInputs}></input><br></br>
                <p className='p3-form-name'>Password</p>
                <input className='p3-forms'  type='password' name='password' value={user.password} onChange={handleInputs}></input>
                <a className='p3-passsword-verify' href="#">Forgot Password?</a>
                <input type="submit" value="Sign In" className='p3-signin-btn'/>
            </form>
            
        </div>
    )
}
export default Signin;


