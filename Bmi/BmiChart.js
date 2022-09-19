import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity , Modal, TouchableHighlight} from 'react-native';
import { useTheme } from '@react-navigation/native';

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from 'react-native-chart-kit';

import API from '../../API';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


const { width, height } = Dimensions.get("window");
var idUser;
var back = '<';

const BmiChart = ({navigation}) => {
  const moment = require('moment');
  const today = moment();
  const [bmis, setBmis] = useState([]); 
  const [data0, setData0] = useState([]);
  const [data1, setData1] = useState([]);
  const [date0, setDate0] = useState([]);

  const retrieveBmi = async () => {

    idUser = await AsyncStorage.getItem("id");
    await axios.get(`https://test.yobitrust.com:8443/Service-SelfWell-0.0.1-SNAPSHOT/bmi/${idUser}`)
    .then(response => {
      setBmis(response.data);
      console.log(response.data);
    })
    .catch(e => {
    console.log(e.message);
  });
};


 
  useEffect(() => {
    retrieveBmi();
    let temp1 = [];
    let temp2 = [];
    let temp3 = [];

    for (var i = 0; i < bmis.length; i++) {
          temp1.push(bmis[i].bmi);
          temp2.push(bmis[i].bmiDate);
          temp3.push(bmis[i].weight);
          setData0(temp1);
          setDate0(temp2);
          setData1(temp3);
        }
  },
   [idUser, bmis]);
   
 
    return (
        
      <ScrollView style={styles.container}>

      <View style={styles.header}>
            <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
              <Text style={styles.back}>{back}</Text>
            </TouchableOpacity>
            <Text style={styles.headerText}>My BMI chart</Text>
            </View>
  
        <View style={styles.containerTwo}>
        <View style={styles.containerTab}>
        <TouchableOpacity style={styles.tab}
            onPress={() => {navigation.navigate('BmiScreen')}}>
            <Text style={styles.tabText}>BMI</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.tab}
          onPress={() => {navigation.navigate('BmiHistory')}}>
            <Text style={styles.tabText}>History</Text>
          </TouchableOpacity>
          
          <TouchableOpacity  style={[styles.tab, {
                        backgroundColor: '#56bed1',
                    }]}
            onPress={() => {navigation.navigate('BmiChart')}}>
            <Text style={[styles.tabText, {
                        color: '#fff'
                    }]}>Chart</Text>
          </TouchableOpacity>
          
        </View>
        {bmis && date0.length != 0 && data0.length != 0 && data1.length != 0 ?  (<View>

        <View style={styles.containerfive}>
            <Text style={styles.weightText}>My weight evolution</Text>
            
           
            <LineChart
     verticalLabelRotation={40} 
     data={{
       labels: date0,
       datasets: [
         {
           data: data1,
           strokeWidth: 2,
                                 color:  (opacity = 1) => '#5C75D9', // optional
         }
       ]
     }}
     width= {width * 0.95}
     height={height * 0.55}
     chartConfig={{
       backgroundColor: '#fff',
       backgroundGradientFrom: '#fff',
       backgroundGradientTo: '#efefef',
       decimalPlaces: 2,
       color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
       style: {
         borderRadius: 16,
       },
     }}
     style={{
       marginVertical: 8,
       borderRadius: 16,
     }}
   />
   </View>

   <View style={styles.containerfive}>
            <Text style={styles.heightText}>My BMI evolution</Text>
            
           
           <LineChart
    verticalLabelRotation={40} 
    data={{
      labels: date0,
      datasets: [
        {
          data: data0,
          strokeWidth: 2,
								color:  (opacity = 1) => '#EFBE45', // optional
        }
      ]
    }}
    width= {width * 0.95}
    height={height * 0.55}
    chartConfig={{
      backgroundColor: '#fff',
      backgroundGradientFrom: '#fff',
      backgroundGradientTo: '#efefef',
      decimalPlaces: 2,
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16,
      },
    }}
    style={{
      marginVertical: 8,
      borderRadius: 16,
    }}
  />

</View>
        </View>): (<View style= {styles.containerTwo1}>
          <Text style={styles.cardText}>No data found..</Text>
          <TouchableOpacity onPress={ () => navigation.navigate('BmiCalculator')}>
            <Text style={styles.cardText}>Log your weight and height</Text>
          </TouchableOpacity>
        </View>)}
        
          
       
       
        </View>
      </ScrollView> 
    );
  }
  

