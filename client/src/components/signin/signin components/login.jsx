import Branding from "./branding";
import  Signin  from "./signin";

import Header from './header';
import Footer from './footer1';
import FooterTwo from './FooterTwo';
import './login.css';
  
function Login(){
    return(
        <div>
            <Header/>
        <div className="body">
        <Branding></Branding>
        <Signin></Signin>  
        </div> 
        <Footer/>
       <FooterTwo/>
        </div> 
    )
}
export default Login;