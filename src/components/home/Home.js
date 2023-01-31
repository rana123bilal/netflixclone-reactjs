import React from "react";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataContext from "../../context/data-context";
import Search from "../search/search";
import Footer from "../footer/footer";
import { fetchMovieList } from "../../redux/actions/movie-actions";
import Header from "../header/header";
import NavSection from "../nav-component/nav-section";
import CardList from "../cards/card-list";
import ErrorBoundry from "../error-boundries/error-boundry";
import AddMovie from "../movie/add-movie";
import EditMovie from "../movie/edit-movie";
import DeleteMovie from "../movie/delete-movie";
import ViewMovie from "../movie/view-movie-details";
import { genreList } from "../../constants";
import SORT_TYPES from "../../constants";
import {
  searchMoviesByTitle,
  sortMovieList,
  filterMoviesByGenres,
  listMovieDetails,
} from "../../redux/actions/movie-actions";

function Home() {
  const { viewMovieDetails, openEditMovieModal, movieId } =
    useContext(DataContext);
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movieList);

  const search = window.location.search;
  const searchParams = new URLSearchParams(search);
  const filterParam = searchParams.get("filter");
  const genreParam = genreList.includes(filterParam);
  const hasFilterParam = searchParams.has("filter");
  const sortByParam = searchParams.get("sortBy");
  const searchByParam = searchParams.get("searchBy");
  const getSearchParam = searchParams.get("search");

  const sortMovies = (type) => {
    const sortType = SORT_TYPES[type];
    dispatch(sortMovieList(sortType));
  };

  useEffect(() => {
    if (search) {
      if (genreParam && hasFilterParam) {
        dispatch(filterMoviesByGenres(filterParam));
        return;
      } else if (!genreParam && sortByParam in SORT_TYPES) {
        sortMovies(sortByParam);
        return;
      }
      if (searchByParam === "title") {
        dispatch(searchMoviesByTitle(getSearchParam));
      }
    }
  }, [dispatch, search]);

  useEffect(() => {
    if (movieId) {
      dispatch(listMovieDetails(movieId));
    }
    if (!movies.length) {
      dispatch(fetchMovieList());
    }
  }, [movieId, dispatch]);

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