export default BmiChart;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#F9F9F9'
},
header: {
  height: height * 0.08,
  width: width,
  flexDirection: 'row',
},
back: {
  color: '#000000',
fontSize: 43,
marginLeft: width * 0.05,
marginTop:  height * 0.01,
},
headerText: {
  color: '#000000',
  marginLeft: width * 0.2,
fontSize: 22,
fontWeight: 'bold',
marginTop: height * 0.035
},
containerTwo: {
    flex: 1, 
    backgroundColor: '#F9F9F9',
    marginTop: height * 0.05,
    marginBottom: height * 0.05,
    width: width * 0.95,
    alignSelf: 'center',
    borderRadius: 20
  },
  containerTwo1: {
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent: 'center',
    width: width*0.94,
    height: height * 0.39,
    marginBottom: height*0.01,
    marginTop: height * 0.055,
    alignSelf: 'center',
    borderRadius: 20
  },
  containerfive: {
    flex: 1, 
    backgroundColor: '#fff',
    marginTop: height * 0.02,
    marginBottom: height * 0.05,
    width: width * 0.95,
    alignSelf: 'center',
    borderRadius: 20
  },
  containerThree: {
    flex: 1,
    height: height * 0.35,
    width: width * 0.94,
  },
  containerTab: {
    flex: 1,
    flexDirection: 'row', 
    backgroundColor: '#fff',
    width: width * 0.95,
    height: height * 0.06,
    alignSelf: 'center',
    borderRadius: 20
  },
  tab: {
    flex: 1,
    backgroundColor: '#fff',
    width: (width * 0.95) / 3,
    height: height * 0.06,
    alignSelf: 'center',
    borderRadius: 20,
    alignContent: 'center',
    alignItems: 'center'
  },
  tabText: {
    color: '#56BED1',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  weightText: {
    color: '#5C75D9',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: height * 0.06,
    marginBottom: height * 0.02,
  },
  heightText: {
    color: '#EFBE45',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: height * 0.05,
    marginBottom: height * 0.02,
  },
  containerfour : {
    flex : 1,
    backgroundColor : '#fff',
    borderTopRightRadius : 60,
    borderTopLeftRadius : 60,
    width: width * 0.8,
    height: height * 0.1,
    marginBottom: 0.1
  },

  circleText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf:"center",
  },
  category: {
    // this should be dynamic based on screen width
    minWidth: (width - 25 * 2.4 - 16) / 2.5,
    maxWidth: (width - 25 * 2.4 - 16) / 2.5,
    maxHeight: (width - 25 * 2.4 - 16) / 2.5,
    backgroundColor: '#ffff',
    borderLeftColor: '#000000'
  },
  image: {
    width: width * 0.13,
    height: width * 0.13,
    marginRight: width * 0.76,
    marginBottom: - height * 0.05
  },
  card: {
    backgroundColor: '#ffff',
    flex: 1,
    height: height * 0.15,
    width: width * 0.4,
    marginRight: width * 0.01,
    marginLeft: width * 0.01,
    borderLeftWidth: 8,
    borderLeftColor: '#6980b3',
    borderWidth: 2,
    borderBottomColor: '#d4d4d4',
    borderTopColor: '#d4d4d4',
    borderRightColor: '#d4d4d4'
  },
  cardText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf:"center",
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
 
  },
  modalView: {
    height: 300,
    width: 300,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  signIn: {
    width: width * 0.3,
    height: height * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: width * 0.08,
    marginTop: height * 0.03,
    marginBottom: height * 0.02
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: height * 0.008,
    fontSize: 18
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
},
text_footeer: {
  color: '#3cc196',
  fontSize: 35,
  fontWeight: 'bold',
  marginLeft: width * 0.18,

},
});
