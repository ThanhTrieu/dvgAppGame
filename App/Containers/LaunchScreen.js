import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// components
import HeaderPage from '../Components/HeaderPage'
//import TabsBar from '../Components/TabsBar'
import HomePageScreen from './HomeGameScreen'
import { Container, Content } from 'native-base'
import getTopPostsInGroupBoxActions from '../Redux/HomeTopFocusRedux'
import getTopGameByTagsActions from '../Redux/HomeTopGameTagRedux'
import WelcomeLoading from '../Components/WelcomeScreen'
import { 
  homeTopFocusSelector,
  loadingHomeTopFocus
} from '../Reselect/HomeTopFocusReselect'
import {
  homeTopGameSelector,
  loadingHomeTopGame
} from '../Reselect/HomeTopGameReselect'

const date = new Date()
const time = date.getTime()

class LaunchScreen extends Component {
  constructor(props){
    super(props)
    this.state= {
      time: time
    }
  }

  componentDidMount() {
    this.props.getDataTopFocus(1,3)
    this.props.getDataTopGameTag(1,5)
  }

  render () {
    console.log(this.props.dataTopFocus)
    if(!this.props.fetching || !this.props.loadingTagGame){
      return (
        <Container>
          <HeaderPage navigation={this.props.navigation} />
          <Content>
            <HomePageScreen 
              fetching={this.props.fetching} 
              dataTopFocus={this.props.dataTopFocus} 
              dataTopGameTag={this.props.dataTopGameTag}  
              dataHomeStream={this.props.dataHomeStream}
              getMoreHomeStream={this.props.getdataHomeStreamByTime}
              navigation={this.props.navigation}
            />
          </Content>
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
  return {
    fetching: loadingHomeTopFocus(state),
    dataTopFocus: homeTopFocusSelector(state),
    loadingTagGame: loadingHomeTopGame(state),
    dataTopGameTag: homeTopGameSelector(state)
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
  //dataTopFocus: PropTypes.array,
  getDataTopGameTag: PropTypes.func,
  dataTopGameTag: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
