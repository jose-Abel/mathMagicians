import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CalculatorPage from '../pages/CalculatorPage';
import QuotesPage from '../pages/QuotesPage';
import Header from '../components/Header';
import './AppRouter.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/calculator">
              <CalculatorPage />
            </Route>
            <Route path="/quotes">
              <QuotesPage />
            </Route>

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
