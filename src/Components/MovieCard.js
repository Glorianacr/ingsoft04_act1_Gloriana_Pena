import React from 'react';

const MovieCard = ({ movie, onRentClick, onPurchaseClick, onDetailsClick }) => {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>{movie.year}</p>
      <div>
        <button onClick={() => onDetailsClick(movie.id)}>Detalles</button>
      </div>
    </div>
  );
};

export default MovieCard;
