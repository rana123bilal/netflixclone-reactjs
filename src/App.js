import { useState, useRef, useEffect} from "react";
import "./App.css";
import Header from "./components/header/Header";
import Search from "./components/search-component/Search";
import NavSection from "./components/nav-component/NavSection";
import CardList from "./components/cards/CardList";
import Footer from "./components/footer/Footer";
import ErrorBoundry from "./components/error-boundries/ErrorBoundry";
import AddMovie from "./components/movie/AddMovie";

function App() {
  const [openAddMovieModal, setOpenAddMovieModal] = useState(false);

  let modalRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (modalRef.current.contains(event.target)) {
        setOpenAddMovieModal(false);
      }
    });
  });

  return (
    <div className="App">
      <Header setOpenAddMovieModal={setOpenAddMovieModal} ref={modalRef}/>
      <AddMovie openAddMovieModal={openAddMovieModal} setOpenAddMovieModal={setOpenAddMovieModal} />
      <Search />
      <NavSection />
      <ErrorBoundry>
        <CardList />
      </ErrorBoundry>
      <Footer />
    </div>
  );
}

export default App;
