// import "./NavBar.css";
import "../styles/navbar.css";
import logo from "../assets/shared/logo.svg";
import react, { useState } from "react";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [active, isActive] = useState(false);

  return (
    <nav>
      <ul>
        <img className="icon" src={logo} alt="" />
        <hr />
        <li>
          {<a onClick={() => isActive(!active)} className='onPage' href='/'><b>00 </b>Home</a>}
          {/* <NavLink exact to='/' activeClassName='onPage'>Home</NavLink> */}
          {/* {active ? <a className='onPage' href="/"><b>00</b> Home</a>: (() => isActive(false))} */}
        </li>
        <li>
          <a onClick={() => isActive(active)} href="/destination">
            <b>01</b> Destination
          </a>
        </li>
        <li>
          <a href="/crew">
            <b>02</b> Crew
          </a>
        </li>
        <li>
          <a href="/technology">
            <b>03</b> Technology
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
