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
        <img src="top.png" alt="logo" className="img-logo" />
        <Outlet />
      </header>
      <section className="section-type-produits">
        <div class="grid-container">
          <div class="grid-item">
            <img src="sdb.png" className="img-grid" />
          </div>
          <div class="grid-item">
            <img src="frigo.png" className="img-grid" />
          </div>
          <div class="grid-item">
            <img src="menage.webp" className="img-grid" />
          </div>
          <div class="grid-item">
            <img src="smoke.jpeg" className="img-grid" />
          </div>
        </div>
      </section>
    </>
  );
}
