import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
import Category from "./components/Category";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/detail/:category" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
