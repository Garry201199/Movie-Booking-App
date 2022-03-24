import "./App.css";
import { Routes, Route } from "react-router-dom";
import Booking from "../src/Comp/Booking";
import Home from "../src/Comp/Home";
import "shaka-player/dist/controls.css";

import Header from "./Comp/Header";
import CheckOut from "./Comp/CheckOut";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />

          <Route path="/booking" element={<Booking />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
