import React, { useState } from "react";
import { useSelector } from "react-redux";
import CategoryCard from "./CategoryCard";

function Category({ cat }) {
  const { setnews } = useSelector((state) => state.news);
  console.log("final" + setnews);
  return (
    <>
      <div className="tw-mt-2 ">
        <h2 className="tw-text-center tw-font-bold  tw-text-3xl tw-sm:text-center ">
          Top Headingh
        </h2>
      </div>
      {cat &&
        cat.map((eve, ev) => (
          <CategoryCard
            key={ev}
            title={eve.title}
            description={eve?.description?.slice(0, 92)}
            image={eve?.urlToImage}
            url={eve.url}
          />
        ))}
      <div className="">
        <div className=" container container tw-flex tw-justify-between tw-md:justify-center tw-flex-wrap tw-md:w-10 tw-md:max-xl:flex  "></div>
      </div>
    </>
  );
}

export default Category;
