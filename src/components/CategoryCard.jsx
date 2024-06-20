import React from "react";

function CategoryCard({ title, description, image, url }) {
  return (
    <>
      <div className="tw-mt-4   tw-rounded-lg">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={image}
            className="card-img-top tw-object-none tw-h-44 tw-w-80"
            alt="..."
          />
          <div className="card-body  tw-bg-slate-100 tw-text-black">
            <h5 className="card-title tw-font-bold">{title}</h5>

            <p className="card-text">{description}...</p>
            <a href={url} className="btn btn-primary tw-mt-2">
              Read Full News
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryCard;
