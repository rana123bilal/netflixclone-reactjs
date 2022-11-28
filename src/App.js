import React from "react";
import "./App.css";
import { useContext } from "react";
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

function App() {
  const { viewMovieDetails } = useContext(DataContext);

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
          <EditMovie />
          <DeleteMovie />
        </div>
        <Footer />
      </ErrorBoundry>
    </div>
  );
}

export default App;
