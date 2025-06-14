import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
      </header>
      <h1>Paris</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="#" alt="" /> 6ºC
        </div>
        <div className="col-6">
          <ul>
            <li>Preciptation 15%</li>
            <li>Huminity 72%</li>
            <li>Wind 13km/h</li>
          </ul>
        </div>
      </div>
      <footer>
        This project was coded by
        <a href="https://www.linkedin.com/in/lenise-m-santana-72b824311/">
          Lenise Moraes
        </a>{" "}
        and is open source in Github.
      </footer>
    </div>
  );
}

export default App;
