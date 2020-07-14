import React from 'react';
import axios from "axios";
import Card from './Card';
import Followers from './Followers';
import './App.css';
import styled from 'styled-components';


const StyledH1 = styled.h1`

  text-align: center;


`;


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: []
    };
    console.log("constructor() executed");
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/JEGJ93") 
    .then(response => {
    console.log('API user RESPONSE', response)
    this.setState({
      user: response.data
    })
    })
    .catch(err => {
      console.log('error', err)
    })
    
    
    console.log("componentDidMount() executed");

    axios.get("https://api.github.com/users/JEGJ93/followers")
    .then(response => {
    console.log('API follower RESPONSE', response)
    this.setState({
      followers: response.data
    })
    })
    .catch(err => {
      console.log('error', err)
    })
    
    
    console.log("componentDidMount() executed");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate() executed");
  }

  componentWillUnmount() {

  }

  render() {
    console.log("render() executing");
    return (
        <div>
          <StyledH1>
            React GitHub User-Card
          </StyledH1>
      
          <div style={{display:'flex', justifyContent: 'space-between'}} className="App">
            <Card card={this.state.user}/>
            <Followers followers={this.state.followers} />
          </div>

        </div>
    );
  }

}

export default App;
