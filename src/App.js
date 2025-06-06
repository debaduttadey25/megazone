import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/landigpage";
import { Router,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Define Routes for different pages */}
        <Route  path="/" component={LandingPage} />
        
      </Router>
    </div>
  );
}

export default App;
