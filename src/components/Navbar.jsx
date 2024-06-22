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
        `https://newsapi.org/v2/top-headlines?country=in&category=${item}&apiKey=b2006c1d47f140ee8dba37c259f54108`
      );
      const parsedData = response?.data;
      const alldata = parsedData?.articles;
      console.log("gate first" + alldata);
      dispatch(setNews(alldata));
      navigate(`/detail/:${item}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg tw-bg-slate-900 tw-sticky tw-top-0  tw-w-screen tw-z-50">
        <div className="container-fluid tw-ml-10 tw-mr-10   ">
          <Link
            to="/"
            className=" tw-text-2xl tw-mr-8 tw-text-slate-300"
            href="#"
          >
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

          <div className="ollapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 tw-cursor-pointer ">
              <li className="tw-text-lg tw-mr-4 tw-mt-2 tw-text-white">
                <Link to="/" className="nav-item tw-text-slate-300">
                  Home
                </Link>
              </li>
              <li className="tw-text-lg tw-mr-4 tw-mt-2 tw-text-slate-300">
                <Link
                  to="/detail/sports"
                  className="  tw-text-slate-300"
                  onClick={() => handleClickButton("sports")}
                >
                  Sports
                </Link>
              </li>
              <li className="tw-mt-2">
                <Link
                  to="/detail/business"
                  className="tw-text-lg tw-mr-4 tw-text-slate-300"
                  onClick={() => handleClickButton("business")}
                >
                  Business
                </Link>
              </li>
              <li className="tw-mt-2">
                <Link
                  to="/detail/entertainment"
                  className="tw-text-lg tw-mr-4 tw-text-slate-300"
                  onClick={() => handleClickButton("entertainment")}
                >
                  Entertainment
                </Link>
              </li>
              <li className="tw-mt-2">
                <Link
                  to="/detail/science"
                  className="tw-text-lg tw-mr-4 tw-text-slate-300"
                  onClick={() => handleClickButton("science")}
                >
                  Science
                </Link>
              </li>
              <li className="tw-mt-2">
                <Link
                  to="/detail/technology"
                  className="tw-text-lg tw-mr-4 tw-text-slate-300"
                  onClick={() => handleClickButton("technology")}
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
