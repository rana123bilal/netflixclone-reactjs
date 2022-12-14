import React from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { useContext, useEffect } from "react";
import DataContext from "./context/data-context";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import NavSection from "./components/nav-component/nav-section";
import CardList from "./components/cards/card-list";
import Footer from "./components/footer/Footer";
import ErrorBoundry from "./components/error-boundries/error-boundry";
import AddMovie from "./components/movie/add-movie";
import EditMovie from "./components/movie/edit-movie";
import DeleteMovie from "./components/movie/delete-movie";
import ViewMovie from "./components/movie/view-movie-details";
import { fetchMovieList } from "./redux/actions/movie-actions";

function App() {
  const { viewMovieDetails, openEditMovieModal } = useContext(DataContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieList());
  }, [dispatch]);

  return (
    <div className="App">
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

export default App;
