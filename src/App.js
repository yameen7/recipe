import { BrowserRouter as  Router } from "react-router-dom";

import { RecipeRoutes } from './Components/RecipeRoutes';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <RecipeRoutes />
      </Router>
    </div>
  );
}

export default App;
