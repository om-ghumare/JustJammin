import '../index.css'
import '../assets/stylesheets/Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar_main'>
      {/* <h2>Nav</h2> */}
      <div className="head"><img src={require('../assets/images/logo.png')} alt="logo"/>
           <div className='title' href=""> Just Jammin'</div></div>
        <div>
            <ul class="nav">
                <li className="item"><a href="#about">Drums</a></li>
                <li className="item"><a href="#tools">Piano </a></li>
                <li className="item"><a href="#forum">Guitar</a></li>
                <li className="item"><a href="#connect">Music Box</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
