import React from "react";
import NewsCategory from "../Components/News-Category/NewsCategory";
import Slider from "../Components/Slider/Slider";
import Footer from "../Components/Footer/Footer";
import { Navigate } from "react-router-dom";
import checkAuth from "../Components/Login/checkAuth";
import Navbar from "../Components/Navbar/Navbar";
const NewsFeedPage = () => {
  if (!checkAuth()) return <Navigate to="/login" />;

  return (
    <div>
      <Navbar />
      <Slider />
      <h1 className="date-left">hellow</h1>
      <NewsCategory category={"sports"} />
      <NewsCategory category={"entertainment"} />
      <NewsCategory category={"health"} />
      <h1 className="date-left">hellow</h1>
      <Footer />
    </div>
  );
};

export default NewsFeedPage;
