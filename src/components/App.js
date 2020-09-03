import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Sorcerer from './Sorcerer';
import sourceOptions from '../data/sourceOptions.json';
//import logo from '../logo.svg';
import '../styles/App.css';

//const initialList = [];

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      surges: [],
      source: "phb"
    };
  }

  surge = () => {
    let newSurges = this.state.surges.concat(this.state.source);
    this.setState({ surges: newSurges });
  }

  clearList = () => {
    this.setState({ surges: [] });
  }

  getSourceOptions = (option) => {
    return sourceOptions.map((i) => 
        <option value={i.name} key={i.name}>{i.label}</option>
    );
  };

  handleSourceChange = (event) => {
    //const target = event.currentTarget;
    //const value = target.value;
    //const name = target.name;
    this.setState({
      source: event.currentTarget.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Wild Surge!</h1>
        </header>

        <Container>
          <hr></hr>
          <Row>
            <Col sm={6}>
            <Form.Control as="select" name="source" onChange={this.handleSourceChange}>
              {this.getSourceOptions()}
            </Form.Control>
            </Col>
            <Col sm={3}>
              <Button block onClick={() => this.surge()}>SURGE!</Button>
            </Col>
            <Col sm={3}>
              <Button variant="outline-primary" block onClick={() => this.clearList()}>CLEAR</Button>
            </Col>

          </Row>
        </Container>
        <hr></hr>
        <Container>
          {this.state.surges.reverse().map((item) => (
            <Sorcerer></Sorcerer>
          ))}
        </Container>


        <Navbar fixed="bottom" bg="dark" variant='dark'>
        <Container>
          <Row>
            <Navbar.Brand><a href="https://github.com/LeeMcKusick/wildsurge">View on Github</a></Navbar.Brand>
          </Row>  
          <Row>
            <Navbar.Brand>Made by Lee Skellington-McKusick &nbsp; <a href='https://ko-fi.com/B0B31QB1X' target='_blank' rel="noopener noreferrer"><img height='36' style={{border: '0px', height:'36px'}} src='https://cdn.ko-fi.com/cdn/kofi3.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a></Navbar.Brand>
          </Row>
        </Container>
        </Navbar>
      </div>
    );
  }
}

export default App;
