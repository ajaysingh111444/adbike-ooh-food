import React, { useState, useEffect  } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Box } from '@mui/system';
import SortNestedList from './SortNestedList';
import CategoryNestedList from './CategoryNestedList';
import '../../../assets/css/ListingPage.css';
import RatingList from './RatingList';

function LeftSideComponent() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 50 && window.pageYOffset < 1200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`listing_filter ${isScrolled ? "listing_filter-fixed" : ""}`}>
      <Box sx={{ marginTop: '2rem' }}>
        <FormControl>
            <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Delivery"
            name="radio-buttons-group"
            >
            <FormControlLabel value="Delivery" control={<Radio />} label="Delivery" />
            <FormControlLabel value="Takeaway" control={<Radio />} label="Takeaway" />
            </RadioGroup>
        </FormControl>
      </Box>  
      < SortNestedList />
      < CategoryNestedList />
      < RatingList />
    </div>
  )
}

export default LeftSideComponent
