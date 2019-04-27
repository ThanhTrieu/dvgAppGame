import * as React from 'react'
import { View, Text } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import MaskTabBar from 'react-native-scrollable-tab-view-mask-bar'


const ReactPage = () => {
  return(
    <View>
      <Text>AAAA</Text>
    </View>
  );
}

const FlowPage = () => {
  return(
    <View>
      <Text>BBBBB</Text>
    </View>
  );
}

const JestPage = () => {
  return(
    <View>
      <Text>CCCC</Text>
    </View>
  );
}

export default class ScrollTabView extends  React.Component {
  render(){
    return(
      <ScrollableTabView renderTabBar={() => <MaskTabBar showMask={true} maskMode='light' />}>
        <ReactPage tabLabel="React" />
        <FlowPage tabLabel="Flow" />
        <JestPage tabLabel="Jest" />
      </ScrollableTabView>
    )
  }
}