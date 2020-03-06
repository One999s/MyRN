/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component}from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//导入react-natie-tab-navigator包
import TabNavigator from 'react-native-tab-navigator';
//导入Tab底部导航组件
import HomeView from './components/tabNav/homeView.js'
import ProfileView from './components/tabNav/profileView.js'
import Me from './components/tabNav/Me.js'
import Shopcart from './components/tabNav/Shopcart.js'
//导入Icon图标
import Icon from 'react-native-vector-icons/FontAwesome'
const styles = StyleSheet.create({
  container:{flex:1}
});

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={
      selectedTab:'home'
    }
  }
  render(){
    return <View style={styles.container}>
    <TabNavigator>
      <TabNavigator.Item
        selected={this.state.selectedTab === 'home'}
        title="首页"
         renderIcon={() => <Icon name="home" size={25} />}
         renderSelectedIcon={() => <Icon name="home" size={25} color="#900" />}
        // badgeText="1"
        onPress={() => this.setState({ selectedTab: 'home' })}
        >
        <HomeView></HomeView>
      </TabNavigator.Item>
      <TabNavigator.Item
        selected={this.state.selectedTab === 'search'}
        title="搜索"
         renderIcon={() => <Icon name="search" size={25} />}
         renderSelectedIcon={() => <Icon name="search" size={25} color="#900" />}
        // badgeText="1"
        onPress={() => this.setState({ selectedTab: 'search' })}
        >
        <ProfileView></ProfileView>
      </TabNavigator.Item>
      <TabNavigator.Item
        selected={this.state.selectedTab === 'shopcart'}
        title="购物车"
         renderIcon={() => <Icon name="shopping-cart" size={25} />}
         renderSelectedIcon={() => <Icon name="shopping-cart" size={25} color="#900" />}
         badgeText="0"
        onPress={() => this.setState({ selectedTab: 'shopcart' })}
        >
        <Shopcart></Shopcart>
      </TabNavigator.Item>
      <TabNavigator.Item
        selected={this.state.selectedTab === 'me'}
        title="我的"
        renderIcon={() => <Icon name="user" size={25}  />}
        renderSelectedIcon={() => <Icon name="user-o" size={25} color="#900" />}
        // renderBadge={() => <CustomBadgeView />}
        onPress={() => this.setState({ selectedTab: 'me' })}
        >
        <Me></Me>
      </TabNavigator.Item>
    </TabNavigator>
  </View>
  }
};;
