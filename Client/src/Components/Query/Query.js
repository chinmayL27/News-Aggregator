import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import image from "../../Images/news.jfif";
import "../News-Category/NewsCategory.css";
import Loading from "../Loader/Loading";

const Query = () => {
  const params = useParams();
  const [result, setResult] = useState([]);

  const [isLoading, setLoading] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        var apikey = "b186e59534794e9a9b732580246cf18a";
        const res = await axios.get(
          `https://newsapi.org/v2/everything?qInTitle=${params.queryName}&apiKey=${apikey}&sortBy=popularity&language=en`
        );
        // apiKey: "b186e59534794e9a9b732580246cf18a",
        // apiKey: "9ad6a21779da47c28dde78964e668571",

        if (res) {
          // console.log(res.data.articles);
          setResult(res.data.articles);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [params.queryName]);

  return (
    <div>
      <Navbar />
      <div>
        {isLoading ? (
          <Loading />
        ) : result.length == 0 ? (
          <div className="container">
            <h1 className="title-heading"> SEARCH RESULT NOT FOUND</h1>
          </div>
        ) : (
          <>
            <div className="container">
              <h1 className="title-heading">Search Result</h1>
            </div>
            <div className="band">
              {result.map((cardd, index) => {
                const { urlToImage, title, author, url } = cardd;
                return (
                  <div className="item" key={index}>
                    <a href={cardd.url} className="card">
                      {cardd.urlToImage ? (
                        <div
                          className="thumb"
                          style={{
                            backgroundImage: `url(${cardd.urlToImage})`,
                          }}
                        ></div>
                      ) : (
                        <div
                          className="thumb"
                          style={{
                            backgroundImage: `url(${image})`,
                          }}
                        ></div>
                      )}
                      <article>
                        <h1>{title}</h1>
                        <span>{author}</span>
                      </article>
                    </a>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Query;
