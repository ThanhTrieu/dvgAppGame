import React, { Component } from 'react'
import { Dimensions  } from 'react-native';
import { Container } from 'native-base'
import { Images } from '../Themes'
import Spinner from 'react-native-loading-spinner-overlay'
import Image from 'react-native-scalable-image'

export default class WelcomeScreen extends Component {
  render() {
    return(
      <Container style={{backgroundColor:'white'}}>
        <Spinner
          visible={true}
          textContent={'Loading data ...'}
        />
        {/* <Image source={Images.backGround} width={Dimensions.get('window').width} height={Dimensions.get('window').height} /> */}
      </Container>
    );
  }
}