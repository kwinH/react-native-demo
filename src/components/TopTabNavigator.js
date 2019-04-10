import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import DetailsScreen from '../pages/news';


let cateList = {};

for (let i = 1; i < 10; i++) {
  let stack = {};
  stack["Details" + i] = { screen: DetailsScreen, params: { itemId: 86 + i } };
  let chatStackNavigator = createStackNavigator(stack);
  cateList["Details" + i] = {
    screen: chatStackNavigator,
    navigationOptions: {
      title: '新闻' + i,
    },
  }
}




const materialTopTabNavigator = createMaterialTopTabNavigator(
  cateList, {
    //  initialRouteName: 'Home',
    //  animationEnabled: false, // 点击tab label切换tab时是否开启动画 默认为true
    // order: ['Settings', 'Home'],
    //  tabBarPosition: 'bottom', // tab bar显示的位置，默认是 'top'
    tabBarOptions: {
      scrollEnabled: true,//是否支持 选项卡滚动

      activeTintColor: 'orange',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: '#f2f2f2',
        borderTopWidth: 0.5,
        borderTopColor: 'grey',
      },
      indicatorStyle: {
        height: 0, // 不显示indicator
      },
      showIcon: true, // 是否显示图标, 默认为false
      showLabel: true, // 是否显示label

      labelStyle: {
        fontSize: 12,
        padding: 0,
        margin: 0,
      },
      tabStyle: {
        minWidth: 80,
        backgroundColor: '#000000',
      },

    },
  }
);

export default materialTopTabNavigator;