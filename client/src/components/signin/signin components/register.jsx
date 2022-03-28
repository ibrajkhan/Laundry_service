import RegisterBranding from "./registerBranding";
import RegisterForm from "./registerForm";

import Header from './header';
import Footer from './footer1';
import FooterTwo from './FooterTwo';
import './register.css'; 

function Register(){
    return<div>
         <Header/>
     <div className="second-page">
            <RegisterBranding/>
            <RegisterForm/>
    </div>
    <Footer/>
    <FooterTwo/>
    </div>
}
export default Register;