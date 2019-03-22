//This is an example of React Native 
//FlatList Pagination to Load More Data dynamically - Infinite List
import React, { Component } from 'react';
//import react in our code.
import withUnmounted from '@ishawnwang/withunmounted'
import Image from 'react-native-scalable-image'
import styles from '../Styles/HomeScreen/HomeStreamStyle'

import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
//import all the components we are going to use.

import jwt from 'react-native-jwt-io'

const SERECT_KEY = 'dvg-react-native-v1';
const tokenJwt = jwt.encode(
  {
    iss: 'nguyenthanhtrieu90@gmail.com',
    exp: new Date().getTime() + 3600, // expiration date, required, in ms, absolute to 1/1/1970
    additional: 'payload',
  },
  SERECT_KEY
)

class HomePaging extends Component {
  _isMounted = false;
  constructor() {
    super();
    this.state = {
      loading: true,
      //Loading state used while loading the data for the first time
      serverData: [],
      //Data Source for the FlatList
      fetching_from_server: false,
      //Loading state used while loading more data
    };
    this.offset = 1;
    //Index of the offset to load from web API
  }

  componentDidMount() {
    this._isMounted = true;
    fetch('http://10.0.2.2:8000/api/v1/home-stream-game?page=' + this.offset,{
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache',
        'Authorization': tokenJwt
      }
    })
    //Sending the currect offset with get request
      .then(response => response.json())
      .then(responseJson => {
      //Successful response from the API Call 
        this.offset = this.offset + 1;
        //After the response increasing the offset for the next API call.
        if (this._isMounted) {
          this.setState({
            serverData: [...this.state.serverData, ...responseJson.results],
            //adding the new data with old one available in Data Source of the List
            loading: false,
            //updating the loading state to false
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }


  loadMoreData = () => {
    this._isMounted = true;
  //On click of Load More button We will call the web API again
    this.setState({ fetching_from_server: true }, () => {
      fetch('http://10.0.2.2:8000/api/v1/home-stream-game?page=' + this.offset,{
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache',
          'Authorization': tokenJwt
        }
      })
      //Sending the currect offset with get request
        .then(response => response.json())
        .then(responseJson => {
        //Successful response from the API Call 
          this.offset = this.offset + 1;
          //After the response increasing the offset for the next API call.
          if (this._isMounted) {
            this.setState({
              serverData: [...this.state.serverData, ...responseJson.results],
              //adding the new data with old one available
              fetching_from_server: false,
              //updating the loading state to false
            });
          }
        })
        .catch(error => {
          console.error(error);
        });
    });
  };

  render() {
    const navigation = this.props.navigation
    return (
      <View style={styles.container}>
        {this.state.loading ? (
          <ActivityIndicator size="large" animating />
        ) : (
          <FlatList
            style={{ width: '100%' }}
            keyExtractor={(item, index) => index.toString()}
            data={this.state.serverData}
            onEndReached={()=>this.loadMoreData()}
            onEndReachedThreshold={0.5}
            renderItem={({ item, index }) => (
              <View >
                { item.focus_status == 1 ? (
                  <TouchableOpacity style={styles.listItem} onPress={()=>navigation.navigate('Detail',{postId: item.post_id})}>
                    <View>
                      <Image
                        width={Dimensions.get('window').width/3}
                        source={{ uri: 'https://img.gurugamer.com/crop/218x143/2019/03/05/tyler-ninja-blevins-fortnite-interview-4186.jpg' }}
                      />
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.title} note numberOfLines={2}>
                        {item.title}
                      </Text>
                      <Text style={styles.subtitle} note numberOfLines={3}>
                        {item.sapo}
                      </Text>
                    </View>
                  </TouchableOpacity>) : (
                  <TouchableOpacity style={styles.frearuted} onPress={()=>navigation.navigate('Detail',{postId: item.post_id})}>
                    <View style={{flex: 1}}>
                      <Image
                        width={Dimensions.get('window').width}
                        source={{ uri: 'https://img.gurugamer.com/crop/450x268/2019/02/21/maxresdefault-1-14e8.jpg' }}
                      />
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.title} note numberOfLines={2}>
                        {item.title}
                      </Text>
                      <Text style={styles.subtitle} note numberOfLines={3}>
                        {item.sapo}
                      </Text>
                    </View>
                  </TouchableOpacity>)
                }
              </View>
            )}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            ListFooterComponent={() => 
              <ActivityIndicator size="large" animating />
            }
          />
        )}
      </View>
    );
  }
}

export default withUnmounted(HomePaging);
