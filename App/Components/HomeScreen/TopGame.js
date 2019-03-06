import React from 'react'
import { Dimensions, View } from 'react-native'
import { DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import Image from 'react-native-scalable-image'

const cards = [
  {
    text: 'Card One',
    name: 'One',
    //image: require('https://img.gurugamer.com/crop/225x233/2019/03/01/5-d59f.jpg'),
  },
  {
    text: 'Card Two',
    name: 'Two',
    //image: require('https://img.gurugamer.com/crop/225x233/2019/02/28/lifeafter-screenshot-1-8e6b.jpg'),
  },
];

const TopGame = ({ props }) => {
  return(
    <Grid>
      <Row style={{height:550, marginTop: 50}}>
        <Col>
          <View>
            <DeckSwiper
            style={{backgroundColor:'red'}}
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail  source={{uri: 'https://img.gurugamer.com/crop/225x233/2019/02/25/female-esport-viewer-29f1.png'}} width={Dimensions.get('window').width/4} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image source={{uri: 'https://img.gurugamer.com/crop/225x233/2019/02/25/female-esport-viewer-29f1.png'}} width={Dimensions.get('window').width} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }/>
          </View>
        </Col>
      </Row>
    </Grid>
  )
}
export default  TopGame 