import React, { Component } from 'react';

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, NavLink, NavItem, Nav, TabContent,TabPane, Col, Row, Table } from 'reactstrap';

function MakeCard(props) {
  return (
    <Card style = {{margin: 50, color: 'black', height: '100%'}}>
      <CardBody>
        <CardText><b>Course: </b>{props.course}</CardText>
        <CardText><b>Tutee: </b>{props.tutee}</CardText>
        <CardText><b>Topic: </b>{props.topic}</CardText>
        <CardText><b>Professor: </b>{props.professor}</CardText>
        <CardText><b>Time: </b>{props.time}</CardText>
        <div style={{display: 'flex', justifyContent: 'center', marginHorizontal: 10}}>
          <Button style={{marginRight: '20px'}}>Confirm</Button>
          <Button style={{marginLeft: '20px'}}>Cancel</Button>
        </div>
      </CardBody>
    </Card>
  );
}
