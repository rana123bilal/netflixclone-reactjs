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
  return (
    <div className="App">
      <DataProvider>
        <Header />
        <AddMovie />
        <Search />
        <NavSection />
        <ErrorBoundry>
          <CardList />
          <EditMovie />
          <DeleteMovie />
        </ErrorBoundry>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
