import "./App.css";
import Navbar from "./components/Navbar";
import LoadingBar from "react-top-loading-bar";

import React, { Component } from "react";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      progress: 0,
    };
  }
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  apiKey = process.env.REACT_APP_NEWS_API;

  render() {
    let pageSize = 9;

    return (
      <div>
        <Router>
          <Navbar />;
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(100)}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  key="home"
                  pageSize={pageSize}
                  country="us"
                  category="general"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={this.setProgress}
                  key="general"
                  pageSize={pageSize}
                  country="us"
                  category="general"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  key="business"
                  pageSize={pageSize}
                  country="us"
                  category="business"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  key="entertainment"
                  pageSize={pageSize}
                  country="us"
                  category="entertainment"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  key="sports"
                  pageSize={pageSize}
                  country="us"
                  category="sports"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  key="science"
                  pageSize={pageSize}
                  country="us"
                  category="science"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  key="technology"
                  pageSize={pageSize}
                  country="us"
                  category="technology"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  key="health"
                  pageSize={pageSize}
                  country="us"
                  category="health"
                  apiKey={this.apiKey}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
