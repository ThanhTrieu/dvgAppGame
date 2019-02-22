import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { 
  Container, 
  Tab, 
  Tabs, 
  ScrollableTab,
  Text,
  Content
} from 'native-base';


export default class TabsBar extends Component {
  render() {
    return (
      <View style={{backgroundColor:'#ccc'}}>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="Tab1">
            <View><Text>Tab1</Text></View>
          </Tab>
          <Tab heading="Tab2">
            <View><Text>Tab2</Text></View>
          </Tab>
          <Tab heading="Tab3">
            <View><Text>Tab3</Text></View>
          </Tab>
          <Tab heading="Tab4">
            <View><Text>Tab4</Text></View>
          </Tab>
          <Tab heading="Tab5">
            <View><Text>Tab5</Text></View>
          </Tab>
        </Tabs>
      </View>
    );
  }
}