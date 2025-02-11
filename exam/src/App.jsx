import {Navbar} from "./components/Navbar.jsx";
import './App.css'
import {Outlet} from "react-router-dom";

function App() {

  return (
    <>
      <div className={"general"}>
          <Navbar/>
          <Outlet/>
      </div>
    </>
  )
}

export default App
