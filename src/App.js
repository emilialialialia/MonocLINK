import './App.css';

// components & deps
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


// pages
import Skills from './pages/Skills';
import Arch from './pages/Arch';
import MonocLINK from './pages/MonocLINK';
import API from './pages/API';
import Games from './pages/Games';

// colors
import { colors } from './Util';


function App() {
  // set body color
  document.body.style.backgroundColor = colors.lavGrey;

  return (
    <div>
      <Router>
        <Nav />
        <Switch>
            <Route path='/' exact component={MonocLINK} />
            <Route path='/skills' component={Skills} />
            <Route path='/arch' component={Arch} />
            <Route path='/api' component={API} />
            <Route path='/games' component={Games} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;
