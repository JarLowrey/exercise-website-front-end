import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import EventSearchPack from './eventsSearch/pack';
import Header from './header/header';

export default class Main extends React.Component {
  static asd() {
    return 'asd';
  }
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Header} />
          <Switch>
            <Route exact path="/" component={EventSearchPack} />
          </Switch>
        </div>
      </Router>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(<Main />, div);
});
