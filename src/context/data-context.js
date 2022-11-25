import React, { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

const DataContext = createContext({});

export function DataProvider({ children }) {
  const [toggleMovieModal, setToggleMovieModal] = useState(false);
  const [openEditMovieModal, setOpenEditMovieModal] = useState(false);
  const [openDeleteMovieModal, setOpenDeleteMovieModal] = useState(false);
  const [searchedTerm, setSearchedTerm] = useState("");
  const [sortedList, setSortedList] = useState([]);
  const [movieId, setMovieId] = useState(null);

  const setMovieIdForDeleteEdit = (id) => {
    setMovieId(id);
  };

  useEffect(() => {
    document.title = "Netflix Clone";
  }, []);

  const values = useMemo(
    () => ({
      setSortedList,
      sortedList,
      setToggleMovieModal,
      toggleMovieModal,
      setOpenEditMovieModal,
      openEditMovieModal,
      openDeleteMovieModal,
      setOpenDeleteMovieModal,
      searchedTerm,
      setSearchedTerm,
      movieId,
      setMovieId,
      setMovieIdForDeleteEdit,
    }),
    [
      movieId,
      openDeleteMovieModal,
      openEditMovieModal,
      searchedTerm,
      sortedList,
      toggleMovieModal,
    ]
  );

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
}
DataProvider.propTypes = {
  children: PropTypes.any,
};

export default DataContext;
