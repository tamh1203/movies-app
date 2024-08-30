import { BrowserRouter, Route, Routes } from "react-router-dom";
import PopularMovies from "./containers/PopularMovies";
import MoviesDetails from "./containers/MoviesDetails";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route path="/"  element={<PopularMovies />}></Route>
            <Route path="/movie/:id"  element={<MoviesDetails />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
