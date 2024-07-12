import {WeatherPage} from "./pages/WeatherPage.jsx";
import './App.css'
import {Meteorologist} from "./components/Meteorologist.jsx";

function App() {

  return (
    <>
      <div>
          <WeatherPage/>
          <Meteorologist/>
      </div>
    </>
  )
}

export default App
