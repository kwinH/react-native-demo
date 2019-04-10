import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyHone from '../pages/MyHome';
import HomeIconWithBadge from './HomeIconWithBadge';
import topTabNavigator from './TopTabNavigator';



const bottomTabNavigator = createBottomTabNavigator(
    {
        news: {
            screen: topTabNavigator,
            navigationOptions: {
                title: '新闻',
            },
        },
        vodeo: {
            screen: MyHone,
            navigationOptions: {
                title: '视频',
            },
        },
        my: {
            screen: MyHone,
            navigationOptions: {
                title: '我的',
            },
        },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'news') {
                    iconName = `md-paper`;
                    //iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                    // Sometimes we want to add badges to some icons. 
                    // You can check the implementation below.
                    IconComponent = HomeIconWithBadge;
                } else if (routeName === 'vodeo') {
                    iconName = `ios-play-circle`;
                } else if (routeName === 'my') {
                    iconName = `md-person`;
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





const AppContainer = createAppContainer(bottomTabNavigator);

export default AppContainer;