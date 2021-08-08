import "./App.css";
import About from "./Components/About";
import Project from "./Components/Project";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Report from "./Components/Report/Report";
import References from "./Components/References";
// import Connect from "./Components/Connect";
import NotFound from "./Components/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/projects" component={Project}></Route>
          <Route path="/report" component={Report}></Route>
          <Route path="/references" component={References}></Route>
          {/* <Route path="/blog" component={Blog}></Route> */}
          {/* <Route path="/connect" component={Connect}></Route> */}
          {/* <Route path="/music" component={Music}></Route> */}
          {/* <Route path="/calculator" component={Calculator}></Route> */}
          {/* <Route path="/photos" component={Photos}></Route> */}
          {/* <Route path="/metronome" component={Metronome}></Route> */}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
