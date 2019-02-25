import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { View } from 'react-native';
// components
import HeaderPage from '../Components/HeaderPage';
//import TabsBar from '../Components/TabsBar';
import HomePageScreen from './HomeGameScreen';
import { Container } from 'native-base';
import getTopPostsInGroupBoxActions from '../Redux/HomeTopFocusRedux';

class LaunchScreen extends Component {
  render () {
    //console.log(this.props)
    return (
      <Container>
        <HeaderPage navigation={this.props.navigation} />
        <HomePageScreen fetching={this.props.fetching} getDataTopFocus={this.props.getDataTopFocus} />
        {/* <TabsBar /> */}
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  //console.log(state)
  return {
    fetching: state.topGroupBox.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDataTopFocus: (idGroupBox, limit) => dispatch(getTopPostsInGroupBoxActions.getDataRequest(idGroupBox, limit))
  }
}

LaunchScreen.propTypes = {
  dispatch: PropTypes.func,
  fetching: PropTypes.bool,
  attemptGetDataTopFocus: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
