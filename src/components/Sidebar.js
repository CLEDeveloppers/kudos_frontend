import React, { Component } from 'react';
import './Sidebar.css';
import { Link } from "react-router-dom";
import styled from 'styled-components';

import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const navWidthCollapsed = 64;
const navWidthExpanded = 280;


const Main = styled.main`
    position: relative;
    overflow: hidden;
    transition: all .15s;
    padding: 0 20px;
    margin-left: ${props => (props.expanded ? 240 : 64)}px;
`;


class Sidebar extends Component {

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
      <SideNav onSelect={this.onSelect} onToggle={this.onToggle}>
        <SideNav.Toggle />
        <SideNav.Nav selected={selected}>
            <NavItem eventKey="home">
                <NavIcon>
                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
                </NavIcon>
                <NavText style={{ paddingRight: 32 }} title="Home">
                    Home
                </NavText>
            </NavItem>
            <NavItem eventKey="devices">
                <NavIcon>
                    <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
                </NavIcon>
                <NavText style={{ paddingRight: 32 }} title="Devices">
                    Devices
                </NavText>
            </NavItem>
            <NavItem eventKey="reports">
                <NavIcon>
                    <i className="fa fa-fw fa-list-alt" style={{ fontSize: '1.75em', verticalAlign: 'middle' }} />
                </NavIcon>
                <NavText style={{ paddingRight: 32 }} title="Reports">
                    Reports
                </NavText>
            </NavItem>
            <NavItem eventKey="settings">
                <NavIcon>
                    <i className="fa fa-fw fa-cogs" style={{ fontSize: '1.5em', verticalAlign: 'middle' }} />
                </NavIcon>
                <NavText style={{ paddingRight: 32 }} title="Settings">
                    Settings
                </NavText>
                <NavItem eventKey="settings/policies">
                    <NavText title="Policies">
                        Policies
                    </NavText>
                </NavItem>
                <NavItem eventKey="settings/network">
                    <NavText title="Network">
                        Network
                    </NavText>
                </NavItem>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
    );
  }
}

export default Sidebar;
