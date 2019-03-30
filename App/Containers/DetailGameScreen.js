import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { View, Platform, Text, TouchableOpacity, StyleSheet, Dimensions, Linking } from 'react-native'
//import { WebView } from 'react-native-webview'
import { CollapsibleHeaderScrollView } from 'react-native-collapsible-header-views'
import getDataDetailNewsActions from '../Redux/DetailGameRedux'
import WelcomeLoading from '../Components/WelcomeScreen'
import { createStructuredSelector } from 'reselect'
import { detailNewsSelector, loadingDetailNews } from '../Reselect/DetailNewsReselect'
import HTMLView from 'react-native-htmlview'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const TitleDetailGame = (props) => (
  <View style={{ backgroundColor: '#F6F6F6', flex:1, flexDirection:'row' }}>
    <TouchableOpacity onPress={() => props.navigation.goBack()}>
      <View style={{paddingLeft: 10, paddingTop: 10}}>
        <MaterialIcons name="arrow-back" size={20} />
      </View>
    </TouchableOpacity>
    <View>
      <Text style={{flex:1, flexWrap:'wrap',fontWeight:'bold', fontSize: 16, paddingLeft: 15, paddingTop: 10}}>{props.nameTitle}</Text>
    </View>
  </View>
)

function renderNode(node, index, siblings, parent, defaultRenderer) {
  const nameNode = node.name;
  if(nameNode == 'a'){
    return (
      <Text key={index} style={{color: 'blue', textDecorationStyle:'solid'}}>
        {defaultRenderer(node.children, parent)}
      </Text>
    );
  }
}

const handleClick = (url) => {
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      Linking.openURL(url);
    } else {
      console.log(`Don't know how to open URI: ${url}`);
    }
  });
};


const HeaderScroll = (props) => {
  return(
  <CollapsibleHeaderScrollView
    CollapsibleHeaderComponent={<TitleDetailGame nameTitle={props.dataDetail.title} navigation={props.navigation} />}
    headerHeight={54}
    statusBarHeight={Platform.OS === 'ios' ? 20 : 0}
  >
    <View style={{paddingLeft: 10, paddingTop:5, backgroundColor:'white'}}>
      <HTMLView
        value={props.dataDetail.content_mobile}
        renderNode={renderNode}
        stylesheet={styles}
        onLinkPress={(url) => handleClick(url)}
      />
    </View>
  </CollapsibleHeaderScrollView>
  )
}

class DetailGameScreen extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    const {state} = this.props.navigation
    const id = state.params ? state.params.postId : 0
    this.props.getDataDetailNews(id)
  }

  render() {
    if(!this.props.fetching && this.props.dataDetail){
      return(
        <HeaderScroll dataDetail={this.props.dataDetail} navigation={this.props.navigation} />
      )
    } else {
      return(
        <WelcomeLoading />
      )
    }
    
  }
}

const mapStateToProps = createStructuredSelector({
  fetching: loadingDetailNews(),
  dataDetail: detailNewsSelector(),
})

// const mapStateToProps = (state) => {
//   return {
//     fetching: state.detailNews.loadingDetail,
//     dataDetail: state.detailNews.data
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    getDataDetailNews: (idPost) => dispatch(getDataDetailNewsActions.getDataRequestDetail(idPost))
  }
}

DetailGameScreen.propTypes = {
  dispatch: PropTypes.func,
  fetching: PropTypes.bool,
  getDataDetailNews: PropTypes.func
}

const styles = StyleSheet.create({
  img: {
    width: Dimensions.get('window').width
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailGameScreen)
