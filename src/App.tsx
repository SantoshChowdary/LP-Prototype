import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import PopularMoviesSection from './pages/popularMoviesSection';
import ProtectedRoute from './pages/protectedRoutes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/popular" component={PopularMoviesSection} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
