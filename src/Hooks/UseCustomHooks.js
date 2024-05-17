import { useState, useEffect } from 'react';
import { moviesData } from '../Data/MoviesData'; // Importamos los datos de las películas

const useCustomHook = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulamos una operación asíncrona de carga de películas
    const fetchMovies = async () => {
      try {
        // Simulamos un retraso para emular una operación asíncrona
        setLoading(true);
        // En una aplicación real, esta sería una solicitud a una API
        // Pero aquí simplemente establecemos los datos de películas después de un retraso
        setTimeout(() => {
          setMovies(moviesData);
          setLoading(false);
        }, 1000); // Retraso de 1 segundo para simular la carga de datos
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchMovies();

    // No hay operaciones de limpieza necesarias aquí

  }, []);

  return { movies, loading, error };
};

export default useCustomHook;
