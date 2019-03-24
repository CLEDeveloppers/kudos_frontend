import React, { Component } from 'react';
import './Sidebar.css';
import { Link } from "react-router-dom";

import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class Sidebar extends Component {
  render() {
    return (
        <SideNav onSelect={(selected) => {}} className="dark-blue">
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
    );
  }
}

export default Sidebar;
