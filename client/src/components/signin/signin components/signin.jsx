import {Link} from 'react-router-dom';
import './p3-signin.css'
function Signin(){ 
    return(
        <div className='p3-signin-component'>
            <h1 className="p3-sign-in">SIGN IN</h1>
            <form className='p3-signin-forms'>
                <p className='p3-form-name'>Email/Phone</p>
                <input className='p3-forms' type="text" name="Email"  />
                <p className='p3-form-name'>Password</p>
                <input className='p3-forms' type="text" name="Password"  />
                <a className='p3-passsword-verify' href="#">Forgot Password?</a>
                <Link  to='/order'> <input type="submit" value="Sign In" className='p3-signin-btn' /></Link>
            </form>
            
        </div>
    )
}
export default Signin;


