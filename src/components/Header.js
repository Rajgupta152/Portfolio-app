import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Header(){
    const [hamberger, setHamberger] = useState(null);
    const [navItems, setNavItems] = useState(null);
    const [xMark, setXMark] = useState(null);
    const navLink = document.querySelectorAll('.nav-link');
  
    useEffect(() => {
      // Use useEffect to ensure that the DOM elements are available
      setHamberger(document.querySelector('.fa-bars'));
      setNavItems(document.querySelector('.nav-items'));
      setXMark(document.querySelector('.fa-xmark'));
    }, []); // The empty array as the second argument makes this effect run once after the initial render
  
    const openMenu = () => {
      navItems.style.left = '0';
      hamberger.style.display = 'none';
      xMark.style.display = 'block';
    };
  
    const closeMenu = () => {
      navItems.style.left = '-100%';
      hamberger.style.display = 'block';
      xMark.style.display = 'none';
    };
  
    navLink.forEach((item) => {
      item.addEventListener('click', function () {
        navItems.style.left = '-100%';
        hamberger.style.display = 'block';
        xMark.style.display = 'none';
      });
    });
    return(
      <header>
        <nav className="navbar">
            <div className="logo">
                <a href="#">Ksh.</a>
            </div>
            <div className="nav-items">
                <ul>
                    <li className="nav-link home"><Link to={'/'}>Home</Link></li>
                    <li className="nav-link about"><Link to={'/About'}>About</Link></li>
                    <li className="nav-link project-page" ><Link to={'/Project'}>Project</Link></li>
                    <li className="nav-link contact"><Link to={'/Contact'}>Contact</Link></li>
                  
                </ul>
            </div>
                <i className="fa-solid fa-bars" onClick={openMenu} style={{color: '#f0f2f5'}} ></i>
                <i className="fa-solid fa-xmark" onClick={closeMenu} style={{color: '#e8ecf2'}}></i>
        </nav>
      </header>
    )
} 
export default Header;