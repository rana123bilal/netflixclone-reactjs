import React from "react";
import "./ToggleGenre.css";

class ToggleGenre extends React.PureComponent {
  render() {
    const { genre } = this.props;
    return (
      <div className="container">
        {genre.map((item) => {
          return (
            <select className="selection">
              <option className="option">Select Genre</option>
              <option className="option">{item.first}</option>
              <option className="option">{item.second}</option>
              <option className="option">{item.third}</option>
              <option className="option">{item.fourth}</option>
            </select>
          );
        })}
      </div>
    );
  }
}

export default ToggleGenre;
