import "./App.css";
import Header from "./componets/Header";
import Chart from "./componets/Chart";
import Stocks from "./componets/Stocks";

function App() {
  return (
    <div className="app__wrapper">
      <div className="app__header">
        <Header />
        <div className="main__wrapper">
          <Chart />
          <Stocks />
        </div>
      </div>
      <div className="app_body"></div>
    </div>
  );
}

export default App;
