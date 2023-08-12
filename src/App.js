import "./App.css";
import { Sidebar } from "./components/layout/Sidebar";
import { QuoteBlock } from "./components/ui/QuoteBlock";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <div className="header"></div>
      <Home />
      <Sidebar />
      <div className="quoteBlock">
        <QuoteBlock />
      </div>
    </div>
  );
}

export default App;
