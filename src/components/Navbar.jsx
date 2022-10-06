import React from "react";
import {
  AppBar,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.css";
import logo from "../assets/images/MyLogo.png";
import { navlinks } from "../assets/data/navlinks";


const MobileMenu = () => {
  return (
    <>
      {navlinks &&
        navlinks.map((item) => {
          return (
            <List key={item.id} sx={{zIndex:111111, bgcolor: "#0E0824"}}>
              <ListItem>
                <ListItemText>
                  <Button
                    sx={{ display: "block", width: "100%"}}
                    className="nav_btn"
                    key={item.id}
                  >
                    <NavLink
                      className={(isActive) => (isActive ? "selected" : "")}
                      to={`${item.url}`}
                    >
                      {item.name}
                    </NavLink>
                  </Button>
                </ListItemText>
              </ListItem>
            </List>
          );
        })}
    </>
  );
};

export default function Navbar() {

  const [ismobileMenu, setMobileMenu] = React.useState(false);


  return (
    <Box sx={{ height: "80px" }}>
      <AppBar position="relative" sx={{ bgcolor: "#0E0824", color: "white" }}>
        <Toolbar>
          <Box sx={{ display: "flex", pl: "2rem", alignItems: "center" }}>
            <img src={logo} className="myLogo" alt="adebisi logo" />
          </Box>
          <Box flexGrow={1} />
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <Nav links={navlinks} />
          </Box>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <MenuIcon
              fontSize="large"
              id="mobile-btn"
              onClick={() => setMobileMenu(!ismobileMenu)}
            />
          </Box>
        </Toolbar>
      </AppBar>
      {ismobileMenu && <MobileMenu />}
    </Box>
  );
}

const Nav = ({ links }) => {
  return (
    <>
      {links &&
        links.map((item) => {
          const { name, url, id } = item;
          return (
            <Button
              sx={{ display: "inline-block" }}
              className="nav_btn"
              key={id}
            >
              <NavLink
                className={({ isActive }) => (isActive ? "selected" : "")}
                to={`${url}`}
              >
                {name}
              </NavLink>
            </Button>
          );
        })}
    </>
  );
};
