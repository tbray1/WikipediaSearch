import Logo from "./components/Logo";
import "./sass/style.scss";
import Axios from "axios";
import { useState } from "react";
import Searchbar from "./components/Searchbar";
import Displayresults from "./components/Displayresults";
import Displaystats from "./components/Displaystats";
import axios from "axios";

const App = () => {
  const [searchRes, setSearchRes] = useState([]);
  const [search, setSearch] = useState("");
  const [stats, setStats] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const fetchItems = async () => {
    try {
      const result = await Axios(
        `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${search}&gsrlimit=20&prop=pageimages|extracts&exchars=125&exintro&explaintext&exlimit=max&format=json&origin=*`
      );

      processResults(result);
      setSubmitted(true);
    } catch (err) {
      setStats(0);
      setSearchRes([]);
    }
  };
  const processResults = (result) => {
    let resultArray = [];

    const response = result.data.query.pages;

    Object.keys(response).forEach((key) => {
      const id = key;
      const title = response[key].title;
      const text = response[key].extract;
      const img = response[key].hasOwnProperty("thumbnail")
        ? response[key].thumbnail.source
        : null;
      const item = {
        id: id,
        title: title,
        img: img,
        text: text,
      };
      resultArray.push(item);
    });
    setSearchRes(resultArray);
    setStats(resultArray.length);
  };

  const onChange = (e) => {
    setSearch(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    fetchItems();
  };

  return (
    <section className="searchEntry">
      <Logo />
      <form
        id="searchBar"
        className="searchBar"
        role="search"
        onSubmit={onSubmit}
      >
        <input
          id="search"
          type="text"
          autoComplete="off"
          role="searchbox"
          placeholder="Enter Search Term"
          onChange={onChange}
        />

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
      <section className="results">
        <div id="searchResults" className="searchResults">
          {submitted && <Displaystats stats={stats} />}
          <Displayresults searchRes={searchRes} />
        </div>
      </section>
    </section>
  );
};
export default App;
