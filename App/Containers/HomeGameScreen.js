import React, { Component } from 'react'
import { View, Text, Dimensions  } from 'react-native';
// components
import { Container } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Image from 'react-native-scalable-image';

export default class HomeGameScreen extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.getDataTopFocus(1,3);
  }

  render () {
    //console.log(this.props)
    const urlImg = 'https://img.gurugamer.com/crop/480x254/2019/02/26/black-panther-movie-characters-d40c.jpg';
    return (
      <Container>
        {/* <Spinner
          visible={this.props.fetching}
          textContent={'Loading...'}
        /> */}
        <Grid>
          <Row style={{height: 218}}>
            <Col>
              <Image source={{uri: urlImg}} width={Dimensions.get('window').width} />
            </Col>
          </Row>
          <Row style={{backgroundColor: '#151A26', height: 115}}>
            <Col style={{paddingTop: 15, paddingLeft:10,paddingRight:10}}>
              <Text style={{color:'white',fontSize:19}}>{this.props.dataTopFocus ? this.props.dataTopFocus.topFisrt.title : ''}</Text>
              <Text style={{color:'#aeaeae',fontSize:12, marginTop: 10}}>{this.props.dataTopFocus ? this.props.dataTopFocus.topFisrt.sapo : ''}</Text>
            </Col>
          </Row>
          <Row style={{height: 145}}>
            <Col>
              
            </Col>
            <Col>
            </Col>
          </Row>
        </Grid>
      </Container>
    )
  }
}
