import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useEffect } from "react";

export default function App() {
  const { VITE_API_HTTP, VITE_API_URL, VITE_API_PORT } = import.meta.env;

  useEffect(() => {
    fetch(`${VITE_API_HTTP}://${VITE_API_URL}:${VITE_API_PORT}/get-produits`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  }, []);
  return (
    <>
      <header>
        <img src="top2.png" alt="logo" className="img-logo" />
        <Outlet />
      </header>
      <section className="section-type-produits">
        <div class="grid-container">
          <Link to="/route1">
            <div class="grid-item">
              <button type="button" className="button-categorie">
                <img src="sdb.png" className="img-grid" />
              </button>
            </div>
          </Link>
          <div class="grid-item">
            <button type="button" className="button-categorie">
              <img src="frigo.png" className="img-grid" />
            </button>
          </div>
          <div class="grid-item">
            <button type="button" className="button-categorie">
              <img src="menage.webp" className="img-grid" />
            </button>
          </div>
          <div class="grid-item">
            <button type="button" className="button-categorie">
              <img src="smoke.jpeg" className="img-grid" />
            </button>
          </div>
          <div class="grid-item">
            <button type="button" className="button-categorie">
              <img src="cuisine.png" className="img-grid" />
            </button>
          </div>


   <div class="grid-item">
            <button type="button" className="button-categorie">
              <img src="eate.png" className="img-grid" />
            </button>
          </div>



        </div>
      </section>
    </>
  );
}
