import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import NavSection from "./components/nav-component/nav-section";
import CardList from "./components/cards/card-list";
import Footer from "./components/footer/Footer";
import ErrorBoundry from "./components/error-boundries/error-boundry";
import AddMovie from "./components/movie/add-movie";
import EditMovie from "./components/movie/edit-movie";
import DeleteMovie from "./components/movie/delete-movie";
import { DataProvider } from "./context/data-context";

function App() {
  return (
    <div className="App">
      <ErrorBoundry>
        <DataProvider>
          <Header />
          <AddMovie />
          <Search />
          <NavSection />
          <CardList />
          <EditMovie />
          <DeleteMovie />
          <Footer />
        </DataProvider>
      </ErrorBoundry>
    </div>
  );
}

export default App;
