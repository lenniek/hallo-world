import React from "react";

const NewSingle = ({ item }) => (
  <div className="col s4">
    <div className="card">
      <div className="card-image">
        <img src={item.urlToImage} alt={item.title} />//Laddar in bilden till artikeln ifrån API.
        <span className="card-title">{item.source.name}</span>
        //Hämtar in ifrån vilken nyhetssida artikeln kommer ifrån
      </div>
      <div className="card-content"> //Hämtar in en kort beskrivning av artikelns innehåll.
        <p>{item.title}</p>
      </div>
      <div className="card-action">
        <a href={item.url} target="_blank">//länk till artikeln
          L&auml;s mer...
        </a>
      </div>
    </div>
  </div>
);

export default NewSingle;
