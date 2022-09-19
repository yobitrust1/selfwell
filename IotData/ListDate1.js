import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'
import axios from "axios";
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
  ScrollView
} from 'react-native';
const baseURL = "http://test.yobitrust.com:8080/HachCovid19Back";
export default function ListDate1() {
  const [post, setPost] = React.useState();
  //var data1="1654856397509";
var data1=localStorage.getItem("dataIot");
var numDate= new Date(parseInt(data1));
  React.useEffect(() => {
    console.log(data1)
    axios.get(`${baseURL}/search/${data1}`).then((response) => {
      setPost(response.data);
    });
  },[]);
  var data2=[];
    if(post!=undefined){
     //create array of data array
     var data2=[];
      for(var i=0;i<post.i.length;i++){
        data2.push({x:post.i[i],y:post.v[i]});
      }
      //options.series[0].data = [...data2];
      //copy part of array to new array
      var data3=[];
      for(var i=399;i<800;i++){
        data3.push({x:post.i[i],y:post.v[i]});
      }
      
     }
    if (!post) return null;
  return (
    

<View style={styles.container2}><ScrollView>
      <Text style={styles.headerText}>Cyclic Voltammetry - Potentiostat</Text>
      <View style={styles.headerContainer}>
        
      </View>
      <View style={styles.container1}> 
      <Text style={styles.count}>date :</Text>
      <Text style={styles.count}>{JSON.stringify(numDate)}</Text>
      <View style={styles.card} ><Chart
  style={{ height: 200, width: 350 }}
  data={data3}
  padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
  xDomain={{ min: -1.5, max: 1.5 }}
  yDomain={{ min: -1.5, max: 1.5 }}
>
  <VerticalAxis tickCount={11} theme={{ labels: { formatter: (v) => v.toFixed(2) } }} />
  <HorizontalAxis tickCount={5} />
  <Line theme={{ stroke: { color: '#ffa502', width: 5 } }} />
</Chart>
</View>
</View>
</ScrollView></View>
      );
};

const styles = StyleSheet.create({
container2: {
  flex: 1,
  backgroundColor: '#fff'
},
headerContainer: {
  marginTop: 80,
  marginHorizontal: 10
},
svgCurve: {
  position: 'absolute',
  width: Dimensions.get('window').width
},
headerText: {
  fontSize: 30,
  fontWeight: 'bold',
  color: '#333',
  textAlign: 'center',
  marginTop: 35
},
container1:{
  flex:1,
  marginTop:40,
  backgroundColor:'#fff',
},
container:{
flex:1,
marginTop:10,
backgroundColor:"#ebf0f7"
},
contentList:{
flex:1,
},
cardContent: {
marginLeft:20,
marginTop:10
},
image:{
width:90,
height:90,
borderRadius:45,
borderWidth:2,
borderColor:"#ebf0f7"
},

card:{
shadowColor: '#00000075',
shadowOffset: {
  width: 1,
  height: 8,
},
shadowOpacity: 0.37,
shadowRadius: 7.49,
elevation: 12,

marginLeft: 20,
marginRight: 20,
marginTop:20,
backgroundColor:"white",
padding: 10,
flexDirection:'row',
borderRadius:30,
},

name:{
fontSize:18,
flex:1,
alignSelf:'center',
color:"#3399ff",
fontWeight:'bold'
},
count:{
fontSize:24,
flex:1,
alignSelf:'center',
color:"#6666ff"
},
followButton: {
marginTop:10,
height:35,
width:100,
padding:10,
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
borderRadius:30,
backgroundColor: "white",
borderWidth:1,
borderColor:"#dcdcdc",
},
followButtonText:{
color: "#dcdcdc",
fontSize:12,
},
});
