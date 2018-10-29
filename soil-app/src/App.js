import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const API = 'http://localhost:5000/api/v1'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: "",
    };
  }

  componentDidMount() {
    fetch(API + '/all_data')
      .then( response => {
        if (!response.ok) {
          throw response
        }
        else return response.json()
      })
      .then( data => {
        if (data) {
          this.setState({
            allData: JSON.stringify(data)
          });
        }
      })
      .catch( err => {
          console.log(err);
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.allData}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
