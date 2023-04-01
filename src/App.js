
import Contact from "./pages/Contact";
import Corporate from "./pages/Corporate";
import TermCon from "./pages/TermCon";
import Navbar from "./pages/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Contact/>}/>
            <Route exact path="/corporate" element={<Corporate/>}/>
            <Route exact path="/conditions" element={<TermCon/>}/>
        </Routes>
      </Router>
    </div> 
  );
}
export default App;