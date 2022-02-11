import { Routes,Router,Route,Switch} from "react-router-dom"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Login from "./components/Login"
import Registration from "./components/Registration.js"
function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Registration/>}> </Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
    </Routes>
  </Router>
  );
}

export default App;
