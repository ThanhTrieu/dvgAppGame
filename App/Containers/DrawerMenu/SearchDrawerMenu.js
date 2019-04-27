import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'
import { Container, Header, Item, Input, Icon, Button, Text, Content, Col, Row, Grid  } from 'native-base'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5'
import getDataSearchActions from '../../Redux/CustomSearchRedux'


class SearchDrawerMenu extends Component {
  constructor(props){
    super(props)
    this.state = {keyword: ''}
  }

  backToHomePage = () => {
    this.props.navigation.navigate('Home');
  }

  handleChangeKeyword = (text) => {
    this.setState({ keyword: text })
  }

  handleSearchByKeyword = (key) => {
    this.props.getDataSearch(key)
  } 

  render() {
    console.log(this.props)
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
                <TouchableOpacity onPress={ ()=>this.handleSearchByKeyword(this.state.keyword) }>
                  <Icon name="ios-search" />
                </TouchableOpacity>
              </Button>
              <Input
                placeholder="Search"
                onChangeText={(text) => this.handleChangeKeyword(text)}
              />
              <Button transparent>
                <Icon name="ios-close" />
              </Button>
            </Item>
        </Header>
        <Content>

        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listDataSearch: state.searchGames.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDataSearch: (keyword) => dispatch(getDataSearchActions.search(keyword))
  }
}

SearchDrawerMenu.propTypes = {
  dispatch: PropTypes.func,
  getDataSearch: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchDrawerMenu)