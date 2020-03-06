import React,{Component} from 'react'
import {View,Text,Image,Button} from 'react-native'
import ImagePicker from 'react-native-image-picker'


const photoOptions = {
    title: '请选择',
    quality: 0.8,
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照',
    chooseFromLibraryButtonTitle: '选择相册',
    allowsEditing: true,
    noData: false,
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  };
export default class Me extends Component{
    constructor(props){
        super(props)
        this.state={
            avatarSource:'https://thumbnail0.baidupcs.com/thumbnail/68e4d0cf6h9923b842d89696890cdf0e?fid=1823575408-250528-257765047532156&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-i4psuvr%2fPo%2f3QtOUHz%2fNmbLWk7U%3d&expires=8h&chkbd=0&chkv=0&dp-logid=1525249853019002750&dp-callid=0&time=1583488800&size=c1536_u864&quality=90&vuk=1823575408&ft=image&autopolicy=1'
        }
    }
    cameraAction=()=>{
        ImagePicker.showImagePicker(photoOptions,(response)=>{
            if (response.didCancel) {
                console.log('User cancelled image picker');
              }
              else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              }
              else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
              }
              else{
                this.setState({
                    avatarSource:response.uri
                })
              }
        })
    }
    render(){
        return <View style={{alignItems:'center',paddingTop:70}}>
            <Image source={{uri:this.state.avatarSource}} style={{width:200,height:200,borderRadius:100,marginBottom:20}}></Image>
            <Button title="拍照" onPress={this.cameraAction}></Button>
        </View>
    }
}