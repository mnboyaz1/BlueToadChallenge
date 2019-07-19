import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageGroup from "./imageGroup";
import "./App.css";

class App extends React.Component {
  state = { images: [], backgroundImg: [] };
  onSearchSubmit = async term => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term, per_page: 25 },
      headers: {
        Authorization:
          "Client-ID ce6794f0a84733664ede6d91591c93acc6fae4ca363100f5948ea49853c23cec"
      }
    });
    !response.data.results.length
      ? alert("No Images found on this search criteria..")
      : this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="appWrapper">
        <SearchBar userSubmit={this.onSearchSubmit} />
        <ImageGroup foundImages={this.state.images} />
      </div>
    );
  }
}

export default App;
