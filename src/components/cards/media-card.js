import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import "./media-card.css";
import CardMedia from "@mui/material/CardMedia";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import kebabMenu from "../../assets/images/kebebMenu.png";
import { useContext } from "react";
import DataContext from "../../context/data-context";
import PropTypes from "prop-types";

export default function MediaCard({ id, title, image, genre, year }) {
  const {
    setMovieIdForDeleteEdit,
    openEditMovieModal,
    openDeleteMovieModal,
    setOpenEditMovieModal,
    setOpenDeleteMovieModal,
    setViewMovieDetails,
  } = useContext(DataContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setAnchorEl(false);
  }, [openEditMovieModal, openDeleteMovieModal]);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  function editHandler() {
    setOpenEditMovieModal(true);
  }
  function deleteHandler() {
    setMovieIdForDeleteEdit(id);
    setOpenDeleteMovieModal(true);
  }
  const handleClose = () => {
    setAnchorEl(null);
  };
  const toggleCard = () => {
    setViewMovieDetails(true);
    setMovieIdForDeleteEdit(id);
  };
  return (
    <div
      // className="card"
      // onMouseOver={() => setIsHovering(true)}
      // onMouseOut={() => setIsHovering(false)}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="500"
          width="345"
          image={image}
          alt="green iguana"
          onClick={toggleCard}
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
          <MenuItem onClick={editHandler}>Edit</MenuItem>
          <MenuItem onClick={deleteHandler}>Delete</MenuItem>
        </Menu>
        <div className="kebab-menu" onClick={handleClick}>
          <img src={kebabMenu} alt="menu" />
        </div>

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

MediaCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.any,
  genre: PropTypes.string,
  year: PropTypes.number,
};
