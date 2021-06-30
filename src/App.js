import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Project from './component/Project';
import Education from './component/Education';
import Skills from './component/Skills';
import Footer from './component/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Project} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/skills" component={Skills} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
