import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { Sidebar } from "./components/layout/Sidebar";
import { Home } from "./pages/Home/Home";
import { Quotes } from "./pages/Quotes/Quotes";
import { Authors } from "./pages/Authors/Authors";
import { About } from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="MainContent">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
