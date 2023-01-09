// import logo from "./logo.svg";
import WeatherSearch from "./WeatherSearch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Weather App
        <WeatherSearch />
      </header>
      <footer>
        <a
          href="https://github.com/Z-Hp/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by{" "}
        <a
          href="https://zahrahosseinpour.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Zahra Hosseinpour
        </a>
      </footer>
    </div>
  );
}

export default App;
