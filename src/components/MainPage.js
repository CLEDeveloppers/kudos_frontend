import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './MainPage.css';

import styled from 'styled-components';


import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import Sidebar from './Sidebar';
import Header from './Header';
import Home from './Home';
import FutureSessions from './FutureSessions';

const navWidthCollapsed = 64;
const navWidthExpanded = 280;

const Main = styled.main`
    height: 100%,
    position: relative;
    overflow: hidden;
    transition: all .15s;
    margin-left: ${props => (props.expanded ? 240 : 64)}px;
`;


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

   state = {
         selected: 'home',
         expanded: false
     };

     lastUpdateTime = new Date().toISOString();

     onSelect = (selected) => {
         this.setState({ selected: selected });
     };

     onToggle = (expanded) => {
         this.setState({ expanded: expanded });
     };

  render() {
    const { expanded, selected } = this.state;
    return (
    <Router>
    <div className="sidebar">
       <SideNav onSelect={this.onSelect} onToggle={this.onToggle} className="dark-blue" style={{
                                                                               position: 'asbolute',
                                                                               height: '100vh',
                                                                               top: '0',
                                                                               bottom: '0'}}>
          <SideNav.Toggle />
          <SideNav.Nav selected={selected}>
              <NavItem eventKey="home">
                  <NavIcon>
                      <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
                  </NavIcon>
                  <NavText style={{ paddingRight: 32 }} title="Home">
                      <Link to="/Home">Home</Link>
                  </NavText>
              </NavItem>
              <NavItem eventKey="sessions">
                  <NavIcon>
                      <i className="fa fa-fw fa-cogs" style={{ fontSize: '1.5em', verticalAlign: 'middle' }} />
                  </NavIcon>
                  <NavText style={{ paddingRight: 32 }} title="Sessions">
                      Sessions
                  </NavText>
                  <NavItem eventKey="sessions/futuresessions">
                      <NavText title="FutureSessions">
                          <Link to="/FutureSessions">Future Sessions</Link>
                      </NavText>
                  </NavItem>
                  <NavItem eventKey="sessions/pastsessions">
                      <NavText title="PastSessions">
                          Past Sessions
                      </NavText>
                  </NavItem>
              </NavItem>
          </SideNav.Nav>
      </SideNav>
    </div>

    <Main expanded={expanded}>
     <Header />
     {routes.map((route, index) => (
         <Route
           key={index}
           path={route.path}
           exact={route.exact}
           component={route.page}
         />
       ))}
    </Main>

    </Router>
    );
  }
}

export default MainPage;
