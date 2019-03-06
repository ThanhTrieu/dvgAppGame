import React, { Component } from 'react'
import { View, Dimensions  } from 'react-native'
// components
import { Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid'
import Image from 'react-native-scalable-image'

const HotTopNews = ({ props }) => {
  const urlImg = 'https://img.gurugamer.com/crop/480x254/2019/02/26/black-panther-movie-characters-d40c.jpg';
  return(
    <Grid>
      <Row style={{height: 218}}>
        <Col>
          <Image source={{uri: urlImg}} width={Dimensions.get('window').width} />
        </Col>
      </Row>
      <Row style={{backgroundColor: '#151A26', height: 115}}>
        <Col style={{paddingTop: 15, paddingLeft:10,paddingRight:10}}>
          <Text style={{color:'white',fontSize:19}}>
            {props.dataTopFocus ? (props.dataTopFocus.topFisrt ? props.dataTopFocus.topFisrt.title : '') : ''}
          </Text>
          <Text style={{color:'#aeaeae',fontSize:12, marginTop: 10}}>
            {props.dataTopFocus ? (props.dataTopFocus.topFisrt ? props.dataTopFocus.topFisrt.sapo : '') : ''}
          </Text>
        </Col>
      </Row>
      <Row style={{height: 145, marginTop: 10}}>      
        <Col>
          <View style={{ marginLeft: 12}}>
            <Image source={{uri: 'https://img.gurugamer.com/crop/225x233/2019/03/04/casual-gamer-online-pubg-mobile-lock-3722.jpg'}} width={Dimensions.get('window').width/2.2} />

            <View style={{position: 'absolute', top: 4, left: 0, right: 0, bottom: 0}}>
              <Text style={{width:120,color: 'white', backgroundColor: 'red', fontSize: 12}}>              {props.dataTopFocus ? (props.dataTopFocus.topSecond ? props.dataTopFocus.topSecond.cateName : '') : ''} 
              </Text>
            </View>

            <View style={{position: 'absolute', top: 135, left: 12, right: 0, bottom: 0}}>
              <Text style={{color: 'white', fontSize: 14, paddingLeft: 3, paddingRight:3}}> {props.dataTopFocus ? (props.dataTopFocus.topSecond ? props.dataTopFocus.topSecond.title : '') : ''}
              </Text>
            </View>
          </View>
        </Col>
        <Col>
          <View style={{ marginLeft: 3}}>
            <Image source={{uri: 'https://img.gurugamer.com/crop/225x233/2019/02/25/female-esport-viewer-29f1.png'}} width={Dimensions.get('window').width/2.2} />

            <View style={{position: 'absolute', top: 4, left: 0, right: 0, bottom: 0}}>
              <Text style={{width:120,color: 'white', backgroundColor: 'red', fontSize: 12}}> {props.dataTopFocus ? (props.dataTopFocus.topThird ? props.dataTopFocus.topThird.cateName : '') : ''}
              </Text>
            </View>

            <View style={{position: 'absolute', top: 135, left: 12, right: 0, bottom: 0}}>
              <Text style={{color: 'white', fontSize: 14, paddingLeft: 3, paddingRight:3}}> {props.dataTopFocus ? (props.dataTopFocus.topThird ? props.dataTopFocus.topThird.title : '') : ''}
              </Text>
            </View>
          </View>
        </Col>
      </Row>
    </Grid>
  )
}

export default HotTopNews