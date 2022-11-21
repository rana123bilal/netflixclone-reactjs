import React from "react";
import PropTypes from 'prop-types';
import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [openAddMovieModal, setOpenAddMovieModal] = useState(false);
  const [openEditMovieModal, setOpenEditMovieModal] = useState(false);
  const [openDeleteMovieModal, setOpenDeleteMovieModal] = useState(false);
  const [searchedTerm, setSearchedTerm] = useState("");
  const [sortedList, setSortedList] = useState([]);
  const [movieId, setMovieId] = useState(null);

  const getId = (id) => {
    setMovieId(id);
  };

  useEffect(() => {
    document.title = "Netflix Clone";
  }, []);

  return (
    <DataContext.Provider
      value={{
        setSortedList,
        sortedList,
        setOpenAddMovieModal,
        openAddMovieModal,
        setOpenEditMovieModal,
        openEditMovieModal,
        openDeleteMovieModal,
        setOpenDeleteMovieModal,
        searchedTerm,
        setSearchedTerm,
        movieId,
        setMovieId,
        getId,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
DataProvider.propTypes = {
  children: PropTypes.any
};

export default DataContext;
