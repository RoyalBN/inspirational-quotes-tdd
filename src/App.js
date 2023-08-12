import "./App.css";
import { Sidebar } from "./components/ui/Sidebar";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <Sidebar />
    </div>
  );
}

export default App;
