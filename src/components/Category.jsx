import { useSelector } from "react-redux";
import CategoryCard from "./CategoryCard";
import { useState } from "react";

function Category() {
  const { category } = useSelector((state) => state.news);
  const [postPerPage, setPostPerPage] = useState(8);
  const [currentPage, SetCurrentPage] = useState(1);

  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;
  const record = category.slice(firstIndex, lastIndex);
  console.log("recor" + record);
  const npage = Math.ceil(category.length / postPerPage);
  const number = [...Array(npage + 1).keys()].slice(1);

  const prePage = () => {
    if (currentPage !== lastIndex) {
      SetCurrentPage(currentPage + 1);
    }
  };
  const nextPage = () => {
    if (currentPage !== firstIndex) {
      SetCurrentPage(currentPage - 1);
    }
  };

  const changePage = (e) => {
    SetCurrentPage(e);
  };

  return (
    <>
      <div className="">
        <div className="tw-py-2 tw-bg-slate-700 tw-text-slate-300 tw-pt-10">
          <h2 className="tw-text-center tw-font-bold  tw-text-3xl tw-sm:text-center ">
            Top Headingh
          </h2>
        </div>
        <div className="tw-bg-slate-700  ">
          <div className=" container container tw-flex tw-justify-between tw-md:justify-center tw-flex-wrap tw-md:w-10 tw-md:max-xl:flex  ">
            {record &&
              record.map((eve, ev) => (
                <CategoryCard
                  key={ev}
                  title={eve?.title}
                  description={eve?.description?.slice(0, 92)}
                  image={eve?.urlToImage}
                  url={eve.url}
                />
              ))}
          </div>
        </div>
      </div>
      {category ? (
        <div className="">
          <nav
            aria-label="Page navigation example "
            className="tw-bg-slate-700"
          >
            <ul className="pagination justify-content-center">
              <li className="page-item ">
                <a
                  className="page-link tw-bg-slate-700 tw-text-white"
                  href="#"
                  onClick={() => prePage()}
                >
                  Previous
                </a>
              </li>
              {number.map((n, k) => (
                <li
                  className={`page-item ${currentPage === n ? "active" : ""}`}
                  key={k}
                >
                  <a
                    className="page-link tw-bg-slate-700 tw-text-white"
                    href="#"
                    onClick={() => changePage(n)}
                  >
                    {n}
                  </a>
                </li>
              ))}
              <li className="page-item ">
                <a
                  className="page-link tw-bg-slate-700 tw-text-white"
                  href="#"
                  onClick={() => nextPage()}
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Category;
