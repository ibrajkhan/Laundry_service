import './registerform.css'


function RegisterForm(){
    return <div className='register-component'>
            <h1 className="register">REGISTER</h1>
            <form className='register-forms'>
                <div className="dif-forms">
                <div className="one-form">
                <p className='register-name'>Name</p>
                <input className='forms' type="text" name="Name" />
                </div>
                <div className="one-form">
                <p className='register-name'>Email</p>
                <input className='forms' type="text" name="Email"  />
                </div>
                </div>
                
                <div className="dif-forms">
                <div className="one-form">
                <p className='register-name'>Phone</p>
                <input className='forms' type="number" name="Phone"  />
                </div>
                <div className="one-form">
                <p className='register-name'>State</p>
                <input className='forms' type="text" name="State"  />
                </div>
                </div>
                <div className="dif-forms">
                <div className="one-form">
                <p className='register-name'>District</p>
                <input className='forms' type="text" name="District"  />
                </div>
                <div className="one-form">
                <p className='register-name'>Address</p>
                <input className='forms' type="text" name="Address"  />
                </div>
                </div>
                <div className="dif-forms">
                <div className="one-form">
                <p className='register-name'>Pincode</p>
                <input className='forms' type="number" name="Pincode"  />
                </div>
                <div className="one-form">
                <p className='register-name'>Password</p>
                <input className='forms' type="password" name="Password"  />
                </div>
                </div>

                <input className='check' type="checkbox" name="terms" /><a className='check-link' href="#">I agree to Terms &amp; Conditions receiving marketing and promotional materials</a>
                <br/><input className='register-button' type="submit" value="Register"  />
            </form>


    </div>

}

export default RegisterForm;


