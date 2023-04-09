import { Fragment, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import Header from "./Components/layout/Header";
import Home from "./Components/pages/Home";
import MovieDetails from "./Components/pages/MovieDetails";
import PersonDetails from "./Components/pages/PersonDetails";
import WatchedList from "./Components/pages/WatchedList";
function App() {
  const [query, setQuery] = useState("");
  return (
    <Fragment>
      <Provider store={store}>
        <BrowserRouter>
          <Header query={query} setQuery={setQuery} />
          <Routes>
            <Route
              path="/"
              element={<Home query={query} setQuery={setQuery} />}
            />
            <Route
              path="/moviedetails/:id"
              element={<MovieDetails query={query} />}
            />
            <Route
              path="/person/:id"
              element={<PersonDetails query={query} />}
            />
            <Route
              path="/watchedList"
              element={<WatchedList query={query} />}
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
