import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/Dawit.png'
import LogoSubtitle from '../../assets/images/Dawit sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logoS" />
      <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className='about-link' to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/dawit-assaye-2712b323a/'>
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
        </a>
      </li>
      <li>
        <a target='_blank' rel="noreferrer" href='https://github.com/Dawit-Assaye'>
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
        </a>
      </li>
      <li>
        <a target='_blank' rel="noreferrer" href='https://www.facebook.com/dawit.assaye.75/'>
          <FontAwesomeIcon icon={faFacebook} color="#4d4d4e"/>
        </a>
      </li>
    </ul>
  </div>
)
export default Sidebar
