import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <Header />
              <Movies />
              <Footer />
            </>
          }
        />

        <Route path="/saved-movies" />

        <Route path="/profile" />

        <Route path="/signin" />

        <Route path="/signup" />
      </Routes>
    </div>
  );
}

export default App;
