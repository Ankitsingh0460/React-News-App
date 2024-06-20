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
          "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7a0278b611ed4d4e8d222550f6eaa2db"
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
      <div className="tw-mt-2 ">
        <h2 className="tw-text-center tw-font-bold  tw-text-3xl tw-sm:text-center ">
          Top Headingh
        </h2>
      </div>
      {fetching && <LoadingScreen />}
      <div className="">
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
