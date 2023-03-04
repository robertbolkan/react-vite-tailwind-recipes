import React from 'react';
import { Add } from './components/Add';
import { Ingredients } from './components/Ingredients';
import { LoginForm } from './components/LoginForm';
import { NavBar } from './components/NavBar';
import { Recipes } from './components/Recipes';
import { Home } from './components/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Recipes />
      <Add />
      <Ingredients />
      <LoginForm />
    </div>
  );
}

export default App;