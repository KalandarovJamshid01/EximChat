import Login from "./pages/login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Messenger from "./pages/messenger/Messenger";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route path="/login">
          {user ? <Redirect to="/messenger" /> : <Login />}
        </Route>
        <Route path="/messenger">
          {!user ? <Redirect to="/login" /> : <Messenger />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
