// import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import GetStarted from "./pages/GetStarted/GetStarted";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/portfolio/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route exact path="/getstarted" component={GetStarted}>
            <GetStarted />
          </Route>
          <Route exact path="/portfolio" component={Portfolio}>
            <Portfolio />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
