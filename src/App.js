import React from "react";
import "./App.css";
import Header from "./components/header-component/Header";
import Search from "./components/search-component/Search";
import NavSection from './components/nav-component/NavSection';
import CardList from "./components/cards/CardList";
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Search />
      <NavSection/>
      <CardList/>
      <Footer/>
    </div>
  );
}

export default App;
