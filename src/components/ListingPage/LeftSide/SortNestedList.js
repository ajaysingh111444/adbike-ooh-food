import React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import '../../../assets/css/ListingPage.css';

function SortNestedList() {
    const [open, setOpen] = React.useState(true);
  
    const handleClick = () => {
      setOpen(!open);
    };

    return (
    <div className='NestedList'>
        <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Sort" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
          <FormControl>
            <RadioGroup>
            <FormControlLabel value="Takeaway" control={<Radio />} label="Takeaway" />
            <FormControlLabel value="Reccomended" control={<Radio />} label="Reccomended" />
            <FormControlLabel value="Price: low to high" control={<Radio />} label="Price: low to high" />
            <FormControlLabel value="Up to 15% off" control={<Radio />} label="Up to 15% off" />
            <FormControlLabel value="All Offers" control={<Radio />} label="All Offers" />
            </RadioGroup>
            </FormControl>
          </ListItemButton>
        </List>
      </Collapse>
        </List>
        <hr />
    </div>
  )
}

export default SortNestedList
