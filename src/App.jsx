import "./App.css";
import NavBar from "./components/navBar";
import Home from "./components/home";
import About from "./components/about";
import Footer from "./components/footer";
import Search from "./components/search";
import FavouritList from "./components/FavouritList";
import { Route, Routes } from "react-router-dom";
import SingUp from "./components/singUp";
import SingIn from "./components/singIn";

//  npm i react-router-dom

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <NavBar />
      </header>

      <main className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="search" element={<Search />} />
          <Route path="favourit" element={<FavouritList />} />
          <Route path="signup" element={<SingUp />} />
          <Route path="signin" element={<SingIn />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
