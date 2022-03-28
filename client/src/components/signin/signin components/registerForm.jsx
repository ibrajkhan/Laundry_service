import './registerform.css'
import React ,{useState}from "react";
import { Link ,useHistory} from "react-router-dom";


function RegisterForm(){
  const history=useHistory()
  const[user,setuser]=useState({name:"", email:"", password:"", phone:"", state:"", district:"", address:"", pincode:""});
  
  let name,value
  const handlerinputs=(e)=>{
    console.log(e)
    name=e.target.name;
    value=e.target.value
    setuser({...user,[name]:value})
    console.log(user)
  }
  const Postdata=async (e)=>{
    e.preventDefault();
    const {name, email, password, phone, state, district, address, pincode}=user;
    const res=await fetch("http://localhost:5000/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name, email, password, phone, state, district, address, pincode})
    })
    const data=await res.json()
    if(data.status===400 || !data){
      window.alert("user already exist")
      console.log("user alreadyexist")
    }else{
      window.alert("user registration success")
      console.log("user regstrationsuccess")
      history.push("/")
    }
  }

    return (<div className='register-component'>
            <h1 className="register">REGISTER</h1>
            <form className='register-forms' method="POST">
                <div className="dif-forms">
                <div className="one-form">
                <p className='register-name'>Name</p>
                <input className='forms' type="text" name="name" autoComplete="off" value={user.name} onChange={handlerinputs}/>
                </div>
                <div className="one-form">
                <p className='register-name'>Email</p>
                <input className='forms' type="text" name="email" autoComplete="off" value={user.email} onChange={handlerinputs}  />
                </div>
                </div>
                
                <div className="dif-forms">
                <div className="one-form">
                <p className='register-name'>Phone</p>
                <input className='forms' type="number" name="phone" autoComplete="off" value={user.phone} onChange={handlerinputs} />
                </div>
                <div className="one-form">
                <p className='register-name'>State</p>
                <input className='forms' type="text" name="state" autoComplete="off" value={user.state} onChange={handlerinputs} />
                </div>
                </div>
                <div className="dif-forms">
                <div className="one-form">
                <p className='register-name'>District</p>
                <input className='forms' type="text" name="district" autoComplete="off" value={user.district} onChange={handlerinputs}  />
                </div>
                <div className="one-form">
                <p className='register-name'>Address</p>
                <input className='forms' type="text" name="address" autoComplete="off" value={user.address} onChange={handlerinputs}  />
                </div>
                </div>
                <div className="dif-forms">
                <div className="one-form">
                <p className='register-name'>Pincode</p>
                <input className='forms' type="number" name="pincode" autoComplete="off" value={user.pincode} onChange={handlerinputs} />
                </div>
                <div className="one-form">
                <p className='register-name'>Password</p>
                <input className='forms' type="password" name="password" autoComplete="off" value={user.password} onChange={handlerinputs}  />
                </div>
                </div>

                <input className='check' type="checkbox" name="terms" /><a className='check-link' href="#">I agree to Terms &amp; Conditions receiving marketing and promotional materials</a>
                <br/><input className='register-button' type="submit" value="Register" onClick={Postdata} />
            </form>


    </div>)

}

export default RegisterForm;



