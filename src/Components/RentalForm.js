import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { moviesData } from '../Data/MoviesData';

const RentalForm = () => {
  const { movieId } = useParams();
  const history = useHistory();
  const movie = moviesData.find(movie => movie.id === parseInt(movieId));
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Alquiler exitoso para la película "${movie.title}"`);
  };

  const handleGoBack = () => {
    history.push('/');
  };

  return (
    <div>
      <h2>Formulario de Alquiler</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Enviar</button>
      </form>
      {message && <p>{message}</p>}
      <button onClick={handleGoBack}>Regresar</button>
    </div>
  );
};

export default RentalForm;
