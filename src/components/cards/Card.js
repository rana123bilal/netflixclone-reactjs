import React, {useState} from 'react';
import Card from '@mui/material/Card';
import './Card.css';
import CardMedia from '@mui/material/CardMedia';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function MediaCard({title, image, genre, year}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isHovering, setIsHovering] = useState(false);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleMouseOver = () => {
        setIsHovering(true);
      };
    
      const handleMouseOut = () => {
        setIsHovering(false);
      };
  return (
    <>
    <Card sx={{ maxWidth: 345 }}  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <CardMedia
        component="img"
        height="500"
        image={image}
        alt="green iguana"
      />
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
      {isHovering && <div className="kebab-menu" onClick={handleClick} >
            <div className="firstdot"></div>
            <div className="seconddot"></div>
            <div className="thirddot"></div>
          </div>}
      <div className="text">
          <div className="title">
            <h3>{title}</h3>
            <p>{genre}</p>
          </div>
          <div>
            <p className="year">{year}</p>
          </div>
        </div>
    </Card>
    </>
  );
}