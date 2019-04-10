/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import {createStackNavigator, createAppContainer,createBottomTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Touchables from './Touchables';
import PizzaTranslator from './PizzaTranslator';
import DetailsScreen1 from './DetailsScreen';

const instructions = Platform.select ({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class App extends Component<Props> {
  render () {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello, world!</Text>
        <Touchables />
        <PizzaTranslator />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


// 定义一个标题
class LogoTitle extends React.Component {
  render() {
    return (
      <Text style ={ {flex:1, fontSize:30,color:'green',textAlign:'center'}}>
      标题
      </Text>
    );
  }
}



class HomeScreen extends React.Component {
  static navigationOptions = {
   // title: 'Home',
   headerTitle:<LogoTitle/>,
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render () {
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

class DetailsScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    // 注意params是带大括号的
    const { params } = navigation.state;
    
    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
    }
  };



  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button 
          title = 'GO TO DETAIL AGAIN'
          onPress = {()=>this.props.navigation.navigate('Details')}         
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />

<Button
    title="Update the title"
    onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
  />

      </View>
    );
  }
}




const AppNavigator = createStackNavigator ({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },

} ,{
  initialRouteName: 'Home',
  /* 头部标题的公共样式 */
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
}
);




const AppContainer2 = createAppContainer(AppNavigator);






class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        { badgeCount > 0 && (
          <View style={{
            // If you're using react-native < 0.57 overflow outside of the parent
            // will not work on Android, see https://git.io/fhLJ8
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'red',
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>{badgeCount}</Text>
          </View>
        )}
      </View>
    );
  }
}


const HomeIconWithBadge = (props) => {
  // You should pass down the badgeCount in some other ways like react context api, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;  
}


const AppNavigator1 = createStackNavigator ({
  Home:  HomeScreen,
} 
);


const createBottomTabNavigator1 = createBottomTabNavigator(
  {
    Home: AppNavigator1,
    Details: DetailsScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons. 
          // You can check the implementation below.
          IconComponent = HomeIconWithBadge; 
        } else if (routeName === 'Details') {
          iconName = `ios-cloud${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);





const AppContainer3 = createAppContainer(createBottomTabNavigator1);

export default class  extends React.Component {
  render() {
    return <AppContainer3 />;
  }
}