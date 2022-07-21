import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <h1 className="text-center bg-blue-700 py-10 px-5 rounded-md text-white text-4xl font-semibold">
        Welcome to Arteri
      </h1>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
