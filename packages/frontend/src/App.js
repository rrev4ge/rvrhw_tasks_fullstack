import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Tasks from './pages/Tasks';


function App() {
  return (
    <Router>
      <nav>
        <ul>
          {/* <li>
            <Link to='/' >Tasks</Link>
          </li> */}
          <li>
            <Link to='/tasks' >Tasks</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/' component={Tasks} />
        <Route path='/tasks' component={Tasks} /> 
      </Switch>
    </Router>
  );
}

export default App;
