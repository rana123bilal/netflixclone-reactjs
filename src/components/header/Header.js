import logo from '../../assets/images/logo.png';
import './Header.css';


function Header({showAddMovieModal}) {

  return (
    <div className='header-container'>
         <div className="logo">
          <img src={logo} alt="netflixrullet" />
          </div>
          <div>
          <button className="add-movie" onClick={() => {showAddMovieModal()}}>+ ADD MOVIE</button>
          </div>
    </div>
  )
}

export default Header;