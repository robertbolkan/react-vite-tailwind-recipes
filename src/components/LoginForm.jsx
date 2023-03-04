import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("robert.bolkan@yahoo.com");
  const [password, setPassword] = useState("password");
  const [error, setError] = useState(null);
  const [displayForm, setDisplayForm] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();


  
  useEffect(() => {
    setDisplayForm(true);
  }, [location.pathname]);
  
  function handleSubmit(event) {
    event.preventDefault();
    setError(null);

    fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid email or password");
        }
        return response.json();
      })
      .then((data) => {
        onLogin(data.user);
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  function handleCancel() {
    setDisplayForm(false);
    navigate("/");
  }

  return (
    <>
      {location.pathname === "/login" && displayForm && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 opacity-80 flex justify-center items-center">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 relative">
            {/* <button type="button" onClick={handleCancel} className="absolute top-2 right-2 text-gray-500 hover:text-blue-500">
              X
            </button> */}
            <h2 className="text-lg font-medium mb-4">Login</h2>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-medium mb-2">
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Login
            </button>
            <button type="button" onClick={handleCancel} className="w-full text-center mt-2">
              Cancel
            </button>
            <button type="button" className="w-full text-center mt-2">
              <Link to="/signup" className="text-gray-500 hover:text-blue-500">
                Create an account
              </Link>
            </button>
          </form>
        </div>
      )}
    </>
  );
      }