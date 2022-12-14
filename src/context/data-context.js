import React from "react";
import PropTypes from "prop-types";
import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [toggleMovieModal, setToggleMovieModal] = useState(false);
  const [openEditMovieModal, setOpenEditMovieModal] = useState(false);
  const [openDeleteMovieModal, setOpenDeleteMovieModal] = useState(false);
  const [inputSearchTerm, setInputSearchTerm] = useState("");
  const [sortedMovieList, setSortedMovieList] = useState([]);
  const [movieId, setMovieId] = useState(null);
  const [viewMovieDetails, setViewMovieDetails] = useState(false);

  const setMovieIdForDeleteEdit = (id) => {
    setMovieId(id);
  };

  useEffect(() => {
    document.title = "Netflix Clone";
  }, []);

  return (
    <DataContext.Provider
      value={{
        setSortedMovieList,
        sortedMovieList,
        setToggleMovieModal,
        toggleMovieModal,
        setOpenEditMovieModal,
        openEditMovieModal,
        openDeleteMovieModal,
        setOpenDeleteMovieModal,
        inputSearchTerm,
        setInputSearchTerm,
        movieId,
        setMovieId,
        viewMovieDetails,
        setViewMovieDetails,
        setMovieIdForDeleteEdit,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
DataProvider.propTypes = {
  children: PropTypes.any,
};

export default DataContext;
