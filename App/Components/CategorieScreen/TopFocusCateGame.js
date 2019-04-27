import React from 'react'
import { View, Dimensions, TouchableOpacity  } from 'react-native'
// components
import { Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid'
import Image from 'react-native-scalable-image'

const TopFocusCateGame = ({ props }) => {
  const { navigate } = props.navigation
  const idPostOne = props.dataTopFocusCate ? (props.dataTopFocusCate.topFisrt ? props.dataTopFocusCate.topFisrt.post_id : 0) : 0
  const idPostTwo = props.dataTopFocusCate ? (props.dataTopFocusCate.topSecond ? props.dataTopFocusCate.topSecond.post_id : 0) : 0
  const idPostThree = props.dataTopFocusCate ? (props.dataTopFocusCate.topThird ? props.dataTopFocusCate.topThird.post_id : 0) : 0
  const urlImg = 'https://img.gurugamer.com/crop/480x254/2019/02/26/black-panther-movie-characters-d40c.jpg';
  return(
    <Grid>
      <TouchableOpacity onPress={()=>navigate('Detail',{postId: idPostOne})}>
        <Row style={{height: 218}}>
          <Col>
            <Image source={{uri: urlImg}} width={Dimensions.get('window').width} />
          </Col>
        </Row>
        <Row style={{backgroundColor: '#151A26', height: 115}}>
          <Col style={{paddingTop: 15, paddingLeft:10,paddingRight:10}}>
            <Text style={{color:'white',fontSize:19}}>
              {props.dataTopFocusCate ? (props.dataTopFocusCate.topFisrt ? props.dataTopFocusCate.topFisrt.title : '') : ''}
            </Text>
            <Text style={{color:'#aeaeae',fontSize:12, marginTop: 10}}>
              {props.dataTopFocusCate ? (props.dataTopFocusCate.topFisrt ? props.dataTopFocusCate.topFisrt.sapo : '') : ''}
            </Text>
          </Col>
        </Row>
      </TouchableOpacity>
      <Row style={{height: 145, marginTop: 10}}>
        <TouchableOpacity onPress={()=>navigate('Detail',{postId: idPostTwo})}>  
          <Col>
            <View style={{ marginLeft: 12}}>
              <Image source={{uri: 'https://img.gurugamer.com/crop/225x233/2019/03/04/casual-gamer-online-pubg-mobile-lock-3722.jpg'}} width={Dimensions.get('window').width/2.2} />

              <View style={{position: 'absolute', top: 4, left: 0, right: 0, bottom: 0}}>
                <Text style={{width:120,color: 'white', backgroundColor: 'red', fontSize: 12}}>
                  {props.nameCate}
                </Text>
              </View>

              <View style={{position: 'absolute', top: 135, left: 12, right: 0, bottom: 0}}>
                <Text style={{color: 'white', fontSize: 14, paddingLeft: 3, paddingRight:3}}> 
                {props.dataTopFocusCate ? (props.dataTopFocusCate.topSecond ? props.dataTopFocusCate.topSecond.title : '') : ''}
                </Text>
              </View>
            </View>
          </Col>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigate('Detail',{postId: idPostThree})}>
          <Col>
            <View style={{ marginLeft: 3}}>
              <Image source={{uri: 'https://img.gurugamer.com/crop/225x233/2019/02/25/female-esport-viewer-29f1.png'}} width={Dimensions.get('window').width/2.2} />

              <View style={{position: 'absolute', top: 4, left: 0, right: 0, bottom: 0}}>
                <Text style={{width:120,color: 'white', backgroundColor: 'red', fontSize: 12}}>
                  {props.nameCate}
                </Text>
              </View>

              <View style={{position: 'absolute', top: 135, left: 12, right: 0, bottom: 0}}>
                <Text style={{color: 'white', fontSize: 14, paddingLeft: 3, paddingRight:3}}> {props.dataTopFocusCate ? props.dataTopFocusCate.topThird.title : ''}
                </Text>
              </View>
            </View>
          </Col>
        </TouchableOpacity>
      </Row>
    </Grid>
  )
}

export default TopFocusCateGame