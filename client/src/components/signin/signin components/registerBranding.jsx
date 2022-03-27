import {Link} from 'react-router-dom';
import './registerBranding.css'

function RegisterBranding(){
    return(
        <div className='reg-branding'>
        <div className='reg-main-heading'>
        <h1 className="reg-brand">Laundry Service
        <p className="reg-caption">Doorstep Wash &amp; Dryclean Service</p>
        </h1>
         
        </div>
        
        <div className='reg-register-button'>
        <p className="reg-account">Already Have Account</p>

        <Link to='/'><input className='reg-btn' type="submit" value="Sign In" /></Link>
        </div>
        <div className='rectt'>
            
            </div>
        
        </div>
    )
}
export default RegisterBranding;