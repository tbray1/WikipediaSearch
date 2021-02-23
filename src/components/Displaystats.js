import React from "react";

const Displaystats = ({ stats }) => {
  return (
    <div className="statsBar">
      {stats == 0 ? (
        <div id="stats" className="stats" aria-live="assertive">
          sorry no results{" "}
        </div>
      ) : (
        <div id="stats" className="stats" aria-live="assertive">
          {" "}
          Displaying {stats} results
        </div>
      )}
    </div>
  );
};

export default Displaystats;
