import React from "react";

function Cards({ title, description, image, url }) {
  return (
    <>
      <div className="tw-mt-4  tw-rounded-lg  ">
        <div className="card tw-min-h-[400px] " style={{ width: "18rem" }}>
          <img
            src={image}
            className="card-img-top tw-object-none tw-h-44 tw-w-80"
            alt="..."
          />
          <div className="card-body tw-bg-slate-700  tw-text-slate-300">
            <h5 className="card-title tw-font-bold tw-line-clamp-2 ">
              {title}
            </h5>

            <p className="card-text tw-line-clamp-4">{description}...</p>
            <a href={url} className="btn btn-primary tw-mt-2">
              Read Full News
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
