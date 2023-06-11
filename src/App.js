import "./App.css";
import Navbar from "./components/Navbar";

import React, { Component } from "react";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    let pageSize = 9;
    return (
      <div>
        <Router>
          <Navbar />;
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="home"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={pageSize}
                  country="in"
                  category="business"
                />
              }
            ></Route>
            <Route
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={pageSize}
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={pageSize}
                  country="in"
                  category="sports"
                />
              }
            ></Route>
            <Route
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={pageSize}
                  country="in"
                  category="science"
                />
              }
            ></Route>
            <Route
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={pageSize}
                  country="in"
                  category="technology"
                />
              }
            ></Route>
            <Route
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={pageSize}
                  country="in"
                  category="health"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
