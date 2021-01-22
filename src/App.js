// import logo from './logo.svg';
// import '../../public/script/typingscript.js';
// import './App.css';
import React, {Component} from 'react';
import Home from './components/Home';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';

class App extends Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default App;
