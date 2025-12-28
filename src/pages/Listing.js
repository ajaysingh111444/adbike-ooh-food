import React, { useState, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Container, Row, Col } from 'reactstrap';
import Layout1 from '../components/Header1/Layout1';
import SearchIcon from '@mui/icons-material/Search';
import '../assets/css/ListingPage.css';
import RightSideComponent from '../components/ListingPage/RightSide/RightSideComponent';
import LeftSideComponent from '../components/ListingPage/LeftSide/LeftSideComponent';
import Footer from '../components/Footer/Footer'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    
  },
}));

const Listing = () => {
  // search icon fixed at top
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
    <Layout1 >
    
      <div className='listingPage'>
        <Container>
          <Row>
            <Col lg='8' md='6' sm='6'>
              <div className='adress'>
                <p>145 restaurants in Convent Street 2983</p>
              </div>
            </Col>
            <Col lg='4' md='6' sm='6' className={scrolled ? "scrolled" : ""}>
              <div className='searchbar'>
              <Search >
                <SearchIconWrapper className='searchIcon' >
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase className='searchInput'
                  placeholder="Dishes and Restaurant .."
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{marginBottom: '50px'}}>   
        <Container>
          <Row>
            <Col lg='3' md='6' sm='12'>
            < LeftSideComponent />
            </Col>
            <Col lg='9' md='6' sm='12'>
              < RightSideComponent />
            </Col>
          </Row>
        </Container>  
      </div>

      <Footer />

    </Layout1>
    </div>
  )
}

export default Listing
