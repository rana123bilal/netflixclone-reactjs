import "./App.css";
import Header from "./components/header/Header";
import Search from "./components/search-component/Search";
import NavSection from "./components/nav-component/NavSection";
import CardList from "./components/cards/CardList";
import Footer from "./components/footer/Footer";
import ErrorBoundry from "./components/error-boundries/ErrorBoundry";

function App() {
  return (
    <div>
      <Header />
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
