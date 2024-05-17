import React from 'react';
import { useParams } from 'react-router-dom';

const PurchasePage = () => {
  const { movieId } = useParams(); // Obtener el ID de la película de los parámetros de la URL

  return (
    <div>
      <h2>Compra exitosa</h2>
      <p>Gracias por tu compra. La película con ID {movieId} ha sido comprada con éxito.</p>
    </div>
  );
};

export default PurchasePage;
