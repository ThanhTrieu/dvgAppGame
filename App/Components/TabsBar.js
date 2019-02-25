import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { 
  Container, 
  Tab, 
  Tabs, 
  ScrollableTab,
  TabHeading,
  Text,
  Content,
  Icon
} from 'native-base';


export default class TabsBar extends Component {
  render() {
    return (
      <View>
        <Tabs transparent renderTabBar={()=> <ScrollableTab />}>
          <Tab  heading={ 
            <TabHeading style={{ backgroundColor: "#FFE6F0" }}><Icon name="home"/>
                <Text>Home</Text>
            </TabHeading>}
          >
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