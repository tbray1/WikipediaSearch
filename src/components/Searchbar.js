import React, { useState } from "react";
import Logo from "./Logo";

const Searchbar = ({ search }) => {
  //const [searchRes, setSearchRes] = useState([]);

  return (
    <>
      <form id="searchBar" className="searchBar" role="search">
        <label className="offscreen" htmlFor="search">
          Enter a search term or phrase
        </label>
        <input
          id="search"
          type="text"
          autoComplete="off"
          role="searchbox"
          placeholder="Enter Search Term"
        />

        <div
          id="clear"
          className="none button clear"
          role="button"
          tabIndex="0"
          aria-label="Clear search terms"
        >
          <i className="fas fa-times"></i>
        </div>
        <button
          id="searchButton"
          className="button searchButton"
          type="submit"
          aria-label="Submit button"
        >
          <i className="fas fa-search blue"></i>
        </button>
      </form>
      <div className="card-list"></div>
    </>
  );
};

export default Searchbar;
