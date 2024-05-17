import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../src/Pages/Home';
import RentalForm from '../src/Components/RentalForm';
import PurchaseForm from '../src/Components/PurchaseForm';
import MovieDetails from '../src/Components/MovieDetails';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rentalForm/:movieId" component={RentalForm} />
        <Route path="/purchaseForm/:movieId" component={PurchaseForm} />
        <Route path="/movieDetails/:movieId" component={MovieDetails} />
      </Switch>
    </Router>
  );
};

export default App;
