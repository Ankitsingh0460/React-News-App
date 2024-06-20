const LoadingScreen = () => {
  return (
    <div className="d-flex justify-content-center spinner tw-mt-52">
      <div
        className="spinner-border"
        role="status"
        style={{ width: "4rem", height: "4rem" }}
      >
        <span className="visually-hidden  ">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
