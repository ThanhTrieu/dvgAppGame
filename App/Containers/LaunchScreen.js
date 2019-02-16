import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'

import { Images } from '../Themes'

// import { Container, Header } from 'native-base';
// import { Col, Row, Grid } from 'react-native-easy-grid';

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              I love you .
            </Text>
          </View>

          <DevscreensButton />
        </ScrollView>
        {/* <Container>
          <Header />
            <Grid>
              <Col style={{ backgroundColor: '#635DB7', height: 200 }}></Col>
              <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
            </Grid>
        </Container> */}
      </View>
    )
  }
}
