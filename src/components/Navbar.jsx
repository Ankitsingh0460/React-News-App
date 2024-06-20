import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setNews } from "./slices/newsSlice";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickButton = async (item) => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${item}&apiKey=2381c3c9c7dc4daea5110196517dbab5`
      );
      const parsedData = response.data;
      dispatch(setNews(parsedData.articals));
      navigate(`/detail/:${item}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-sm tw-bg-slate-300  ">
        <div className="container-fluid tw-ml-10 tw-mr-10 text-white">
          <Link to="/" className="navbar-brand" href="#">
            News
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            anded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 tw-cursor-pointer">
              <li className="nav-item">
                <Link
                  to="/detail/sports"
                  className="nav-link"
                  onClick={() => handleClickButton("sports")}
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/detail/business"
                  className="nav-link"
                  onClick={() => handleClickButton("business")}
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/detail/entertainment"
                  className="nav-link"
                  onClick={() => handleClickButton("entertainment")}
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/detail/science"
                  className="nav-link"
                  onClick={() => handleClickButton("science")}
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/detail/technology"
                  className="nav-link"
                  onClick={() => handleClickButton("technology")}
                >
                  Technology
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
