import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './App.css'
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/*" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App