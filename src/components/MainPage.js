import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Sidebar from './Sidebar';
import Header from './Header';
import Home from './Home';
import FutureSessions from './FutureSessions';

const routes = [
  {
    path: "/Home",
    exact: true,
    page: () => <Home />
  },
  {
      path: "/FutureSessions",
      exact: true,
      page: () => <FutureSessions />
    },
];

class MainPage extends Component {
  render() {
    return (
    <Router>

      <div >
        <Sidebar />
      </div>

      <Header />

      <body>
          <div className="container">
              <div className="row">
                <div className="col-md-12 grey">
                    {routes.map((route, index) => (
                        <Route
                          key={index}
                          path={route.path}
                          exact={route.exact}
                          component={route.page}
                        />
                      ))}
                </div>
              </div>
          </div>
      </body>

    </Router>
    );
  }
}

export default MainPage;
