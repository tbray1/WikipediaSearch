import React from "react";

const Displayresults = ({ searchRes }) => {
  const link = `https://en.wikipedia.org/?curid=`;

  return (
    <>
      {searchRes.map((res) => (
        <div className="resultContents" key={res.id}>
          <div className="resultItem">
            <div className="resultTitle">
              <a className="resultTitle" href={link + res.id}>
                {res.title}
              </a>
              {!res.img === "null" ? (
                <a></a>
              ) : (
                <div className="resultImage">
                  <img src={res.img}></img>
                </div>
              )}
            </div>
            <div className="resultText">
              <p className="resultDescription">{res.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Displayresults;
