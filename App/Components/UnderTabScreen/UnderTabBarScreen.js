import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import { Images } from '../../Themes';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from 'react-native-underline-tabbar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    // margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 28,
  },
});

const Page = ({label, text = ''}) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      {label}
    </Text>
    {/* <Text style={styles.instructions}>
      {text}
    </Text> */}
  </View>
);

const Tab = ({ tab, page, isTabActive, onPressHandler, onTabLayout, styles }) => {
  const { label, icon } = tab;
  const style = {
    marginHorizontal: 20,
    paddingVertical: 10,
  };
  const containerStyle = {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: styles.backgroundColor,
    opacity: styles.opacity,
    transform: [{ scale: styles.opacity }],
  };
  const textStyle = {
    color: styles.textColor,
    fontWeight: '600',
  };
  const iconStyle = {
    tintColor: styles.textColor,
    resizeMode: 'contain',
    width: 22,
    height: 22,
    marginLeft: 10,
  };
  return (
    <TouchableOpacity style={style} onPress={onPressHandler} onLayout={onTabLayout} key={page}>
      <Animated.View style={containerStyle}>
        <Animated.Text style={textStyle}>{label}</Animated.Text>
        <Animated.Image style={iconStyle} source={icon} />
      </Animated.View>
    </TouchableOpacity>
  );
};

class UnderTabBarScreen extends Component {
  _scrollX = new Animated.Value(0);
  // 6 is a quantity of tabs
  interpolators = Array.from({ length: 6 }, (_, i) => i).map(idx => ({
    scale: this._scrollX.interpolate({
      inputRange: [idx - 1, idx, idx + 1],
      outputRange: [1, 1.2, 1],
      extrapolate: 'clamp',
    }),
    opacity: this._scrollX.interpolate({
      inputRange: [idx - 1, idx, idx + 1],
      outputRange: [0.9, 1, 0.9],
      extrapolate: 'clamp',
    }),
    textColor: this._scrollX.interpolate({
      inputRange: [idx - 1, idx, idx + 1],
      outputRange: ['#000', '#fff', '#000'],
    }),
    backgroundColor: this._scrollX.interpolate({
      inputRange: [idx - 1, idx, idx + 1],
      outputRange: ['rgba(0,0,0,0.1)', '#000', 'rgba(0,0,0,0.1)'],
      extrapolate: 'clamp',
    }),
  }));
  render() {
    return (
      <View style={[styles.container]}>
        <ScrollableTabView
          renderTabBar={() => (
            <TabBar
              underlineColor="#000"
              tabBarStyle={{ backgroundColor: "#fff", borderTopColor: '#d2d2d2', borderTopWidth: 1 }}
              renderTab={(tab, page, isTabActive, onPressHandler, onTabLayout) => (
                <Tab
                  key={page}
                  tab={tab}
                  page={page}
                  isTabActive={isTabActive}
                  onPressHandler={onPressHandler}
                  onTabLayout={onTabLayout}
                  styles={this.interpolators[page]}
                />
              )}
            />
          )}
          onScroll={(x) => this._scrollX.setValue(x)}
        >
          <Page tabLabel={{label: "Hot", icon: Images.hot}} />
          <Page tabLabel={{label: "Trending", icon: Images.trending}} />
          <Page tabLabel={{label: "Fresh", icon: Images.fresh}} />
          <Page tabLabel={{label: "Funny", icon: Images.funny}} />
          <Page tabLabel={{label: "Movie & TV", icon: Images.movieAndTv}} />
          <Page tabLabel={{label: "Sport", icon: Images.sport}} />
        </ScrollableTabView>
      </View>
    );
  }
}

export default UnderTabBarScreen;