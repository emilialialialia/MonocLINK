import './App.css';

// components & deps
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Wrapper } from './components/Styles/StyledApp';


// pages
import Test from './pages/Test';
import Test2 from './pages/Test2';
import MonocLINK from './pages/MonocLINK';

// colors
import { colors } from './ColorScheme';


function App() {
  // set body color
  document.body.style.backgroundColor = colors.lavGrey;

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
