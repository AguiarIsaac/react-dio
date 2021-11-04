import React from 'react';
import { useState } from 'react';

const Card = () => {
  const [valor, setValor] = useState(0);

  return (
    <div className="card">
      <div className="card-body">
        <button type="button" className="btn btn-success">
          Adicionar
        </button>
        <button type="button" class="btn btn-danger">
          Remover
        </button>
        <p>{valor}</p>
        <h5 className="card-title">Meu primeiro Card</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a>
      </div>
    </div>
  );
};
export default Card;
