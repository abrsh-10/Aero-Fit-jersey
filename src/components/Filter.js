import React from "react";
import List from "./LIsts";
export default function Filter() {
  return (
    <div className="filter">
      <h3>Filter</h3>
      <form class="d-flex col-md-8 col-lg-12" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-dark btn-sm mx-2 " type="submit">
          Search
        </button>
      </form>
      <List />
    </div>
  );
}
