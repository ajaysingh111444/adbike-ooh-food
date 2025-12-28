import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

function RatingList() {
    const [open, setOpen] = React.useState(false);
  
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
          <ListItemText primary="Rating" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
            <FormControl>
              <FormControlLabel value="Superb 9+" control={<Checkbox />} label="Superb 9+" />
              <FormControlLabel value="Very Good 8+" control={<Checkbox />} label="Very Good 8+" />
              <FormControlLabel value="Good 7+" control={<Checkbox />} label="Good 7+" />
              <FormControlLabel value="Pleasant 6+" control={<Checkbox />} label="Pleasant 6+" />
              </FormControl>
            </ListItemButton>
          </List>
        </Collapse>
        </List>
        <hr />
        <div className='filterBtn'>
            <Button variant="outlined">Filter</Button>
        </div>
      </div>
  )
}

export default RatingList
