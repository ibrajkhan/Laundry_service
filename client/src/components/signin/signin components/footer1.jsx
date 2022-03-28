import './footer1.css';
import fb from '../images/facebook.jpg';
import insta from '../images/instagram.jpg';
import linkedin from '../images/linkedin.jpg';



function Footer(){ 
    return(
        <div className='footer1'>
        <div className="referal-component">
            <p className="reference">Now Refer &amp; Earn &#8377;500 for every referral*
            <br/><span className="ref-cap">*Terms and Conditions will be applied</span>
            </p>
        
        </div>
        <div className="details">
            <div className="about">
                <p className='foot-head1'>ABOUT US</p>
                <br/><p className="info-cap">Doorstep Wash &amp; Dryclean Service </p>
            </div>

            <div className="foo1-navbar">
                <div className="nav">
                    <p className="foot-head2">Home</p>
                    <p className="info-cap">Sign In</p><br/>
                    <p className="info-cap">Register</p>
                </div>
                <div className="nav">
                <p className="foot-head2">Pricing</p>
                </div>
                <div className="nav">
                <p className="foot-head2">Career</p>
                <p className="info-cap">Blogs</p><br/>
                <p className="info-cap">Create</p>
                </div>
                <div className="nav">
                <p className="foot-head2">Contact</p>
                </div>
            </div>
            <div className="socialmedia">
                <p className="foot-head1">SOCIAL MEDIA</p>
                <div >
                <img className='images' src={fb} alt="fb" />
                <img className='images' src={insta} alt="insta" />
                <img className='images' src={linkedin} alt="linkedin" />
                </div>
            </div>
            <div className="blank"></div>



        </div>
        </div>

    )
}
export default Footer;