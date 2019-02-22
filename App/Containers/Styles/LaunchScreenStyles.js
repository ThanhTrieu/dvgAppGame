import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    // marginTop: Metrics.doubleSection,
    marginLeft: Metrics.doubleSectionLogo,
    height: Metrics.images.logoGame,
    width: Metrics.images.logoGame,
    resizeMode: 'contain'
  },
  logoMenu:{
    height: Metrics.images.logoGame,
    width: Metrics.images.logoGame,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  topHeader: {
    backgroundColor: '#efefef',
    alignItems: 'center',
    // height:52
  },
  iconHeader: {
    marginLeft: 10
  },
  bottomHeader: {
    backgroundColor: '#222222',
    // marginTop:52
  },
  bottomHeaderMenu: {
    backgroundColor: '#222222',
  }
})
