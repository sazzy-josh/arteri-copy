import "./App.css";
import ArteriRoutes from "./routes/ArteriRoutes";
import {Toaster} from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <ArteriRoutes />
      <Toaster />
    </div>
  );
}

export default App;
