import * as React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'
import HomePageScreen from '../../Containers/HomeGameScreen'
import { Content } from 'native-base'

const FirstRoute = (props) => {
  return(
    <Content>
      <HomePageScreen
        fetching={props.fetching} 
        dataTopFocus={props.dataTopFocus} 
        dataTopGameTag={props.dataTopGameTag}  
        navigation={props.navigation}
      />
    </Content>
  )
}

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
)

// This is our placeholder component for the tabs
// This will be rendered when a tab isn't loaded yet
// You could also customize it to render different content depending on the route
const LazyPlaceholder = ({ route }) => (
  <View style={styles.scene}>
    <Text>Loading {route.title}…</Text>
  </View>
)

export default class TabbarViewScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: 'home', title: 'Home' },
        { key: 'esport', title: 'Esports' },
        { key: 'mobile', title: 'Mobile games' },
        { key: 'pc', title: 'PC/Console' },
        { key: 'featured', title: 'Featured' },
        { key: 'video', title: 'Videos' },
      ],
    }
  }

  _handleIndexChange = index => this.setState({ index });

  _renderLazyPlaceholder = ({ route }) => <LazyPlaceholder route={route} />;

  render() {
    return (
      <TabView
        lazy={true}
        swipeEnabled={true}
        navigationState={this.state}
        renderScene={SceneMap({
          home: () => <FirstRoute 
                        fetching={this.props.fetching} 
                        dataTopFocus={this.props.dataTopFocus} 
                        dataTopGameTag={this.props.dataTopGameTag}  
                        navigation={this.props.navigation}
                      />,
          esport: SecondRoute,
        })}
        renderLazyPlaceholder={this._renderLazyPlaceholder}
        onIndexChange={this._handleIndexChange}
        initialLayout={{ width: Dimensions.get('window').width }}
        //style={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white'
  },
  scene: {
    flex: 1
  },
});
