import React, { useState } from "react";
import Card from "@mui/material/Card";
import "./Card.css";
import CardMedia from "@mui/material/CardMedia";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import kebabMenu from "../../assets/images/kebebMenu.png";

export default function MediaCard({
  title,
  image,
  genre,
  year,
  setOpenEditMovieModal,
  setOpenDeleteMovieModal
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  function editHandler() {
    setOpenEditMovieModal(true);
  }
  function deleteHandler() {
    setOpenDeleteMovieModal(true);
  }
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
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="500"
          width="345"
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
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={editHandler} >Edit</MenuItem>
          <MenuItem onClick={deleteHandler}>Delete</MenuItem>
        </Menu>
        {isHovering && (
          <div className="kebab-menu" onClick={handleClick}>
            <img src={kebabMenu} alt="menu" />
          </div>
        )}
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
    </div>
  );
}