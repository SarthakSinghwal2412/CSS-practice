
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import MainComp from "./components/mainComp/MainComp";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar/>
      <div className="app">
        <Sidebar/>
        <Switch>
          {/* <Route exact path = "/">
            <MainComp/>
          </Route>   */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
