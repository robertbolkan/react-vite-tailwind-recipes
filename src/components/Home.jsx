import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Welcome to my Recipe App!</h1>
      <p>
        This app allows you to search and browse for recipes, as well as create
        and save your own recipes.
      </p>
      <h2>Getting Started</h2>
      <p>
        To use the app, either browse the existing recipes by clicking on the
        Recipes link in the navbar or create an account and start creating your
        own recipes.
      </p>
      
    </div>
  );
}
