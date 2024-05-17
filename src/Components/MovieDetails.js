import React from 'react';
import { useHistory } from 'react-router-dom'; // Importar useHistory
import { moviesData } from '../Data/MoviesData';


const MovieDetails = ({ movieId, onClose }) => {
  const history = useHistory(); // Inicializar history

  const movie = moviesData.find(movie => movie.id === parseInt(movieId, 10));

  if (!movie) return null;

  const handleRent = () => {
    // Navegar a RentalForm con el ID de la película
    history.push(`/rentalForm/${movieId}`);
  };

  const handlePurchase = () => {
    // Navegar a PurchaseForm con el ID de la película
    history.push(`/purchaseForm/${movieId}`);
  };

  return (
    <div className="movie-details">
      <div className="movie-details-content">
        <h2>{movie.title}</h2>
        <p><strong>Director:</strong> {movie.director}</p>
        <p><strong>Año:</strong> {movie.year}</p>
        <p><strong>Sinopsis:</strong> {movie.synopsis}</p>
        <p><strong>Duración:</strong> {movie.duration}</p>
        <p><strong>Críticas:</strong> {movie.reviews}</p>
        <button onClick={handleRent}>Alquilar</button>
        <button onClick={handlePurchase}>Comprar</button>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default MovieDetails;
