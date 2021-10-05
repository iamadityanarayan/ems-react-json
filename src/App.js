import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import AllEmployee from './components/AllEmployee';
import AddEmployee from './components/AddEmployee';
import PageNotFound from './components/PageNotFound';
import EditEmployee from './components/EditEmployee';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/notfound"><PageNotFound /></Route>
        <Route>
          <NavBar />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/all"><AllEmployee /></Route>
            <Route exact path="/add"><AddEmployee /></Route>
            <Route exact path="/edit/:id"><EditEmployee /></Route>
            <Redirect to="/notfound" />
          </Switch>
        </Route>
      </Switch>
    </Router>
  );
}

const Home = () => {
  return (
    <div className="pt-5">
      Home Component
    </div>
  )
}

export default App;
