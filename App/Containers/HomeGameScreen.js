import React, { Component } from 'react'
import { ScrollView  } from 'react-native'

// components
import HotTopNews from '../Components/HomeScreen/HotTopNews'
import TopGame from '../Components/HomeScreen/TopGame'
//import Homestreaming from '../Components/HomeScreen/HomeStream'
import Homestreaming from '../Components/HomeScreen/ListViewHomeStream'


const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 20;
  return layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom;
};

export default class HomeGameScreen extends Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
      <ScrollView
        // onScroll={({nativeEvent}) => {
        //   if (isCloseToBottom(nativeEvent)) {
        //     //this.loadMoreDataSync();
        //     console.log('AAAA')
        //   }
        // }}
        // scrollEventThrottle={400}
      > 
        <HotTopNews props={this.props} />
        <TopGame props={this.props} />
        <Homestreaming props={this.props} />
      </ScrollView>
    )
  }
}
