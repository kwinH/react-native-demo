import React from 'react';
import { Text, View, Button } from 'react-native';


// 定义一个标题
class LogoTitle extends React.Component {
  render() {
    return (
      <Text style={{ flex: 1, fontSize: 30, color: 'green', textAlign: 'center' }}>
        标题
        </Text>
    );
  }
}



export default class MyHome extends React.Component {
  static navigationOptions = {
    // title: 'Home',
    headerTitle: <LogoTitle />,
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}