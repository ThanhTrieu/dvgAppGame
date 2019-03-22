import React, { Component } from 'react'
import { View, Platform, Text } from 'react-native';
import { CollapsibleHeaderScrollView } from 'react-native-collapsible-header-views';

const HeaderScroll = ({ props }) => (
  <CollapsibleHeaderScrollView
    CollapsibleHeaderComponent={<View style={{ backgroundColor: '#F6F6F6' }} />}
    headerHeight={44}
    statusBarHeight={Platform.OS === 'ios' ? 20 : 0}
  >
    <View style={{ height: 2000, backgroundColor: 'wheat' }}>
      <Text>AAAAAAAA</Text>
    </View>
  </CollapsibleHeaderScrollView>
)

export default class DetailGameScreen extends Component {

  render() {
    return(
      <HeaderScroll />
    )
  }
}
