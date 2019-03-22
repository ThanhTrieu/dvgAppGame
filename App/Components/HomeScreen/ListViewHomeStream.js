import React, { Component } from 'react'
import { 
  View, 
  ListView, 
  Dimensions, 
  FlatList,
  ActivityIndicator,
  ScrollView  
} from 'react-native'

// components
import { 
  Container, 
  Header, 
  Content, 
  List, 
  ListItem, 
  Thumbnail, 
  Text, 
  Left, 
  Body, 
  Right, 
  Button 
} from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import Image from 'react-native-scalable-image'
import InfiniteScrollView from 'react-native-infinite-scroll-view'


const ViewFeatured = ({ props }) => {
  return(
    <View style={{flex: 1, marginTop:3}}>
      <View>
        <Image source={{uri : 'https://img.gurugamer.com/crop/450x268/2019/02/21/maxresdefault-1-14e8.jpg'}} width={Dimensions.get('window').width} />
      </View>
      <View style={{marginTop: 5, marginRight: 5, marginLeft: 5}}>
        <Text note numberOfLines={2}>{props.title}</Text>
      </View>
    </View>
  )
}

export default class Homestreaming extends Component {
  constructor(props){
    super(props);
    // this.state = {
    //   onEndReachedCalledDuringMomentum: true
    // }
  }

  onEndReached = () => {
    //if(this.state.onEndReachedCalledDuringMomentum){
      //console.log('AAAA')
      //this.loadMoreDataSync();
      //this.setState({onEndReachedCalledDuringMomentum: true});
      //this.onEndReachedCalledDuringMomentum = true;
    //}
  }
  
  loadMoreDataSync = () => {
    const date = new Date();
    const timeSteamp = date.getTime();
    const time = this.props.props.dataHomeStream ? (this.props.props.dataHomeStream.lastTimes ? this.props.props.dataHomeStream.lastTimes : timeSteamp) : timeSteamp;
    this.props.props.getMoreHomeStream(time, null);
  }

  render () {
    return(
      <View style={{ marginTop: 20, flex: 1 }}>
        <View style={{flex: 1 }}>
          <List>
            <FlatList
              data={this.props.props.dataHomeStream ? (this.props.props.dataHomeStream.firstHomeStream ? this.props.props.dataHomeStream.firstHomeStream : [] ) : []}
              keyExtractor={(item) => item.title}
              renderItem={({ item, index }) => (
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail square  source={{ uri: 'https://img.gurugamer.com/crop/218x143/2019/03/05/tyler-ninja-blevins-fortnite-interview-4186.jpg' }} />
                  </Left>
                  <Body>
                    <Text note numberOfLines={2}>{item.title}</Text>
                    <Text note numberOfLines={1}>{item.sapo}</Text>
                  </Body>
                </ListItem>
              )}
            />
          </List>
        </View>
        <ViewFeatured props={this.props.props.dataHomeStream ? (this.props.props.dataHomeStream.featuredStories ? this.props.props.dataHomeStream.featuredStories : [] ) : []} />
        <View style={{flex: 1 }}>
          <List>
            <FlatList
              data={this.props.props.dataHomeStream ? (this.props.props.dataHomeStream.secondHomeStream ? this.props.props.dataHomeStream.secondHomeStream : [] ) : []}
              keyExtractor={(item) => item.title}
              // onEndReached={this.onEndReached.bind(this)}
              // onEndReachedThreshold={0.5}
              renderItem={({ item, index }) => (
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail square  source={{ uri: 'https://img.gurugamer.com/crop/218x143/2019/03/05/tyler-ninja-blevins-fortnite-interview-4186.jpg' }} />
                  </Left>
                  <Body>
                    <Text note numberOfLines={2}>{item.title}</Text>
                    <Text note numberOfLines={1}>{item.sapo}</Text>
                  </Body>
                </ListItem>
              )}
            />
          </List>
        </View> 
      </View>
    )
  }
}