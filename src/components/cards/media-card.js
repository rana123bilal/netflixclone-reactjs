import React from "react";
import Card from "@mui/material/Card";
import "./media-card.css";
import CardMedia from "@mui/material/CardMedia";
import kebabMenu from "../../assets/images/kebebMenu.png";
import { useContext } from "react";
import DataContext from "../../context/data-context";
import PropTypes from "prop-types";

export default function MediaCard({ id, title, image, genre, year }) {
  const {
    setMovieIdForDeleteEdit,
    setOpenEditMovieModal,
    setOpenDeleteMovieModal,
    setViewMovieDetails,
  } = useContext(DataContext);

  const kebabMenuHandler =() =>{
  }

  function editCardHandler() {
    setOpenEditMovieModal(true);
  }
  function deleteCardHandler() {
    setMovieIdForDeleteEdit(id);
    setOpenDeleteMovieModal(true);
  }
  const toggleCard = () => {
    setViewMovieDetails(true);
    setMovieIdForDeleteEdit(id);
  };
  return (
    <div className="card-media">
      <Card
        sx={{
          maxWidth: 345,
          boxShadow: "none",
          borderRadius: "unset",
          margin: "5px",
        }}
      >
        <div className="card-image">
          <CardMedia
           sx={{display:"inline-block"}}
            component="img"
            className="media-card"
            height="500"
            width="345"
            image={image}
            alt="green iguana"
            onClick={toggleCard}
          />
          <div className="menu-dropdown">
            <div className="kebab-menu" onClick={kebabMenuHandler}>
              <img src={kebabMenu} alt="menu"/>
            </div>
           <div className="dropdown-menu">
              <div className="dropdown-content">
                <p onClick={deleteCardHandler}>Delete</p>
                <p onClick={editCardHandler}>Edit</p>
              </div>
            </div>
          </div>
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
  year: PropTypes.string,
};
