import '../index.css'
import '../assets/stylesheets/Navbar.css'


import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className='navbar_main'>
   
      <div className="nav_head">
      <Link className='nav_logo' to="home"><img src={require('../assets/images/logo.png')} alt="logo"/>
           <div className='nav_title' href=""> Just Jammin'</div>
           
           </Link></div>
        <div>
            <ul class="nav">
            
                <li className="item"><Link to="home">Home</Link></li>
                <li className="item"><Link to="drums">Drums</Link></li>
                <li className="item"><Link to="piano">Piano</Link></li>
                <li className="item"><Link to="guitar">Guitar</Link></li>
                <li className="item"><Link to="musicbox">Musicbox</Link></li>



            </ul>
        </div>
    </div>
  )
}

export default Navbar
