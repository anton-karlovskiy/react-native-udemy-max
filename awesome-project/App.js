/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

class App extends Component {
  state = {
    placeName: ""
  };

  placeNameChangeHandler = val => {
    this.setState({placeName: val});
  };

  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={{width: 300, borderColor: "black", borderWidth: 1}}
          value={this.state.placeName}
          onChangeText={this.placeNameChangeHandler} />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
