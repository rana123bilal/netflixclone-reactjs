import { useState, useEffect } from "react";
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
import { DataProvider } from "./context/DataContext";

function App() {
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
    <div className="App">
      <DataProvider>
        <Header setOpenAddMovieModal={setOpenAddMovieModal} />
        <AddMovie
          sortedList={sortedList}
          setSortedList={setSortedList}
          openAddMovieModal={openAddMovieModal}
          setOpenAddMovieModal={setOpenAddMovieModal}
        />
        <Search setSearchedTerm={setSearchedTerm} />
        <NavSection setSortedList={setSortedList} />
        <ErrorBoundry>
          <CardList
            getId={getId}
            sortedList={sortedList}
            openDeleteMovieModal={openDeleteMovieModal}
            searchedTerm={searchedTerm}
            openEditMovieModal={openEditMovieModal}
            setOpenEditMovieModal={setOpenEditMovieModal}
            setOpenDeleteMovieModal={setOpenDeleteMovieModal}
          />
          <EditMovie
            openEditMovieModal={openEditMovieModal}
            setOpenEditMovieModal={setOpenEditMovieModal}
          />
          <DeleteMovie
            movieId={movieId}
            sortedList={sortedList}
            setSortedList={setSortedList}
            openDeleteMovieModal={openDeleteMovieModal}
            setOpenDeleteMovieModal={setOpenDeleteMovieModal}
          />
        </ErrorBoundry>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
