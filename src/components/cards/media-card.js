import React from "react";
import Card from "@mui/material/Card";
import "./media-card.css";
import CardMedia from "@mui/material/CardMedia";
import kebabMenu from "../../assets/images/kebebMenu.png";
import { useContext } from "react";
import DataContext from "../../context/data-context";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";

export default function MediaCard({ id, title, image, genre, year }) {
  const {
    setMovieIdForDeleteEdit,
    setOpenEditMovieModal,
    setOpenDeleteMovieModal,
  } = useContext(DataContext);
  const navigate = useNavigate();

  function editCardHandler() {
    setOpenEditMovieModal(true);
    setMovieIdForDeleteEdit(id);
  }
  function deleteCardHandler() {
    setMovieIdForDeleteEdit(id);
    setOpenDeleteMovieModal(true);
  }

  const toggleCard = () => {
    setMovieIdForDeleteEdit(id);
    navigate(`/search?movie=${id}`);
  };

  const addDefaultSourceImage = (event) => {
    event.target.src = "https://ranobehub.org/img/ranobe/posters/default.jpg";
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
            sx={{ display: "inline-block" }}
            component="img"
            className="media-card"
            height="500"
            width="345"
            image={image}
            alt={title}
            onClick={toggleCard}
            onError={addDefaultSourceImage}
          />
          <div className="menu-dropdown">
            <div className="kebab-menu">
              <img src={kebabMenu} alt="menu" />
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
            <p>{genre?.join(", ")}</p>
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
  genre: PropTypes.array,
  year: PropTypes.string,
};
