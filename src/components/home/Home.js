import React from "react";
import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import DataContext from "../../context/data-context";
import Search from "../search/Search";
import Footer from "../footer/Footer";
import {
  fetchMovieList,
  searchMoviesByGenres,
} from "../../redux/actions/movie-actions";
import Header from "../header/Header";
import NavSection from "../nav-component/nav-section";
import CardList from "../cards/card-list";
import ErrorBoundry from "../error-boundries/error-boundry";
import AddMovie from "../movie/add-movie";
import EditMovie from "../movie/edit-movie";
import DeleteMovie from "../movie/delete-movie";
import ViewMovie from "../movie/view-movie-details";
import { genreList } from "../../Constants";
import { useParams } from "react-router-dom";
import SORT_TYPES from "../../Constants";
import {
  searchMoviesByTitle,
  sortMovieList,
} from "../../redux/actions/movie-actions";

function Home() {
  const { viewMovieDetails, openEditMovieModal } = useContext(DataContext);
  const dispatch = useDispatch();
  const { searchQuery } = useParams();

  const sortMovies = (type) => {
    const sortType = SORT_TYPES[type];
    dispatch(sortMovieList(sortType));
  };

  useEffect(() => {
    if (searchQuery) {
      if (genreList.includes(searchQuery)) {
        dispatch(searchMoviesByGenres(searchQuery));
        return;
      } else if (searchQuery in SORT_TYPES) {
        sortMovies(searchQuery);
        return;
      }
      dispatch(searchMoviesByTitle(searchQuery));
    } else {
      dispatch(fetchMovieList());
    }
  }, [dispatch, searchQuery]);

  return (
    <div>
      <ErrorBoundry>
        <div className="header">{!viewMovieDetails && <Header />}</div>
        <AddMovie />
        {!viewMovieDetails && <Search />}
        {viewMovieDetails && <ViewMovie />}
        <div className="movie-list-container">
          <NavSection />
          <CardList />
          {openEditMovieModal && <EditMovie />}
          <DeleteMovie />
        </div>
        <Footer />
      </ErrorBoundry>
    </div>
  );
}

export default Home;
