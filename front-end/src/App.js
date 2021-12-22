import TopBar from './components/topbar/TopBar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Setting from './pages/settings/Setting';
import Single from './pages/single/Single';
import Write from './pages/write/Write';

import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Setting /> : <Register />}</Route>

        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
      {/* <Single /> */}
      {/* <Write /> */}
      {/* <Setting /> */}
      {/* <Login /> */}
      {/* <Register /> */}
    </Router>
  );
}

export default App;
