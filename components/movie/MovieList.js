import React,{Component} from 'react'
import {View,Text,ActivityIndicator,FlatList,Image,StyleSheet,TouchableHighlight} from 'react-native'

import {Actions} from 'react-native-router-flux'
const styles = StyleSheet.create({
    hotTitle:{
        fontWeight:'bold'
    }
  })  

export default class MovieList extends Component{
    constructor(props){
        super(props)
        this.state={
            isloading:true,
            movies:[],//电影列表
            pageSize:12,//每页显示数量
            nowPage:1,//要获取第几页的数据
            totalPage:0,//总页数
        }
    }
    componentWillMount(){
        this.getMovieListByPage()
    }
    //根据页码获取热映电影列表
    getMovieListByPage=()=>{
        const start = this.state.pageSize * (this.state.nowPage -1)
        const url = `https://douban.uieee.com/v2/movie/top250?start=${start}&count=${this.state.pageSize}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                isloading:false,
                movies:this.state.movies.concat(data.subjects),
                totalPage:Math.ceil(data.total/this.state.pageSize)
            })
        })
    }
    //循环渲染
    renderList(){
        if(this.state.isloading==true){
            return <ActivityIndicator size="large"></ActivityIndicator>
        }
        else{
            return <FlatList
            data={this.state.movies}
            renderItem={({item}) => this.renderItems(item)} //循环渲染
            ItemSeparatorComponent={this.renderItemsSpace}//渲染分割线
            onEndReachedThreshold={0.5}
            onEndReached={this.loadNextPage}
          />
        }
    }

    //渲染下一个页面的数据
    loadNextPage=()=>{
        if((this.state.nowPage+1) > this.state.totalPage){
            return
        }
        this.setState({
            nowPage:this.state.nowPage+1
        },function(){
            this.getMovieListByPage()
        })
    }
    //分割线
    renderItemsSpace = ()=>{
        return <View style={{borderTopColor:'#ccc',borderTopWidth:1,marginLeft:15,marginRight:15}}></View>
    }
    //渲染每一项数据
    renderItems(item){
        return <TouchableHighlight underlayColor="#fff" onPress={()=>{Actions.moviedetail({id:item.id})}}>
            <View style={{flexDirection:'row',margin:15}}>
                <Image source={{uri:item.images.small}} style={{width: 100, height: 140,marginRight:10}}></Image>
                <View style={{justifyContent:'space-around'}}>
                    <Text><Text style={styles.hotTitle}>电影名称:</Text>{item.title}</Text>
                    <Text><Text style={styles.hotTitle}>电影类型:</Text>{item.genres.join('，')}</Text>
                    <Text><Text style={styles.hotTitle}>上映时间:</Text>{item.year}</Text>
                    <Text><Text style={styles.hotTitle}>豆瓣评分:</Text>{item.rating.average}</Text>
                </View>
            </View>
        </TouchableHighlight>
    }
    render(){
        return <View>
            {this.renderList()}
        </View>
    }
}