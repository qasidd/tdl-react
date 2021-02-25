import './resources/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/header/Navigation';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <div className="container mt-3">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
