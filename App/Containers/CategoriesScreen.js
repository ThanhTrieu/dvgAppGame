import React, { Component } from 'react'
import { View } from 'react-native'
import HotTopCategoriesNews from '../Components/CategorieScreen/TopFocusCateGame'
import ListCateStreams from '../Components/CategorieScreen/ListCateStream'

class CategoriesScreen extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View>
        <HotTopCategoriesNews 
          props={this.props}
          navigation={this.props.navigation}
        />
        <ListCateStreams 
          navigation={this.props.navigation}
          labelCate={this.props.nameCate}
        />
      </View>
    )
  }
}

export default CategoriesScreen