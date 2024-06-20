import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import LoadingScreen from "./LoadingScreen";

function News() {
  const [news, setNews] = useState([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setFetching(true);
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=in&apiKey=b2006c1d47f140ee8dba37c259f54108"
        );
        setNews(response?.data?.articles);
        setFetching(false);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <>
      <div className="tw-py-2 tw-bg-slate-700  tw-text-slate-300 ">
        <h2 className="tw-text-center tw-font-bold  tw-text-3xl tw-sm:text-center ">
          Top Headingh
        </h2>
      </div>
      {fetching && <LoadingScreen />}
      <div className="tw-bg-slate-700 ">
        <div className=" container container tw-flex tw-justify-between tw-md:justify-center tw-flex-wrap tw-md:w-10 tw-md:max-xl:flex  ">
          {news &&
            news.map((eve, ev) => (
              <Cards
                key={ev}
                title={eve.title}
                description={eve?.description?.slice(0, 92)}
                image={eve?.urlToImage}
                url={eve.url}
              />
            ))}
        </div>
      </div>
    </>
  );
}
export default News;
