import React, { Component } from 'react'
import { View  } from 'react-native'

// components
import HotTopNews from '../Components/HomeScreen/HotTopNews'
import TopGame from '../Components/HomeScreen/TopGame'
import HomePaging from '../Components/HomeScreen/HomePagingFlatList'


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
      <View> 
        <HotTopNews props={this.props} />
        <TopGame props={this.props} />
        <HomePaging navigation={this.props.navigation} />
      </View>
    )
  }
}
