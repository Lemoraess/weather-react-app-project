import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Ubatuba" />

      <footer>
        This project was coded by{" "}
        <a href="https://www.linkedin.com/in/lenise-m-santana-72b824311/">
          Lenise Moraes
        </a>{" "}
        and is open source in Github.
      </footer>
    </div>
  );
}

export default App;
