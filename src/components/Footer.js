import { Link } from "react-router-dom";
function Footer(){

    return(
        <footer className="footer">
        <div className="footer-logo logo">
        <Link to={'/'}>Ksh.</Link>
        </div>
        <div className="footer-nav-items">
            <p>Quick Links</p>
            <ul>
                <li className="footer-nav-link home"><Link to={'/'}>Home</Link></li>
                <li className="footer-nav-link about"><Link to={'/About'}>About</Link></li>
                <li className="nav-link project-page"><Link to={'/Project'}>Project</Link></li>
                <li className="footer-nav-link contact"><Link to={'/Contact'}>Contact</Link></li>
            </ul>
        </div>
        <div className="social-icon">
            <p>Follow Us</p>
            <ul>
                <li><a href="https://www.facebook.com/"><i className="fa-brands fa-facebook" style={{color: '#f5f5f5'}}></i></a></li>
                <li><a href="https://www.instagram.com/"><i className="fa-brands fa-instagram" style={{color: '#e4e9f1'}}></i></a></li>
                <li><a href="https://twitter.com/i/flow/login"><i className="fa-brands fa-twitter" style={{color: '#eff1f5'}} ></i></a></li>
                <li><a href="https://www.linkedin.com/"><i className="fa-brands fa-linkedin" style={{color: '#e7eaee'}} ></i></a></li>
            </ul>
        </div>
        <div className="footer-contact">
            <p>Contact</p>
            <ul>
                <li className="footer-address"><a href="/"><i className="fa-solid fa-location-dot" style={{color: '#e7eaee'}}></i>  121, Transport nagar kokta Bhopal  </a></li>
                <li className="footer-email"><a href="https://kshitijgupta782@gmail.com"><i className="fa-solid fa-envelope" style={{color: '#e7eaee'}} ></i>  kshitijgupta782@gmail.com</a></li>
                <li className="footer-phone"><a href="tel:+9098380207"><i className="fa-solid fa-phone" style={{color: '#e7eaee'}}></i>    9098380207</a></li>
            </ul>
        </div>
    </footer>
    )
}
export default Footer;