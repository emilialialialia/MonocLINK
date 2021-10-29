import './App.css';
import Nav from './components/Nav/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Test from './components/Test';
import Test2 from './components/Test2';


import MonocLINK from './components/MonocLINK';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
            <Route path='/' exact component={MonocLINK} />
            <Route path='' component={Test2} />
        </Switch>
      </Router>
      <MonocLINK />
    </div>

  );
}

export default App;
