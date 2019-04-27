import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import PTRView from 'react-native-pull-to-refresh'
// components
import HeaderPage from '../Components/HeaderPage'
import TabsBar from '../Components/UnderTabScreen/UnderTabView'
import { Container, Content } from 'native-base'
import getTopPostsInGroupBoxActions from '../Redux/HomeTopFocusRedux'
import getTopGameByTagsActions from '../Redux/HomeTopGameTagRedux'
import WelcomeLoading from '../Components/WelcomeScreen'
import { createStructuredSelector } from 'reselect'
import { 
  homeTopFocusSelector,
  loadingHomeTopFocus
} from '../Reselect/HomeTopFocusReselect'
import {
  homeTopGameSelector,
  loadingHomeTopGame
} from '../Reselect/HomeTopGameReselect'

class LaunchScreen extends Component {
  constructor(props){
    super(props)
  }

  _refresh() {
    this.props.getDataTopFocus(1,3)
    this.props.getDataTopGameTag(1,5)
  }

  componentDidMount() {
    this.props.getDataTopFocus(1,3)
    this.props.getDataTopGameTag(1,5)
  }

  render () {
    if(!this.props.fetching && !this.props.loadingTagGame){
      return (
        <PTRView onRefresh={()=>this._refresh()} >
          <Container>
            <HeaderPage navigation={this.props.navigation} />
            <TabsBar
              fetching={this.props.fetching} 
              dataTopFocus={this.props.dataTopFocus} 
              dataTopGameTag={this.props.dataTopGameTag}  
              navigation={this.props.navigation}
            /> 
          </Container>
        </PTRView>
      )
    } else {
      return(
        <WelcomeLoading />
      )
    }
  }
}

const mapStateToProps = createStructuredSelector({
  fetching: loadingHomeTopFocus(),
  dataTopFocus: homeTopFocusSelector(),
  loadingTagGame: loadingHomeTopGame(),
  dataTopGameTag: homeTopGameSelector()
})

const mapDispatchToProps = (dispatch) => {
  return {
    getDataTopFocus: (idGroupBox, limit) => dispatch(getTopPostsInGroupBoxActions.getDataRequest(idGroupBox, limit)),

    getDataTopGameTag: (idGroupBox, limit) => dispatch(getTopGameByTagsActions.getDataRequestTags(idGroupBox, limit))
  }
}

LaunchScreen.propTypes = {
  dispatch: PropTypes.func,
  fetching: PropTypes.bool,
  getDataTopFocus: PropTypes.func,
  getDataTopGameTag: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
