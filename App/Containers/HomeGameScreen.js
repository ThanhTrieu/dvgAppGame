import React, { Component } from 'react'
import { ScrollView  } from 'react-native'

// components
import HotTopNews from '../Components/HomeScreen/HotTopNews'
import TopGame from '../Components/HomeScreen/TopGame'
import HomeStream from '../Components/HomeScreen/HomeStream'

export default class HomeGameScreen extends Component {
  constructor(props){
    super(props);
  }

  render () {
    //console.log(this.props)
    return (
      <ScrollView> 
        <HotTopNews props={this.props} />
        <TopGame props={this.props} />
        {/* <HomeStream props={this.props} /> */}
      </ScrollView>
    )
  }
}
