import React, { Component } from 'react'
import { View } from 'react-native';
// components
import HeaderPage from '../Components/HeaderPage';
import TabsBar from '../Components/TabsBar';
import { Container } from 'native-base';

export default class LaunchScreen extends Component {
  render () {
    return (
      <Container>
        <HeaderPage navigation={this.props.navigation} />
        <TabsBar />
      </Container>
    )
  }
}
