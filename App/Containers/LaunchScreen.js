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
import WelcomeLoading from '../Components/WelcomeScreen';

class LaunchScreen extends Component {
  render () {
    console.log(this.props)
    if(this.props.dataTopFocus){
      return (
        <Container>
          <HeaderPage navigation={this.props.navigation} />
          <HomePageScreen fetching={this.props.fetching} dataTopFocus={this.props.dataTopFocus} getDataTopFocus={this.props.getDataTopFocus} />
          {/* <TabsBar /> */}
        </Container>
      )
    } else {
      return(
        <WelcomeLoading />
      )
    }
  }
}

const mapStateToProps = (state) => {
  //console.log(state)
  return {
    fetching: state.topGroupBox.fetching,
    dataTopFocus: state.topGroupBox.data
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
  getDataTopFocus: PropTypes.func,
  dataTopFocus: PropTypes.object,
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
