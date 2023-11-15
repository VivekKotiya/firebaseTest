/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { 
  getPosts, putPost, updatePost, getAxiosRequest, postAxiosRequest,
  putAxiosRequest, patchAxiosRequest,
} from './src/platform';

const App = () => {
  const getApiCall = (number = 0) => {
    switch(number){
      case 1:
        updatePost();
        break;
      case 2:
        putPost();
        break;
      case 3:
        getAxiosRequest();
        break;
      case 4:
        postAxiosRequest({
          title: "foo",
          body: "bar",
          id: 1,
        });
        break;
      case 5: 
        putAxiosRequest(100, { title: 'abc'});
        break;
      case 6:
        patchAxiosRequest(100, { title: 'hello'})
      case 0:
      default: 
        getPosts(1);
    }
  }

  
  return (
    <SafeAreaView>
      <View style={{justifyContent:'center', alignItems:'center', margin:20}}><Text>Welcome to App</Text></View>
      <Button title='Get Post' onPress={() => getApiCall(0)}/>
      <Button title='update Post' onPress={() => getApiCall(1)}/>
      <Button title='Add Post' onPress={() => getApiCall(2)}/>
      <Button title='Get Axios request' onPress={() => getApiCall(3)}/>
      <Button title='Post Axios request' onPress={() => getApiCall(4)}/>
      <Button title='Put Axios request' onPress={() => getApiCall(5)}/>
      <Button title='patch Axios request' onPress={() => getApiCall(6)}/>
    </SafeAreaView>
  );
}

export default App;
