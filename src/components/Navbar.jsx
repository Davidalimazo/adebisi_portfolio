import React from 'react'
import { AppBar, Box, Button, Menu, MenuItem, Stack, Toolbar, IconButton, Badge } from '@mui/material';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.css'
import logo from '../assets/images/MyLogo.png'
import { navlinks } from '../assets/data/navlinks';




export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const active = true;

    const open = Boolean(anchorEl);
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
  
  
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
      <Menu
        className='mobile_nav'
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        
      >
      <MenuItem sx={{display:'block', bgcolor:'#0E0824'}}>
        {navlinks && navlinks.map((item)=>(
            <Button sx={{display: 'block', width:'100%', bgcolor:'#0E0824'}} onClick={setMobileMoreAnchorEl} className='nav_btn' key={item.id}><NavLink className={isActive => (isActive ? "selected" : "")
      } to={`${item.url}`}>{item.name}</NavLink></Button>
        ))}
    </MenuItem>
      </Menu>
    );

  return (
    <Box sx={{height:'80px'}}>
    <AppBar position='relative' sx={{bgcolor:'#0E0824', color:'white'}}>
        <Toolbar>
        <Box sx={{display:'flex', pl:'2rem', alignItems:'center'}}><img src={logo} className='myLogo' alt='adebisi logo' /></Box>
        <Box flexGrow={1}/>
        <Box sx={{display:{xs:'none', sm:'flex'}}}>
          <Nav links={navlinks} />
        </Box>
        <Box sx={{display:{xs:'block', sm:'none'}}}>
          <MenuIcon fontSize='large' id='mobile-btn' onClick={setMobileMoreAnchorEl}/>
        </Box>
        
        </Toolbar>
    </AppBar> 
        {renderMobileMenu}
    </Box>
  )
}

const Nav=({links})=>{
    return(
        <>
            {
              links && links.map((item)=>{
              const {name, url, id} = item;
              return(
                <Button sx={{display: 'inline-block'}} className='nav_btn' key={id}><NavLink className={({isActive}) => (isActive ? "selected" : "")
          } to={`${url}`}>{name}</NavLink></Button>
    )})}
        </>
    )
}



