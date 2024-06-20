import { useSelector } from "react-redux";
import CategoryCard from "./CategoryCard";

function Category() {
  const { category } = useSelector((state) => state.news);
  return (
    <>
      <div className="tw-py-2 tw-bg-slate-700 tw-text-slate-300 tw-pt-10">
        <h2 className="tw-text-center tw-font-bold  tw-text-3xl tw-sm:text-center ">
          Top Headingh
        </h2>
      </div>
      <div className="tw-bg-slate-700  ">
        <div className=" container container tw-flex tw-justify-between tw-md:justify-center tw-flex-wrap tw-md:w-10 tw-md:max-xl:flex  ">
          {category &&
            category.map((eve, ev) => (
              <CategoryCard
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

export default Category;
