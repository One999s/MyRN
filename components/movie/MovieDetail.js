import React,{Component} from 'react'
import {View,Text,ActivityIndicator,Image,StyleSheet,ScrollView} from 'react-native'

const styles = StyleSheet.create({
    DetailTitle:{
        fontSize:25,textAlign:'center',marginTop:20,marginBottom:20
    },
    DetailSummary:{
        lineHeight:20,
        marginTop:20
    },
    img:{width:200,height:280}
})

export default class MovieDetail extends Component{
    constructor(props){
        super(props)
        this.state={
            isLoading:true,
            movieInfo:[]
        }
    }
    componentWillMount(){
        this.renderDetail()
    }
    renderDetail=()=>{
        fetch('https://douban.uieee.com/v2/movie/subject/'+this.props.id)
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                movieInfo:data,
                isLoading:false
            })
        })
    }
    renderList=()=>{
        if(this.state.isLoading==true){
            return <ActivityIndicator size="large"></ActivityIndicator>
        }
        return <ScrollView>
             <View style={{padding:20}}>
                <Text style={styles.DetailTitle}>{this.state.movieInfo.title}</Text>
                <View style={{alignItems:'center'}}>
                    <Image source={{uri:this.state.movieInfo.images.large}} style={styles.img}></Image>
                </View>
                <Text style={styles.DetailSummary}>{this.state.movieInfo.summary}</Text>
            </View> 
        </ScrollView>
    }
    render(){
        return this.renderList()
    }
}