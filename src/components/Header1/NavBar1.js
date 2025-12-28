import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Drawer , Box, IconButton, Divider, Container} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import {Link} from 'react-router-dom';
import '../../assets/css/Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const NavBar = () => {
    //handle scrolltotop click
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
    };

    //mobile view navbar
    const [mobileOpen, setMobileOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);

    //handle menu click
    const handleDrawerToggle = () => {
         setMobileOpen(!mobileOpen)
    }

    const changeBackground = () =>{
        if(window.scrollY >= 100){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    //menu drawer
    const drawer =(
        <Box onClick={handleDrawerToggle} sx={{textAlign: "center"}}>
            <Typography align="center" className="mobile-logo" variant='h6' component="div" sx={{ flexGrow: 1, bgcolor: "#e54750", padding: '30px 0 25px 0'}}>
                    < FastfoodIcon />Call4Need
                </Typography>
                <Divider />
                <ul className="mobile-navigation">
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/Listing'}>Listing</Link>
                    </li>
                    <li>
                        <Link to={'/SubmitRestaurant'}>Submit Restaurant</Link>
                    </li>
                    <li>
                        <Link to={'/SubmitRider'}>Submit Rider</Link>
                    </li>
                    <li>
                        <Link to={'/Contacts'}>Contacts</Link>
                    </li>
                </ul>
        </Box>
    )
  return (
    
    <React.Fragment>
        
        <AppBar elevation={0} component={'nav'} sx={{bgcolor: "#fff", borderBottom:'1px solid #ededed' }} className={navbar ? 'navbar active' : 'navbar'}>
        <Container maxWidth="lg">
            <Toolbar>
                <IconButton className="menu-icon" aria-label="open drawer" edge="start" 
                sx= {{ mr : 2, display: { sm: "none" }, }}
                onClick={handleDrawerToggle}>
                <MenuIcon />
                </IconButton>
                <Typography className="logo" variant='h6' component="div" sx={{ flexGrow: 1}}>
                    < FastfoodIcon />Call4Need
                </Typography>
                <Box sx={{ display: { xs: "none", sm: "block" , padding: '0px'} }}>
                <ul className="navigation-menu">
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/Listing'}>Listing</Link>
                    </li>
                    <li>
                        <Link to={'/SubmitRestaurant'}>Submit Restaurant</Link>
                    </li>
                    <li>
                        <Link to={'/SubmitRider'}>Submit Rider</Link>
                    </li>
                    <li>
                        <Link to={'/Contacts'}>Contacts</Link>
                    </li>
                </ul>
                </Box>
                <Link to={'/Login'}><LoginIcon className="login-icon"/></Link>
            </Toolbar>
        </Container>
        </AppBar>
        <Box component="nav">
            <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} 
            sx={{display:{xs:'block', sm:'none'}, 
            flexShrink: 0,
            '& .MuiDrawer-paper': {
            width: '240px',
            boxSizing: 'border-box',}} }>
                {drawer}
            </Drawer>
        </Box>
        <Toolbar />
        {scrollPosition > 50 && (
        <div className='visible' id="toTop" onClick={handleClick}>
            <KeyboardArrowUpIcon className="toTopIcon"/>
        </div>
        )}
    </React.Fragment>
  )
};

export default NavBar
