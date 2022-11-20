import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Search from "./components/search-component/Search";
import NavSection from "./components/nav-component/NavSection";
import CardList from "./components/cards/CardList";
import Footer from "./components/footer/Footer";
import ErrorBoundry from "./components/error-boundries/ErrorBoundry";
import AddMovie from "./components/movie/AddMovie";
import EditMovie from "./components/movie/EditMovie";
import DeleteMovie from "./components/movie/DeleteMovie";

function App() {
  const [openAddMovieModal, setOpenAddMovieModal] = useState(false);
  const [openEditMovieModal, setOpenEditMovieModal] = useState(false);
  const [openDeleteMovieModal, setOpenDeleteMovieModal] = useState(false);
  const [searchedTerm, setSearchedTerm] = useState("");

  return (
    <div className="App">
      <Header setOpenAddMovieModal={setOpenAddMovieModal} />
      <AddMovie
        openAddMovieModal={openAddMovieModal}
        setOpenAddMovieModal={setOpenAddMovieModal}
      />
      <Search setSearchedTerm={setSearchedTerm} />
      <NavSection />
      <ErrorBoundry>
        <CardList
          searchedTerm={searchedTerm}
          setOpenEditMovieModal={setOpenEditMovieModal}
          setOpenDeleteMovieModal={setOpenDeleteMovieModal}
        />
        <EditMovie
          openEditMovieModal={openEditMovieModal}
          setOpenEditMovieModal={setOpenEditMovieModal}
        />
        <DeleteMovie
          openDeleteMovieModal={openDeleteMovieModal}
          setOpenDeleteMovieModal={setOpenDeleteMovieModal}
        />
      </ErrorBoundry>
      <Footer />
    </div>
  );
}

export default App;
