import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Landing from './Pages/Landing'
import UserPage from './Pages/UserPage'
import Error from './Pages/Error'

function App() {


  return (
    <Router>
      <Switch>
      <Route path='/404' exact component={Error} />
      <Route path='/' exact component={Landing} />
      <Route path='/:login' component={UserPage} />
      </Switch>
    </Router>
  );
}

export default App;
