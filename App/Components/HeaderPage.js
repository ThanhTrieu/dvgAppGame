import React, { Component } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Images } from '../Themes';
import { Container, Header, Button, Left, Right, Body, Icon, Content } from 'native-base';
// Styles
import styles from '../Containers/Styles/LaunchScreenStyles';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import Tabs from '../Components/TabsBar';

export default class HeaderPage extends Component {
	constructor(props){
    super(props)
  }
	openDrawerLeftMenu = () => {
		this.props.navigation.openDrawer();
	}
	openDrawerRightMenu = () => {
		this.props.navigation.navigate('Search');
	}
	render () {
		//console.log(this.props);
		return (
			<View>
				{/* <Header style={styles.topHeader}>
					<Body>
						<Button transparent>
							<IconFontAwesome style={styles.iconHeader} name='facebook-official' size={40} color='#4267B2' />
							<IconFontAwesome style={styles.iconHeader} name='google-plus-square' size={40} color='#AB8B5C' />
							<IconFontAwesome style={styles.iconHeader} name='youtube-square' size={40} color='#915D50' />
						</Button>
					</Body>
				</Header> */}
				<Header style={styles.bottomHeader}>
					<Left>
						<Button transparent>
							<TouchableOpacity onPress={()=>this.openDrawerLeftMenu()}>
								<Icon name='menu' size={50} />
							</TouchableOpacity>
						</Button>
					</Left>
					<Body>
						<TouchableOpacity>
							<Image source={Images.logoGame} style={styles.logo} />
						</TouchableOpacity>
					</Body>
					<Right>
						<Button transparent>
							<TouchableOpacity onPress={()=>this.openDrawerRightMenu()}>
								<Icon name='search' />
							</TouchableOpacity>
						</Button>
					</Right>
				</Header>
			</View>
		)
	}
}