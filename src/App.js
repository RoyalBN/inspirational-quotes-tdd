import "./App.css";
import { Header } from "./components/layout/Header";
import { Sidebar } from "./components/layout/Sidebar";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <Sidebar />
        <div>
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
