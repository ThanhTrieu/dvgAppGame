import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text, Content, Col, Row, Grid  } from 'native-base';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5';

export default class SearchDrawerMenu extends Component {
  constructor(props){
    super(props);
  }

  backToHomePage = () => {
    this.props.navigation.navigate('Home');
  }
  render() {
    //console.log(this.props);
    return (
      <Container>
        <Header searchBar rounded style={{backgroundColor: '#ccc'}}>
            <Item>
              <Button transparent>
                <TouchableOpacity onPress={ ()=>this.backToHomePage() }>
                  <IconFontAwesome name="arrow-left" size={18} style={{marginLeft:5}} />
                </TouchableOpacity>
              </Button>
              <Button transparent>
                <Icon name="ios-search" />
              </Button>
              <Input placeholder="Search" />
              <Button transparent>
                <Icon name="ios-close" />
              </Button>
            </Item>
        </Header>
        <Content></Content>
      </Container>
    );
  }
}