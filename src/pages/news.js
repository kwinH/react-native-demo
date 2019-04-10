import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';


export default class DetailsScreen extends React.Component {

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
      </View>
    );

  }
}