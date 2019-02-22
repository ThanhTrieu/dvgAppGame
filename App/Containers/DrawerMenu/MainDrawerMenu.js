import React, { Component } from 'react';
import { Image, TouchableOpacity, ScrollView  } from 'react-native';
import { Images } from '../../Themes';

import { Container, Content, Header, Button, Body, Icon, Left, List, ListItem, Text } from 'native-base';

// Styles
import styles from '../../Containers/Styles/LaunchScreenStyles';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

export default class MainDrawerMenu extends Component {
  render() {
    return (
			<ScrollView>
				<Container>
					<Header style={styles.topHeader}>
						<Body>
							<Button transparent>
								<IconFontAwesome style={styles.iconHeader} name='facebook-official' size={40} color='#4267B2' />
								<IconFontAwesome style={styles.iconHeader} name='google-plus-square' size={40} color='#AB8B5C' />
								<IconFontAwesome style={styles.iconHeader} name='youtube-square' size={40} color='#915D50' />
							</Button>
						</Body>
					</Header>
					<Header style={styles.bottomHeaderMenu}>
						<Left>
							<Button transparent>
								<TouchableOpacity onPress={()=>this.props.navigation.closeDrawer()}>
									<Icon name='close' />
								</TouchableOpacity>
							</Button>
						</Left>
						<Body>
							<Image source={Images.logoGame} style={styles.logoMenu} />
						</Body>
					</Header>
					<Content>
						<List>                   
							<ListItem>
								<Text>Aaron Bennet</Text>
							</ListItem>
							<ListItem>
								<Text>Ali Connors</Text>
							</ListItem>  
							<ListItem>
								<Text>Bradley Horowitz</Text>
							</ListItem>
						</List>
					</Content>
				</Container>
			</ScrollView>
    );
  }
}