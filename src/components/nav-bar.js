import React from "react";
import logo from "../images/logo.png";
export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-xl bg-light text-white d-flex justify-content-between">
      <div class="container-fluid ">
        <a class="col-4 navbar-brand d-flex align-items-center " href="#">
          <img src={logo} height="75" width="75" className="rounded-circle" />
          <h1>AEROFITS</h1>
        </a>

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
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item mx-3">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>

            <li class="nav-item mx-3">
              <a class="nav-link" href="#">
                Products
              </a>
            </li>

            <li class="nav-item mx-3">
              <a class="nav-link" href="#">
                Cart
              </a>
            </li>

            <li class="nav-item mx-3">
              <a class="nav-link" href="#">
                About us
              </a>
            </li>

            <li className="col-3.5 nav-item mx-3">
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-dark mx-2 " type="submit">
                  Search
                </button>
              </form>
            </li>

            <li className=" nav-item mx-3 ">
              <a class="nav-link " href="#">
                <button class="btn btn-outline-dark " type="submit">
                  Login/Sign-up
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
