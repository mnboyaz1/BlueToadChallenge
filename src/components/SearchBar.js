import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { input: "" };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.userSubmit(this.state.input);
  };
  render() {
    return (
      <div className="searchWrapper">
        <form onSubmit={this.onFormSubmit} className="flexContainer">
          <label>
            <h2 className="label">Image Search: </h2>
          </label>
          <input
            className="inputStyle"
            type="text"
            value={this.state.input}
            onChange={this.onInputChange}
            placeholder="Enter Image type ..."
            required
          />
          <button className="button" onClick={this.onFormSubmit}>
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
