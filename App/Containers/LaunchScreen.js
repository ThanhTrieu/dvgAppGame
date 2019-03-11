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
import getDataHomeStreamingActions from '../Redux/HomeStreamRedux'
import WelcomeLoading from '../Components/WelcomeScreen';

const date = new Date();
const time = date.getTime();

class LaunchScreen extends Component {

  constructor(props){
    super(props);
    this.state= {
      time: time
    }
  }

  componentDidMount() {
    
    this.props.dataTopFocus   = this.props.getDataTopFocus(1,3);
    this.props.dataTopGameTag = this.props.getDataTopGameTag(1,5);
    this.props.dataHomeStream = this.props.getdataHomeStreamByTime(this.state.time,null);
  }

  render () {
    if(!this.props.fetching || !this.props.loadingTagGame){
      return (
        <Container>
          <HeaderPage navigation={this.props.navigation} />
          <HomePageScreen 
            fetching={this.props.fetching} 
            dataTopFocus={this.props.dataTopFocus} 
            dataTopGameTag={this.props.dataTopGameTag}  
            dataHomeStream={this.props.dataHomeStream}
            getMoreHomeStream={this.props.getdataHomeStreamByTime}
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
    dataHomeStream: state.homeStream.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDataTopFocus: (idGroupBox, limit) => dispatch(getTopPostsInGroupBoxActions.getDataRequest(idGroupBox, limit)),

    getDataTopGameTag: (idGroupBox, limit) => dispatch(getTopGameByTagsActions.getDataRequestTags(idGroupBox, limit)),

    getdataHomeStreamByTime: (time, postids) => dispatch(getDataHomeStreamingActions.getHomeStreamRequest(time, postids)),
  }
};

LaunchScreen.propTypes = {
  dispatch: PropTypes.func,
  fetching: PropTypes.bool,
  getDataTopFocus: PropTypes.func,
  dataTopFocus: PropTypes.object,
  //dataHomeStream: PropTypes.array,
  getDataTopGameTag: PropTypes.func,
  dataTopGameTag: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
