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
import axios from "axios";
const baseURL = "https://test.yobitrust.com:8443/HachCovid19Back/getAllDate";
const Json1 = (props) => {
  let config = {
        num: [4, 7],
        rps: 0.1,
        radius: [5, 40],
        life: [1.5, 3],
        v: [2, 3],
        tha: [-50, 50],
        alpha: [0.6, 0],
        scale: [.1, 0.9],
        position: "all",
        color: [ "#ff0000"],
        cross: "dead",
        random: 10
      };
      
      const [post, setPost] = React.useState(null);
      var handledateChange = (text) => {
        console.log(text);
        localStorage.setItem('dataIot', text);
        props.navigation.navigate("ListDate1")
      }
      React.useEffect(() => {
        axios.get(baseURL).then((response) => {
          setPost(response.data);
        });
      }, []);
    
      if (!post) return null;
      return (
        <View style={styles.container2}><ScrollView>
      <Text style={styles.headerText}>Cyclic Voltammetry - Potentiostat</Text>
      <View style={styles.headerContainer}>
        
      </View>
      <View style={styles.container1}> 
      <Text style={styles.count}>List de date</Text>

{post.map((post) => (
          <View style={styles.card} >
            <TouchableOpacity value={post.date} onPress={() => handledateChange(post.date)}>                  
              <Text  >{JSON.stringify(new Date(parseInt(post.date)))}</Text>
</TouchableOpacity>
                  </View>
        ))}
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
  export default Json1;
