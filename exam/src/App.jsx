import {WeatherPage} from "./pages/WeatherPage.jsx";
import './App.css'
import {Meteorologist} from "./components/Meteorologist.jsx";

function App() {

  return (
    <>
      <div className={"general"}>
          <WeatherPage/>
          {/*<Meteorologist/>*/}
      </div>
    </>
  )
}

export default App
