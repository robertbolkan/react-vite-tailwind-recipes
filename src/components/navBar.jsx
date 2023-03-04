import React, { useState } from "react";
import { Link } from "react-router-dom";

export function NavBar({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  function handleLogout() {
    // TODO: implement logout functionality
  }

  return (
    <nav className="bg-gray-500 p-4">
      <div className="flex justify-between items-center">
        <div className="flex">
          <Link to="/" className="mr-4 text-white font-bold">
            Home
          </Link>
          <Link to="/recipes" className="mr-4 text-white font-bold">
            Recipes
          </Link>
        </div>
        <div className="relative">
          <button onClick={handleToggle} className="text-white font-bold">
            Account
          </button>
          {isOpen && (
            <div className="absolute bg-gray-100 right-0 mt-2 p-2">
              {user ? (
                <>
                  <div className="mb-2">
                    Logged in as: <strong>{user.username}</strong>
                  </div>
                  <button onClick={handleLogout}>Logout</button>
                  {user.role === "admin" && (
                    <Link to="/add-recipe" className="block mt-2">
                      Add Recipe
                    </Link>
                  )}
                </>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/signup" className="block mt-2">
                    Signup
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
