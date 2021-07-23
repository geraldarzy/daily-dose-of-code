import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <div className="App">
            Hello
          </div>
        </Route>

        <Route>
          <div className="App">
            
          </div>
        </Route>

      </Switch>
    </>
  );
}

export default App;
