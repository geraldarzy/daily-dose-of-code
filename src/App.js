import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import LandingPage from './containers/LandingPage';
import HomePage from './containers/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <LandingPage/>
        </Route>

        <Route exact path='/trial'>
          <HomePage/>
        </Route>

      </Switch>
    </>
  );
}

export default App;
