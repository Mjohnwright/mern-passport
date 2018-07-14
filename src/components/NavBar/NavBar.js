import React from "react";
import "./NavBar.css";
import Home from "../../components/Home";
import RegisterModal from "../../components/RegisterModal";
import LoginModal from "../../components/LoginModal";
import LogoutButton from "../../components/LogoutButton";
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';



const Nav = (props) => (
  <nav className="navbar">

  <div className="visible-xs">
      <ButtonToolbar>
        <DropdownButton 
          bsStyle="default"
          noCaret
          title=" Menu"
          id="dropdown-no-caret"
          className="glyphicon glyphicon-th-list"
        >
          <MenuItem eventKey="1"><Home /></MenuItem>
          <MenuItem eventKey="2"><RegisterModal /></MenuItem>
          <MenuItem eventKey="3"><LoginModal /></MenuItem>
        </DropdownButton>
      </ButtonToolbar>
      </div>


    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand hidden-xs" href="/">
          Mow-Me
        </a>
      </div>
    
      <ul className="nav navbar-nav navbar-right hidden-xs">
        <li><Home /></li>
        {!props.loggedIn &&
          <li><RegisterModal /></li>
        }
        {!props.loggedIn &&
          <li><LoginModal _login={props._login} loggedIn={props.loggedIn} /></li>
        }
        {props.loggedIn &&
          <li>Welcome {props.currentUser}</li>
        }
        {props.loggedIn &&
          <li><LogoutButton /></li>
        }

      </ul>

    </div>
  </nav>
)

export default Nav;