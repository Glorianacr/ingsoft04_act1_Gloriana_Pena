import React, { useState, useEffect } from 'react';
import { moviesData } from '../Data/MoviesData';
import MovieList from '../Components/MovieList';
import SearchBar from '../Components/SearchBar';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import SideBar from '../Components/SideBar';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults(moviesData);
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const results = moviesData.filter(movie =>
      movie.title.toLowerCase().includes(term.toLowerCase()) ||
      movie.director.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <SideBar /> {/* Usa SideBar aquí */}
      <Header/>
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      <MovieList movies={searchResults} />
      <Footer/>
    </div>
  );
};

export default Home;
