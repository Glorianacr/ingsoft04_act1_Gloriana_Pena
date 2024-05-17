import React, { useState } from 'react';
import MovieCard from './MovieCard';
import MovieDetails from './MovieDetails';

const MovieList = ({ movies }) => {
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleRentClick = (movieId) => {
    // Lógica de alquiler
  };

  const handlePurchaseClick = (movieId) => {
    // Lógica de compra
  };

  const handleDetailsClick = (movieId) => {
    setSelectedMovieId(movieId);
  };

  const handleCloseDetails = () => {
    setSelectedMovieId(null);
  };

  if (!movies) {
    return <p>No hay películas disponibles.</p>;
  }

  return (
    <div>
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onRentClick={handleRentClick}
            onPurchaseClick={handlePurchaseClick}
            onDetailsClick={handleDetailsClick}
          />
        ))}
      </div>
      {selectedMovieId && (
        <MovieDetails movieId={selectedMovieId} onClose={handleCloseDetails} />
      )}
    </div>
  );
};

export default MovieList;
