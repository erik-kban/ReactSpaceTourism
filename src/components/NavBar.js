// import "./NavBar.css";
import '../styles/navbar.css'
import logo from '../assets/shared/logo.svg'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <img className="icon" src={logo} alt="" />
        <hr />
        <li>
          <a href="default.asp">
            <b>00</b> Home
          </a>
        </li>
        <li>
          <a href="news.asp">
            <b>01</b> Destination
          </a>
        </li>
        <li>
          <a href="contact.asp">
            <b>02</b> Crew
          </a>
        </li>
        <li>
          <a href="about.asp">
            <b>03</b> Technology
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
