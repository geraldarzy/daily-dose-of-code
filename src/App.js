import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import LandingPage from './containers/LandingPage';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <LandingPage/>
        </Route>

        <Route exact path='/trial'>
          <div className="App">
            Test
          </div>
        </Route>

      </Switch>
    </>
  );
}

export default App;
