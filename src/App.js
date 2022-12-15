import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Drums from "./pages/Drums";
import Piano from "./pages/Piano";
import Guitar from "./pages/Guitar";
import Musicbox from "./pages/Musicbox";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
      
        <Route path="/home" element={<Home />} /> 
        <Route path="/drums" element={<Drums />} />
        <Route path="/piano" element={<Piano />} />
        <Route path="/guitar" element={<Guitar />} />
        <Route path="/musicbox" element={<Musicbox />} />
        
     
        </Routes>
     
     {/* <Home/> */}
     {/* <Drums/> */}
     {/* <Piano/> */}
     {/* <Guitar/> */}
     {/* <Musicbox/> */}
     </Router>
    </div>
  );
}

export default App;
