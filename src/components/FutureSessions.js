import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button, NavLink, NavItem, Nav, TabContent, TabPane, Table } from 'reactstrap';
import './FutureSessions.css';

class FutureSessions extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.MakeTable = this.MakeTable.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      activeTab: '1',
      requested:  [
        {course: "CSC1401", tutee: "Othmane Mahfoud", topic: "Pointers", professor: "Pr. Hanaa Talei", date: "13/03/19",time: "16:00-17:00"},
        {course: "CSC2302", tutee: "Najwa Laabid", topic: "Header files", professor: "Kevin Smith", date: "13/03/19",time: "16:00-17:00"},
        {course: "FIN3301", tutee: "Ayoub Kachkach", topic: "Time value of Money", professor: "Dr. Harit Satt", date: "13/03/19",time: "16:00-17:00"},
        {course: "MGT3301", tutee: "Maha Hamdi", topic: "Chapter7: HR management", professor: "Dr. Hassi", date: "13/03/19",time: "16:00-17:00"},
        {course: "MKT3301", tutee: "Abdelmajid Essofi", topic: "Pricing", professor: "Pr. Bouhafra", date: "13/03/19",time: "16:00-17:00"},
        {course: "PSY1301", tutee: "Hamza Touhs", topic: "Nature vs. Nurture", professor: "Dr. Aure Veyssiere", date: "13/03/19",time: "16:00-17:00"}
      ],
      confirmed:  [
        {course: "BIO1401", tutee: "Manal Hamdi", topic: "Mitosis", professor: "Dr.Fouad Berrada", date: "13/03/19",time: "16:00-17:00"},
        {course: "CSC3302", tutee: "Zineb Attaoui", topic: "LL Parsers", professor: "Dr. Cavalli", date: "13/03/19",time: "16:00-17:00"},
        {course: "PHY1402", tutee: "Noah Jakovac", topic: "Electric Charge", professor: "Dr. Asmaa Khaldoune", date: "13/03/19",time: "16:00-17:00"}
      ],
      modal: false
    };
  }
  MakeTable(props){
    return(
      <div className="scrolling-wrapper-flexbox">
      <Table hover striped >
        <thead>
          <tr>
            <th>Course</th>
            <th>Tutee</th>
            <th>Date</th>
            <th>Time</th>
            <th>Topic</th>
            <th>Professor</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
        {props.data.map((row, i) => (
          <tr id={i}>
            <th>{row.course}</th>
            <td>{row.tutee}</td>
            <td>{row.date}</td>
            <td>{row.time}</td>
            <td>{row.topic}</td>
            <td>{row.professor}</td>
            <td>
              <Button  id = {i} onClick={this.toggleModal}>Update</Button>
              <Modal id = {i}  isOpen={this.state.modal} toggle={this.toggleModal}  backdropClassName="modal-backdrop" centered >
                <ModalHeader toggle={this.toggleModal}>Update</ModalHeader>
                <ModalBody>
                  Would you like to confirm or cancel this session ?
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.toggleModal}>Confirm</Button>{' '}
                  <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                </ModalFooter>
              </Modal>
            </td>
          </tr>
        ))}
        </tbody>
      </Table>
      </div>
    );
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  toggleModal() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    return (
      <div className="App">
        <div className="Body">
          <div>
          <Nav tabs>
              <NavItem>
                <NavLink className={this.state.activeTab === '1' ? "active" : ""} onClick={() => { this.toggle('1'); }}>
                  Requested
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={this.state.activeTab === '2' ? "active" : ""} onClick={() => { this.toggle('2'); }}>
                  Confirmed
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1" >
                <this.MakeTable data = {this.state.requested}/>
              </TabPane>
              <TabPane tabId="2">
                <this.MakeTable data = {this.state.confirmed}/>
              </TabPane>
            </TabContent>
          </div>
        </div>
    </div>
    );
  }
}

export default FutureSessions;
