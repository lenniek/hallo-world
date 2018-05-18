import React from "react";

const NewSingle = ({ item }) => (
  <div className="col s4">
    <div className="card">
      <div className="card-image">
        <img src={item.urlToImage} alt={item.title} />
        <span className="card-title">{item.source.name}</span>
      </div>
      <div className="card-content">
        <p>{item.title}</p>
      </div>
      <div className="card-action">
        <a href={item.url} target="_blank">
          L&auml;s mer...
        </a>
      </div>
    </div>
  </div>
);

export default NewSingle;

// Detta ovan visar hur nyhetsrutorna ska vara uppbyggd.
// Rad nr 7: Laddar in bilden till artikeln från API.
// Rad nr 8: Hämtar in från vilken nyhetssida artikeln kommer från.
// Rad nr 10: Hämtar in prolog/beskrivning av artikelns innehåll.
// Rad nr 13-15: "Läs mer..." = Länken till hela artikeln.