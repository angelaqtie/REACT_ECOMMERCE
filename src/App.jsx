import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/home/Homepage";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Homepage />} />
      </Routes>
    </Router>
  );
};

export default App;
