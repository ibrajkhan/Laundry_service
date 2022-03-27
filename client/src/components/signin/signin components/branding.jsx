import {Link} from 'react-router-dom';
import './branding.css'

function Branding(){
    return(
        <div className='branding'> 
        
        <div className='main-heading'>
        <h1 className="brand">Laundry Service
        <p className="caption">Doorstep Wash &amp; Dryclean Service</p>
        </h1>
        </div>
        
        <div className='branding-register-button'>
        <p className="account">Don't Have An Account?</p>
        <Link to='/register'><input className='btn' type="submit" value="Register" /></Link>
        </div>
        <div className='rect'>
            
        </div>
        
        </div>
    )
}
export default Branding;