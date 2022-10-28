import React from "react";
import "./NavSection.css";

function NavSection() {
  return (
    <>
      <div className="links-container">
        <div className="left-links-container">
          <ul>
              <li><a href="/">ALL</a></li>
              <li><a href="/">DOCUMENTARY</a></li>
              <li><a href="/">COMEDY</a></li>
              <li><a href="/">HORROR</a></li>
             <li><a href="/">CRIME</a></li> 
          </ul>
        </div>
        <div className="right-links-container">
          <div >SORT BY</div>
          <div>RELEASE DATE</div>
          <div className="arrow-down"></div>
      </div>
      </div>
      <hr />
      <div className="found-movies">39 movies found</div>
    </>
  );
}

export default NavSection;
