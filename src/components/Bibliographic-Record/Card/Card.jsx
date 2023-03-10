import React from "react";
import "/src/index.css";

const Card = ({ title, author, editorial, pages }) => {
  return (
    <div className="card-content">
      <h2>{title}</h2>
      <ul className="details-book">
        <li><div>Autor:</div><div>{author}</div></li>
        <li><div>Editorial:</div><div>{editorial}</div></li>
        <li><div>No. páginas:</div><div>{pages}</div></li>
      </ul>
    </div>
  );
};

export default Card;
