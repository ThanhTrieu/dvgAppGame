import React, { Component } from 'react'
import { View } from 'react-native';
// components
import { Container } from 'native-base';
import Spinner from 'react-native-loading-spinner-overlay';

export default class HomeGameScreen extends Component {
  constructor(props){
    super(props);
    //this.state = {spinner: true}
  }

  componentDidMount() {
    this.props.getDataTopFocus('Tokyo','ASASDASDA');
    // setInterval(() => {
    //   this.setState({
    //     spinner: !this.state.spinner
    //   });
    // }, 3000);
    // this.setState({
    //   spinner: !this.state.spinner
    // });
  }

  render () {
    console.log(this.state)
    return (
      <Container>
        {/* <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
        /> */}
      </Container>
    )
  }
}
