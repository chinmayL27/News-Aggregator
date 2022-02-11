import React, { useState, createContext, useEffect } from "react";
import Loading from "./Components/Loader/Loading";
const axios = require("axios");

export const NewsContext = createContext();

export const NewsProvider = (props) => {
  const [isLoading, setLoading] = useState([]);

  const [generalCards, setgeneralCards] = useState([]);
  const [sportCards, setsportsCards] = useState([]);
  const [techCards, settechCards] = useState([]);
  const [businessCards, setbusinessCards] = useState([]);
  const [healthCards, sethealthCards] = useState([]);
  const [entertainCards, setentertainCards] = useState([]);
  useEffect(() => {
    async function fetchgeneralData() {
      try {
        const res = await axios.get("https://newsapi.org/v2/top-headlines", {
          params: {
            country: "in",
            category: "general",
            // apiKey: "b186e59534794e9a9b732580246cf18a",
             apiKey: "9ad6a21779da47c28dde78964e668571",
            //apikey: "94c83c96e50d4fec839229c7fbabfb30",
            // apikey: "8b08468bd2174e088385c41a3930dc08",
            sortBy: "popularity",
          },
        });

        // console.log(res.data.articles);

        setgeneralCards(res.data.articles.slice(0, 18));
      } catch (err) {
        console.log(err);
      }
    }
    fetchgeneralData();

    async function fetchsportsData() {
      try {
        const res = await axios.get("https://newsapi.org/v2/top-headlines", {
          params: {
            country: "in",
            category: "sports",
            // apiKey: "b186e59534794e9a9b732580246cf18a",
             apiKey: "9ad6a21779da47c28dde78964e668571",
            // apikey: "94c83c96e50d4fec839229c7fbabfb30",
           // apikey: "8b08468bd2174e088385c41a3930dc08",
            sortBy: "popularity",
          },
        });

        // console.log(res.data.articles);

        setsportsCards(res.data.articles.slice(0, 18));
      } catch (err) {
        console.log(err);
      }
    }
    fetchsportsData();

    async function fetchbusinessData() {
      try {
        const res = await axios.get("https://newsapi.org/v2/top-headlines", {
          params: {
            country: "in",
            category: "business",
            // apiKey: "b186e59534794e9a9b732580246cf18a",
             apiKey: "9ad6a21779da47c28dde78964e668571",
            // apikey: "94c83c96e50d4fec839229c7fbabfb30",
           // apikey: "8b08468bd2174e088385c41a3930dc08",
            sortBy: "popularity",
          },
        });

        // console.log(res.data.articles);

        setbusinessCards(res.data.articles.slice(0, 18));
      } catch (err) {
        console.log(err);
      }
    }
    fetchbusinessData();

    async function fetchtechData() {
      try {
        const res = await axios.get("https://newsapi.org/v2/top-headlines", {
          params: {
            country: "in",
            category: "technology",
            // apiKey: "b186e59534794e9a9b732580246cf18a",
             apiKey: "9ad6a21779da47c28dde78964e668571",
           // apikey: "94c83c96e50d4fec839229c7fbabfb30",
            // apikey: "8b08468bd2174e088385c41a3930dc08",
            sortBy: "popularity",
          },
        });

        // console.log(res.data.articles);

        settechCards(res.data.articles.slice(0, 18));
      } catch (err) {
        console.log(err);
      }
    }
    fetchtechData();

    async function fetchentertainData() {
      try {
        const res = await axios.get("https://newsapi.org/v2/top-headlines", {
          params: {
            country: "in",
            category: "entertainment",
            // apiKey: "b186e59534794e9a9b732580246cf18a",
             apiKey: "9ad6a21779da47c28dde78964e668571",
           // apikey: "94c83c96e50d4fec839229c7fbabfb30",
            // apikey: "8b08468bd2174e088385c41a3930dc08",
            sortBy: "popularity",
          },
        });

        setentertainCards(res.data.articles.slice(0, 18));
      } catch (err) {
        console.log(err);
      }
    }
    fetchentertainData();

    async function fetchhealthData() {
      try {
        const res = await axios.get("https://newsapi.org/v2/top-headlines", {
          params: {
            country: "in",
            category: "health",
            // apiKey: "b186e59534794e9a9b732580246cf18a",
             apiKey: "9ad6a21779da47c28dde78964e668571",
            // apikey: "94c83c96e50d4fec839229c7fbabfb30",
           // apikey: "8b08468bd2174e088385c41a3930dc08",
            sortBy: "popularity",
          },
        });

        // console.log(res.data.articles);

        sethealthCards(res.data.articles.slice(0, 18));
      } catch (err) {
        console.log(err);
      }
    }

    fetchhealthData();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const myarray = {
    value1: [generalCards, setgeneralCards],
    value2: [sportCards, setsportsCards],
    value3: [techCards, settechCards],
    value4: [businessCards, setbusinessCards],
    value5: [healthCards, sethealthCards],
    value6: [entertainCards, setentertainCards],
  };

  return (
    <NewsContext.Provider value={myarray}>
      {isLoading ? <Loading /> : props.children}
    </NewsContext.Provider>
  );
};
