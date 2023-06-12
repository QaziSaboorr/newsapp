import "./App.css";
import Navbar from "./components/Navbar";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  const [progress, setState] = useState(0);

  const setProgress = (progress) => {
    setState(progress);
  };
  const apiKey = process.env.REACT_APP_NEWS_API;

  const pageSize = 9;

  return (
    <div>
      <Router>
        <Navbar />;
        <LoadingBar
          height={3}
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => setProgress(100)}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="home"
                pageSize={pageSize}
                country="us"
                category="general"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country="us"
                category="general"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                pageSize={pageSize}
                country="us"
                category="business"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                pageSize={pageSize}
                country="us"
                category="entertainment"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                pageSize={pageSize}
                country="us"
                category="sports"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                pageSize={pageSize}
                country="us"
                category="science"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                pageSize={pageSize}
                country="us"
                category="technology"
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                pageSize={pageSize}
                country="us"
                category="health"
                apiKey={apiKey}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
