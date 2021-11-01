import './App.css';
import Nav from './components/Nav/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Test from './pages/Test';
import Test2 from './pages/Test2';


import MonocLINK from './pages/MonocLINK';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
            <Route path='/' exact component={MonocLINK} />
            <Route path='/test' component={Test} />
            <Route path='/test2' component={Test2} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
