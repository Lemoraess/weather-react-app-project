import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Ubatuba" />

      <footer>
        This project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/lenise-m-santana-72b824311/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lenise Moraes
        </a>{" "}
        and is open source in{" "}
        <a
          href="https://github.com/Lemoraess/weather-react-app-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github.
        </a>
      </footer>
    </div>
  );
}

export default App;
