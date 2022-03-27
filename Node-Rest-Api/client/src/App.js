import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
/*
 */
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
