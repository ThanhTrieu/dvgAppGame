import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

// components
import HeaderPage from '../Components/HeaderPage';
//import TabsBar from '../Components/TabsBar';
import HomePageScreen from './HomeGameScreen';
import { Container } from 'native-base';
import getTopPostsInGroupBoxActions from '../Redux/HomeTopFocusRedux';
import getTopGameByTagsActions from '../Redux/HomeTopGameTagRedux';
import WelcomeLoading from '../Components/WelcomeScreen';

class LaunchScreen extends Component {

  componentDidMount() {
    this.props.getDataTopFocus(1,3);
    this.props.getDataTopGameTag(1,5);
  }

  render () {
    if(!this.props.fetching || !this.props.loadingTagGame){
      return (
        <Container>
          <HeaderPage navigation={this.props.navigation} />
          <HomePageScreen 
            fetching={this.props.fetching} 
            dataTopFocus={this.props.dataTopFocus} 
            getDataTopFocus={this.props.getDataTopFocus} 
            loadingTagGame={this.props.loadingTagGame} 
            getDataTopGameTag={this.props.getDataTopGameTag}
            dataTopGameTag={this.props.dataTopGameTag}  
          />
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
    dataTopFocus: state.topGroupBox.data,
    loadingTagGame: state.topGameTag.fetchingTagGame,
    dataTopGameTag: state.topGameTag.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDataTopFocus: (idGroupBox, limit) => dispatch(getTopPostsInGroupBoxActions.getDataRequest(idGroupBox, limit)),

    getDataTopGameTag: (idGroupBox, limit) => dispatch(getTopGameByTagsActions.getDataRequestTags(idGroupBox, limit))
  }
};

LaunchScreen.propTypes = {
  dispatch: PropTypes.func,
  fetching: PropTypes.bool,
  getDataTopFocus: PropTypes.func,
  dataTopFocus: PropTypes.object,
  getDataTopGameTag: PropTypes.func,
  dataTopGameTag: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
