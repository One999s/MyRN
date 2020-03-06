//项目根组件
import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import {Router,Stack,Scene } from 'react-native-router-flux'

import App from './App'
import MovieList from './components/movie/MovieList.js'
import MovieDetail from './components/movie/MovieDetail.js'
export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return <View style={{flex:1}}>
          <Router>
        <Stack key="root">
          <Scene key="app" component={App} title="" hideNavBar={true} />
          <Scene key="movielist" component={MovieList} title="豆瓣Top250电影"/>
          <Scene key="moviedetail" component={MovieDetail} title="电影详情"/>
        </Stack>
      </Router>
        </View>
    }
}