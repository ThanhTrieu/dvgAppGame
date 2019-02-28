import React, { Component } from 'react'
//import { View, Text, Dimensions  } from 'react-native'
// components
import { Container } from 'native-base'
//import { Col, Row, Grid } from 'react-native-easy-grid'

//import Image from 'react-native-scalable-image'

import HotTopNews from '../Components/HomeScreen/HotTopNews'

export default class HomeGameScreen extends Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <Container>
        <HotTopNews props={this.props} />
      </Container>
    )
  }
}
