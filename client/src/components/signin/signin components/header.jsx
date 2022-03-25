import './header.css';
import {Link} from 'react-router-dom';

 
const Header = ()=>{
    return( <section className="page-header">
        
            <h3 className="heading">LAUNDRY</h3>
        <div className='list'>
        <Link to='/' className='list-element'>Home</Link>
        <Link to='pricing' className='list-element'>Pricing</Link>
        <Link to='/career' className='list-element'>Career</Link>
        <Link  to='/' className='list-element-signin'>Sign In</Link>
        </div>
    </section>       
    )
}
export default Header;