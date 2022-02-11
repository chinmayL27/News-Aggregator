import Homepage from "./Layout/Homepage";
import LoginPage from "./Layout/loginPage";
import NewsFeedPage from "./Layout/NewsFeedPage";
import SignupPage from "./Layout/signupPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CategoryPage from "./Layout/CategoryPage";
import Query from "./Components/Query/Query";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ArticleOpen from "./Layout/ArticleOpen";
import OurTeam from "./Components/Our-Team/OurTeam";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <>
      {/* <BounceLoader loading size={34} color="red" /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/newsfeed" element={<NewsFeedPage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/query/:queryName" element={<Query />} />
          <Route
            path="/article/:categoryName/:index"
            element={<ArticleOpen />}
          />
          <Route path="/admin" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
