import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FeedIcon from "@mui/icons-material/Feed";

import "./Navbar.css";

export function Navbar() {
  return (
    <NavbarBs className="bg-white shadow-sm mb-3 fixed-bottom">
      <div className="navi ">
        <Nav>
          <Nav.Link to="/" as={NavLink}>
            <HomeIcon color="primary"></HomeIcon>
          </Nav.Link>
          <Nav.Link to="/profile" as={NavLink}>
            <AccountCircleIcon color="primary"></AccountCircleIcon>
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            <FeedIcon color="primary"></FeedIcon>
          </Nav.Link>
        </Nav>
      </div>
    </NavbarBs>
  );
}
