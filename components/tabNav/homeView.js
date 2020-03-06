import React,{Component} from 'react'
import {View,Text,StyleSheet,Image,TouchableHighlight} from 'react-native'

//导入轮播图组件
import Swiper from 'react-native-swiper'
//导入路由组件
import {Actions} from 'react-native-router-flux'
const styles = StyleSheet.create({
    main:{
      flexDirection:'row',
      flexWrap:'wrap'
    },
    box:{
      marginTop:10,
      width:'33.33%',
      alignItems:'center'
    },
    img:{
      width:60,height:60
    }
  })  

export default class HomeView extends Component{
    constructor(props){
        super(props)
        this.state={
            lbt:[]
        }
    }
    componentWillMount(){
        fetch('http://api.lpf.one9s.com/getlbt').then(response=>response.json())
        .then(data=>{
            this.setState({
                lbt:data
            })
        })
    }
    getMovieList=()=>{
      Actions.movielist()
    }
    render(){
        return (
            <View>
                <View style={{height:200}}>
                    <Swiper showsButtons={true} autoplay={true} >
                       {this.state.lbt.map((item,i)=>{
                         return <View key={i}>
                           <Image source={{uri:item.url}} style={{width:'100%',height:'100%'}}></Image>
                         </View>
                       })}
                    </Swiper>
                </View>
                <View style={styles.main}>
                <TouchableHighlight style={styles.box} underlayColor="white">
                  <View>
                    <Image source={require('../../src/Images/11.png')} style={styles.img}></Image>
                    <Text>新闻资讯</Text>
                  </View>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.box} underlayColor="white">
                  <View>
                    <Image source={require('../../src/Images/11.png')} style={styles.img}></Image>
                    <Text>你好世界</Text>
                  </View>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.box} underlayColor="white">
                  <View>
                    <Image source={require('../../src/Images/11.png')} style={styles.img}></Image>
                    <Text>商品购买</Text>
                  </View>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.box} underlayColor="white">
                  <View>
                    <Image source={require('../../src/Images/11.png')} style={styles.img}></Image>
                    <Text>视频专区</Text>
                  </View>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.box} onPress={this.getMovieList} underlayColor="white">
                  <View>
                    <Image source={require('../../src/Images/11.png')} style={styles.img}></Image>
                    <Text>Top电影</Text>
                  </View>
                  </TouchableHighlight>
                  <TouchableHighlight style={styles.box} underlayColor="white">
                  <View>
                    <Image source={require('../../src/Images/11.png')} style={styles.img}></Image>
                    <Text>联系我们</Text>
                  </View>
                  </TouchableHighlight>
                </View>
            </View>
          )
    }
}