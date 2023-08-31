import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {

 
  
  return (
    
    <>
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand " to="/Home">
    <img
  src="https://knowledge.tech/assets/i/KnowledgeImages/logo.png"
  alt="Logo"
  style={{
    display: 'block',
    WebkitUserSelect: 'none',
    margin: 'auto',
    backgroundColor: 'hsl(0, 0%, 90%)',
    transition: 'background-color 300ms',
  }}
/>
 </Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <Link className="nav-link dropdown-toggle mx-2" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <strong> GETTING STARTED </strong>
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/HOW TO APPLY"><strong>HOW TO APPLY</strong></Link></li>
            <li><Link className="dropdown-item" to="/FAQS"><strong>FAQS</strong></Link></li>
            
          </ul>
          <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle mx-2" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           ABOUT
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/EXUCTIVE TEAM">EXUCTIVE TEAM</Link></li>
           
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle mx-2" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PARTINERS
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/KNOWLEDGE PARTINERS">KNOWLEDGE PARTINERS</Link></li>
            <li><Link className="dropdown-item" to="/UNIVERSTY ALLIANCES">UNIVERSTY ALLIANCES</Link></li>
            
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle mx-2" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            TRAINERS
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/TESTIMONIALS">TESTIMONIALS</Link></li>
          
            
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle mx-2" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           PROGRAMMES
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/TECH LAUNCHPAD">TECH LAUNCHPAD</Link></li>
            <li><Link className="dropdown-item" to="/DATA SCIENCES">DATA SCIENCES</Link></li>
            <li><Link className="dropdown-item" to="/CYBER SECURITY">CYBER SECURITY</Link></li>
            <li><Link className="dropdown-item" to="/WEB DEVELOPMENT">WEB DEVELOPMENT</Link></li>
            <li><Link className="dropdown-item" to="/SOFT SKILLS">SOFT SKILLS</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link mx-2" to="/CONTACT US">CONTACT US</Link>
        </li>
      </ul>
      <div className="right_menu d-flex align-items-center">
          <Link className="text-white d-none d-md-block" to="/applynow">
            <button type="button" className="viewBtn fillBTn text-uppercase mr-3 btn btn-link mx-4"style={{ textDecoration: 'none',backgroundColor:'greenyellow' }}>Apply Now</button>
          </Link>
          <Link to="/login" className="w-auto loginbtn "style={{ textDecoration: 'none',backgroundColor:'white' }}>Log In</Link>
        </div>
    </div>
  </div>
</nav>
    
    
    </>
  )
}

export default Navbar



