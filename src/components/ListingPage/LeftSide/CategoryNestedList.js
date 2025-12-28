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

function CategoryNestedList() {
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
        <ListItemText primary="Category" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
          <FormControl>
            <FormControlLabel value="Pizza - Italian" control={<Checkbox />} label="Pizza - Italian" />
            <FormControlLabel value="Japanese - Sushi" control={<Checkbox />} label="Japanese - Sushi" />
            <FormControlLabel value="Burghers" control={<Checkbox />} label="Burghers" />
            <FormControlLabel value="Vegitarian" control={<Checkbox />} label="Vegitarian" />
            <FormControlLabel value="Bakery" control={<Checkbox />} label="Bakery" />
            <FormControlLabel value="Chinese" control={<Checkbox />} label="Chienese" />
            <FormControlLabel value="Mexican" control={<Checkbox />} label="Mexican" />
            </FormControl>
          </ListItemButton>
        </List>
      </Collapse>
        </List>
        <hr />
    </div>
  )
}

export default CategoryNestedList
