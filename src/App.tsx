import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import ProtectedRoute from './pages/protectedRoutes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
