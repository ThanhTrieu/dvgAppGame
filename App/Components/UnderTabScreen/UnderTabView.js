import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import TabBar from "react-native-underline-tabbar"
import HomePageScreen from '../../Containers/HomeGameScreen'
import CategoriesScreen from '../../Containers/CategoriesScreen'
import { Content } from 'native-base'
import getTopCateDataActions from '../../Redux/CatTopGameRedux'
import { createStructuredSelector } from 'reselect'
import { cateTopFocusSelector, loadingCateTopFocus } from '../../Reselect/CatTopGameReselect'

const Page = (props) => {
  if(props.label === 'home'){
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
  return(
    <Content>
      <CategoriesScreen
        navigation={props.navigation}
        dataTopFocusCate={props.dataTopFocusCate}
        nameCate={props.label}
      />
    </Content>
  )
}

class UnderTabView extends Component {
  constructor(props){
    super(props)
  }

  _onChangeTab = (index) => {
    switch(index) {
      case 1:
        this.props.getDataTopCateBySlug('esports');
        break;
      case 2:
        this.props.getDataTopCateBySlug('mobile-games');
        break;
      case 3:
        this.props.getDataTopCateBySlug('pc-console');
        break;
      case 4:
        this.props.getDataTopCateBySlug('features');
        break;
      // case 5:
      //   this.props.getDataTopCateBySlug('videos');
      //   break;
    }
  }

  render() {
    //console.log(this.props.dataTopFocusCate)
    return (
      <View style={[styles.container]}>
        <ScrollableTabView
          tabBarActiveTextColor="#53ac49"
          onChangeTab={(index)=>this._onChangeTab(index)}
          onScroll={(index)=>this._onChangeTab(index)}
          renderTabBar={() => <TabBar underlineColor="#53ac49" />}
        >
          <Page 
            tabLabel={{label: "Home"}} 
            label="home"
            fetching={this.props.fetching} 
            dataTopFocus={this.props.dataTopFocus} 
            dataTopGameTag={this.props.dataTopGameTag}  
            navigation={this.props.navigation}
          />
          <Page 
            tabLabel={{label: "Esports"}} 
            label="esports"
            dataTopFocusCate={this.props.dataTopFocusCate}
            loadingCate={this.props.loadingCate}
            navigation={this.props.navigation}
          />
          <Page 
            tabLabel={{label: "Mobile games"}} 
            label="mobile-games"
            dataTopFocusCate={this.props.dataTopFocusCate}
            loadingCate={this.props.loadingCate}
            navigation={this.props.navigation}
          />
          <Page 
            tabLabel={{label: "PC/Console"}} 
            label="pc-console"
            dataTopFocusCate={this.props.dataTopFocusCate}
            loadingCate={this.props.loadingCate}
            navigation={this.props.navigation}
          />
          <Page 
            tabLabel={{label: "Featured"}} 
            label="features"
            dataTopFocusCate={this.props.dataTopFocusCate}
            loadingCate={this.props.loadingCate}
            navigation={this.props.navigation}
          />
          {/* <Page tabLabel={{label: "Videos"}} label="videos"/> */}
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})

const mapStateToProps = createStructuredSelector({
  loadingCate: loadingCateTopFocus(),
  dataTopFocusCate: cateTopFocusSelector(),
})

const mapDispatchToProps = (dispatch) => {
  return {
    getDataTopCateBySlug: (slug) => dispatch(getTopCateDataActions.getDataRequestCats(slug))
  }
}

UnderTabView.propTypes = {
  dispatch: PropTypes.func,
  loadingCate: PropTypes.bool,
  getDataTopCateBySlug: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(UnderTabView)