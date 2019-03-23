import React, { Component } from 'react';
import './Sidebar.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

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

class Sidebar extends Component {
  render() {
    return (
    <Router>
      <div>
          <SideNav
              onSelect={(selected) => {
                  // Add your code here
              }}
          >
              <SideNav.Toggle />
              <SideNav.Nav defaultSelected="home">
                  <NavItem eventKey="home" href="/Home">
                      <NavIcon>
                          <i className="fas fa-home" style={{ fontSize: '1.75em' }} />
                      </NavIcon>
                      <NavText>
                         <Link to="/Home">Home</Link>
                      </NavText>
                  </NavItem>

                  <NavItem eventKey="sessions">
                      <NavIcon>
                          <i className="fas fa-calendar-alt" style={{ fontSize: '1.75em' }} />
                      </NavIcon>
                      <NavText>
                          Sessions
                      </NavText>
                      <NavItem eventKey="sessions/futuresessions">
                          <NavText><Link className="white-text" to="/FutureSessions">Future Sessions</Link></NavText>
                      </NavItem>
                      <NavItem eventKey="sessions/pastsessions">
                          <NavText>
                              <Link className="white-text" to="/PastSessions">Past Sessions</Link>
                          </NavText>
                      </NavItem>
                  </NavItem>
              </SideNav.Nav>
          </SideNav>
      </div>
      <div className="container">
          <div className="row">
            <div className="col-md-12">
                {routes.map((route, index) => (
                    // You can render a <Route> in as many places
                    // as you want in your app. It will render along
                    // with any other <Route>s that also match the URL.
                    // So, a sidebar or breadcrumbs or anything else
                    // that requires you to render multiple things
                    // in multiple places at the same URL is nothing
                    // more than multiple <Route>s.
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
    </Router>
    );
  }
}

export default Sidebar;
