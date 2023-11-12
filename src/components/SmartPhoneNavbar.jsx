import React from "react";
import { Link } from "react-router-dom";

const SmartPhoneNavbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-secondary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Smartphone App
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/search">
                  Search
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/delete">
                  Delete
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/view">
                  View All
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SmartPhoneNavbar;
