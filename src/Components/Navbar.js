import React  from 'react'
import{Link} from "react-router-dom"

const Navbar = () => {

    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">NewsMonkey</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-Link"  style={{color: '#f54298', textDecoration: 'none',marginLeft: '1rem'}} aria-current="page" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-Link" style={{color: '#f54298', textDecoration: 'none',marginLeft: '1rem'}} to="/business">Business</Link></li>
                <li className="nav-item"><Link className="nav-Link" style={{color: '#f54298', textDecoration: 'none',marginLeft: '1rem'}} to="/entertainment">Entertainment</Link></li>
                <li className="nav-item"><Link className="nav-Link" style={{color: '#f54298', textDecoration: 'none',marginLeft: '1rem'}} to="/General">General</Link></li>
                <li className="nav-item"><Link className="nav-Link" style={{color: '#f54298', textDecoration: 'none',marginLeft: '1rem'}} to="/health">Health</Link></li>
                <li className="nav-item"><Link className="nav-Link" style={{color: '#f54298', textDecoration: 'none',marginLeft: '1rem'}} to="/science">Science</Link></li>
                <li className="nav-item"><Link className="nav-Link" style={{color: '#f54298', textDecoration: 'none',marginLeft: '1rem'}} to="/sports">Sports</Link></li>
                <li className="nav-item"><Link className="nav-Link" style={{color: '#f54298', textDecoration: 'none',marginLeft: '1rem'}} to="/technology">Technology</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    )
  }

export default Navbar

