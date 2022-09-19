import React, {useState, useEffect} from 'react';
import { View, ScrollView, Text, Button, Dimensions, StyleSheet, Image, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import Card1 from '../../components/Card1';
import Block from '../../components/Block';

import AsyncStorage from '@react-native-async-storage/async-storage';
import API from '../../API';


const { width, height } = Dimensions.get("window");
var back = '<';
var date = '';

const BloodAnalysisHistory = ({navigation}) => {
    const moment = require('moment');
    const today = moment();


    const [bloodanalysis, setBloodanalysis] = useState([{
      glucose: 0,
      isValidGlucose: true,
      cReactiveProtein: 0,
      isValidcReactiveProtein: true,
      dDimer: 0,
      isValiddDimer: true,
      ip10: 0,
      isValidip10: true,
      freeAlbumin: 0,
      isValidfreeAlbumin: true,
      leptin: 0,
      isValidleptin: true,
      adiponectin: 0,
      isValidadiponectin: true,
      igf1: 0,
      isValidigf1: true,
      resistin: 0,
      isValidresistin: true,
      opn: 0,
      isValidopn: true,
      orexinA: 0,
      isValidorexinA: true,
      melatonin: 0,
      isValidmelatonin: true,
      creatinine: 0,
      isValidcreatinine: true,
      bloodAnalysisDate: '',
    }]);  
  
      const [open, setOpen] = useState(false);
    const [todayTest, setTodayTest] = useState([]);
    const [weekTest, setWeekTest] = useState([]);
    const [monthTest, setMonthTest] = useState([]);
    const [currentBloodanalysis, setCurrentBloodanalysis] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [value, setValue] = useState('Today');
    const [items, setItems] = useState([ {label: 'Today', value: 'Today'}, {label: 'This month', value: 'Thismonth'},{label: 'All', value: 'All'} ]);
    let controller; 
   

    date = today.format('YYYY-MM-DD');
    
    useEffect(() => {
        retrieveBloodanalysis();
        let temp= [];
        let temp1= [];
        for (var i = 0; i < bloodanalysis.length; i++) {
          if ((bloodanalysis[i].bloodAnalysisDate).substring(0, 10) == date.substring(0,10) ) {
            temp.push(bloodanalysis[i]);
            setTodayTest(temp)
          }
          if ((bloodanalysis[i].bloodAnalysisDate).substring(0, 7) == date.substring(0,7) ) {
            temp1.push(bloodanalysis[i]);
            setMonthTest(temp1)
          }
        }
      }, [bloodanalysis]);

    const retrieveBloodanalysis = async () => {
        const idUser = await AsyncStorage.getItem("id");
        API.getBloodAnalysis(idUser)
        .then(response => {
          setBloodanalysis(response.data)
        
        })
        .catch(e => {
        console.log(e.message);
      });
    };

    const exportBilan = async () => {
      const idUser = await AsyncStorage.getItem("id");
      API.exportBloodAnalysisByIdUser(idUser)
      .then(response => {
      
      })
      .catch(e => {
      console.log(e.message);
    });
  };

    const refreshList = () => {
        retrieveBloodanalysis();
        setCurrentBloodanalysis(null);
        setCurrentIndex(-1);
    };

    const setActiveBloodAnalysis = (blood, index,idBloodAnalyse) => {
        setCurrentBloodanalysis(blood);
        setCurrentIndex(index);
        navigation.navigate("BloodAnalysisDetails", {idBloodAnalyse})
        
    };

    const update = (idBloodAnalyse) => {
      navigation.navigate("BloodAnalysisEdit", {idBloodAnalyse})
    }

    const removeBloodAnalysis = (id) => {
        API.DeleteBloodAnalysis(id)
          .then(response => {
            console.log(response.data);
            refreshList();
          })
          .catch(e => {
            console.log(e);
          });
      };

    const showAlertDelete = (idItem) => {
        Alert.alert(
            'Confirmation',
            'Sure you want to delete this item ?',
            [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Delete',
                    onPress: () => removeBloodAnalysis(idItem)
                },
            ],
        )
    }

    return(
      
        <ScrollView style={styles.container}>
<SafeAreaView>
    <View style={styles.header}>
          <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
            <Text style={styles.back}>{back}</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>My blood analysis History</Text>
          </View>

      <View style={styles.containerTwo}>
        
      <View style={styles.containerTab}>
        <TouchableOpacity style={styles.tab}
          onPress={() => {navigation.navigate('WelcomeScreen')}}>
            <Text style={styles.tabText}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tab, {
                        backgroundColor: '#56bed1',
                    }]}
            onPress={() => {navigation.navigate('BloodAnalysisHistory')}}>
            <Text style={[styles.tabText, {
                        color: '#fff'
                    }]}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}
            onPress={() => {navigation.navigate('ChartBloodAnalysis')}}>
            <Text style={styles.tabText}>Chart</Text>
          </TouchableOpacity>
          
        </View>
        <DropDownPicker
      containerStyle={{height: height * 0.15,marginBottom: height * 0.02, marginTop: height * 0.025, marginLeft: width * 0.2,zIndex: 10}}
      style={{backgroundColor: '#fff', width: width * 0.45,zIndex: 10}}
      labelStyle={{
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,zIndex: 10
      }}
      itemStyle={{justifyContent: 'flex-start',zIndex: 10}}
      dropDownStyle={{backgroundColor: '#fff',zIndex: 10}}
      arrowStyle={{color: '#fff', size: 80,zIndex: 10}}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
/> 
       {value=='Today' ?
      <View>
      
{todayTest ? ( 
  <View>
    
<View style={styles.containerThree}>
{todayTest &&
           todayTest.map((blood, index) => (
            <Card1 key={index} style={styles.containerThree}>
                     
            <Block row space="between" style={{ marginBottom: 16 }}>
            <TouchableOpacity 
                        spacing={0.5} caption
                        onPress={ () => update(blood.idBloodAnalyse)}
              >
                     <Image spacing={0.5} caption source={require('../../assets/pencil.png')} style={styles.image}/>    
             </TouchableOpacity>
              <TouchableOpacity 
                        spacing={0.5} caption
                        onPress={ () => showAlertDelete(blood.idBloodAnalyse)}
              >
                     <Image spacing={0.5} caption source={require('../../assets/x-button.png')} style={styles.image1}/>  
             </TouchableOpacity>
            </Block>
              <Text style={styles.dateText}>{moment(blood.bloodAnalysisDate).format('LLLL')}</Text>
              {blood.glucose >0 ? ( 
              <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                       <Text spacing={0.5} caption style={styles.text_footer}>glucose: </Text>
                       <Text spacing={0.5} caption style={styles.textfooter}>{blood.glucose}</Text>
              
                       </View>                        
                       ):(<View>

             </View>
           )}
           {blood.cReactiveProtein >0 ? ( 
              <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                       <Text spacing={0.5} caption style={styles.text_footer}>C-Reactive protein: </Text>
                       <Text spacing={0.5} caption style={styles.textfooter}>{blood.cReactiveProtein}</Text>
              
                       </View>                        
                       ):(<View>

             </View>
           )}
           {blood.dDimer >0 ? ( 
              <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                       <Text spacing={0.5} caption style={styles.text_footer}>D-dimer: </Text>
                       <Text spacing={0.5} caption style={styles.textfooter}>{blood.dDimer}</Text>
              
                       </View>                        
                       ):(<View>

             </View>
           )}
           {blood.ip10 >0 ? ( 
              <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                       <Text spacing={0.5} caption style={styles.text_footer}>IP-10: </Text>
                       <Text spacing={0.5} caption style={styles.textfooter}>{blood.ip10}</Text>
              
                       </View>                        
                       ):(<View>

             </View>
           )}
           {blood.freeAlbumin >0 ? ( 
              <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                       <Text spacing={0.5} caption style={styles.text_footer}>Free albumin: </Text>
                       <Text spacing={0.5} caption style={styles.textfooter}>{blood.freeAlbumin}</Text>
              
                       </View>                        
                       ):(<View>

             </View>
           )}
           {blood.leptin >0 ? ( 
              <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                       <Text spacing={0.5} caption style={styles.text_footer}>Leptin: </Text>
                       <Text spacing={0.5} caption style={styles.textfooter}>{blood.leptin}</Text>
              
                       </View>                        
                       ):(<View>

             </View>
           )}
           
           {blood.adiponectin >0 ? ( 
              <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                       <Text spacing={0.5} caption style={styles.text_footer}>Adiponectin: </Text>
                       <Text spacing={0.5} caption style={styles.textfooter}>{blood.adiponectin}</Text>
              
                       </View>                        
                       ):(<View>

             </View>
           )}
           {blood.igf1 >0 ? ( 
              <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                       <Text spacing={0.5} caption style={styles.text_footer}>IGF-1: </Text>
                       <Text spacing={0.5} caption style={styles.textfooter}>{blood.igf1}</Text>
              
                       </View>                        
                       ):(<View>

             </View>
           )}
           {blood.resistin >0 ? ( 
              <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                       <Text spacing={0.5} caption style={styles.text_footer}>Resistin: </Text>
                       <Text spacing={0.5} caption style={styles.textfooter}>{blood.resistin}</Text>
              
                       </View>                        
                       ):(<View>

             </View>
           )}
           {blood.opn >0 ? ( 
              <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                       <Text spacing={0.5} caption style={styles.text_footer}>OPN: </Text>
                       <Text spacing={0.5} caption style={styles.textfooter}>{blood.opn}</Text>
              
                       </View>                        
                       ):(<View>

             </View>
           )}
           {blood.orexinA >0 ? ( 
              <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                       <Text spacing={0.5} caption style={styles.text_footer}>Orexin-A: </Text>
                       <Text spacing={0.5} caption style={styles.textfooter}>{blood.orexinA}</Text>
              
                       </View>                        
                       ):(<View>

             </View>
           )}
           {blood.melatonin >0 ? ( 
              <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                       <Text spacing={0.5} caption style={styles.text_footer}>Melatonin: </Text>
                       <Text spacing={0.5} caption style={styles.textfooter}>{blood.melatonin}</Text>
              
                       </View>                        
                       ):(<View>

             </View>
           )}
           {blood.creatinine >0 ? ( 
              <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                       <Text spacing={0.5} caption style={styles.text_footer}>Creatinine: </Text>
                       <Text spacing={0.5} caption style={styles.textfooter}>{blood.creatinine}</Text>
              
                       </View>                        
                       ):(<View>

             </View>
           )}
            
           
             
            
           
    </Card1>
           ))}
    
           </View> 
           </View>) : (
<View style={styles.containerThree}>

<Text>Add and Log Food</Text>
</View>
               
            )}
           </View>: <View></View> }
            {value=='Thismonth' ?
     <View>
      
            {monthTest ? (
              <View>
            { monthTest.map((blood, index) => (
                
              <View Key={index}  >
              
              <Card1 style={styles.containerThree}>
             
              <Block row space="between" style={{ marginBottom: 16 }}>
              <TouchableOpacity 
                                 spacing={0.5} caption
                                 onPress={ () => update(blood.idBloodAnalyse)}
                       >
                              <Image spacing={0.5} caption source={require('../../assets/pencil.png')} style={styles.image}/>   
                      </TouchableOpacity>
                <TouchableOpacity 
                          spacing={0.5} caption
                          onPress={ () => showAlertDelete(blood.idBloodAnalyse)}
                >
                       <Image spacing={0.5} caption source={require('../../assets/x-button.png')} style={styles.image1}/>  
               </TouchableOpacity>
              </Block>
                <Text style={styles.dateText}>{moment(blood.bloodAnalysisDate).format('LLLL')}</Text>
                {blood.glucose >0 ? ( 
                <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                         <Text spacing={0.5} caption style={styles.text_footer}>glucose: </Text>
                         <Text spacing={0.5} caption style={styles.textfooter}>{blood.glucose}</Text>
                
                         </View>                        
                         ):(<View>

               </View>
             )}
             {blood.cReactiveProtein >0 ? ( 
                <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                         <Text spacing={0.5} caption style={styles.text_footer}>C-Reactive protein: </Text>
                         <Text spacing={0.5} caption style={styles.textfooter}>{blood.cReactiveProtein}</Text>
                
                         </View>                        
                         ):(<View>

               </View>
             )}
             {blood.dDimer >0 ? ( 
                <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                         <Text spacing={0.5} caption style={styles.text_footer}>D-dimer: </Text>
                         <Text spacing={0.5} caption style={styles.textfooter}>{blood.dDimer}</Text>
                
                         </View>                        
                         ):(<View>

               </View>
             )}
             {blood.ip10 >0 ? ( 
                <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                         <Text spacing={0.5} caption style={styles.text_footer}>IP-10: </Text>
                         <Text spacing={0.5} caption style={styles.textfooter}>{blood.ip10}</Text>
                
                         </View>                        
                         ):(<View>

               </View>
             )}
             {blood.freeAlbumin >0 ? ( 
                <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                         <Text spacing={0.5} caption style={styles.text_footer}>Free albumin: </Text>
                         <Text spacing={0.5} caption style={styles.textfooter}>{blood.freeAlbumin}</Text>
                
                         </View>                        
                         ):(<View>

               </View>
             )}
             {blood.leptin >0 ? ( 
                <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                         <Text spacing={0.5} caption style={styles.text_footer}>Leptin: </Text>
                         <Text spacing={0.5} caption style={styles.textfooter}>{blood.leptin}</Text>
                
                         </View>                        
                         ):(<View>

               </View>
             )}
             
             {blood.adiponectin >0 ? ( 
                <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                         <Text spacing={0.5} caption style={styles.text_footer}>Adiponectin: </Text>
                         <Text spacing={0.5} caption style={styles.textfooter}>{blood.adiponectin}</Text>
                
                         </View>                        
                         ):(<View>

               </View>
             )}
             {blood.igf1 >0 ? ( 
                <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                         <Text spacing={0.5} caption style={styles.text_footer}>IGF-1: </Text>
                         <Text spacing={0.5} caption style={styles.textfooter}>{blood.igf1}</Text>
                
                         </View>                        
                         ):(<View>

               </View>
             )}
             {blood.resistin >0 ? ( 
                <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                         <Text spacing={0.5} caption style={styles.text_footer}>Resistin: </Text>
                         <Text spacing={0.5} caption style={styles.textfooter}>{blood.resistin}</Text>
                
                         </View>                        
                         ):(<View>

               </View>
             )}
             {blood.opn >0 ? ( 
                <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                         <Text spacing={0.5} caption style={styles.text_footer}>OPN: </Text>
                         <Text spacing={0.5} caption style={styles.textfooter}>{blood.opn}</Text>
                
                         </View>                        
                         ):(<View>

               </View>
             )}
             {blood.orexinA >0 ? ( 
                <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                         <Text spacing={0.5} caption style={styles.text_footer}>Orexin-A: </Text>
                         <Text spacing={0.5} caption style={styles.textfooter}>{blood.orexinA}</Text>
                
                         </View>                        
                         ):(<View>

               </View>
             )}
             {blood.melatonin >0 ? ( 
                <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                         <Text spacing={0.5} caption style={styles.text_footer}>Melatonin: </Text>
                         <Text spacing={0.5} caption style={styles.textfooter}>{blood.melatonin}</Text>
                
                         </View>                        
                         ):(<View>

               </View>
             )}
             {blood.creatinine >0 ? ( 
                <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                         <Text spacing={0.5} caption style={styles.text_footer}>Creatinine: </Text>
                         <Text spacing={0.5} caption style={styles.textfooter}>{blood.creatinine}</Text>
                
                         </View>                        
                         ):(<View>

               </View>
             )}
              
              
                
              
              
             
      </Card1>
      </View>
                
            ))} 
            </View> ) : ( <View>
              
              <Card1 style={styles.containerThree}>
             
              <Block row space="between" style={{ marginBottom: 16 }}>
              
                              <Image spacing={0.5} caption source={require('../../assets/pencil.png')} style={styles.image}/>   
                      
                       <Image spacing={0.5} caption source={require('../../assets/x-button.png')} style={styles.image1}/>  
              
              </Block>
                
      </Card1>
      </View>)}
            </View> : <View></View> }

            {value=='All' ?
     <View>
      
            {bloodanalysis &&
            bloodanalysis.map((blood, index) => (
                
              <View Key={index}  >
              
                     <Card1 style={styles.containerThree}>
                    
                     <Block row space="between" style={{ marginBottom: 16 }}>
                     <TouchableOpacity 
                                 spacing={0.5} caption
                                 onPress={ () => update(blood.idBloodAnalyse)}
                       >
                              <Image spacing={0.5} caption source={require('../../assets/pencil.png')} style={styles.image}/>    
                      </TouchableOpacity>
                       <TouchableOpacity 
                                 spacing={0.5} caption
                                 onPress={ () => showAlertDelete(blood.idBloodAnalyse)}
                       >
                              <Image spacing={0.5} caption source={require('../../assets/x-button.png')} style={styles.image1}/>  
                      </TouchableOpacity>
                     </Block>
                       <Text style={styles.dateText}>{moment(blood.bloodAnalysisDate).format('LLLL')}</Text>
                       {blood.glucose >0 ? ( 
                       <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                                <Text spacing={0.5} caption style={styles.text_footer}>Glucose: </Text>
                                <Text spacing={0.5} caption style={styles.textfooter}>{blood.glucose}</Text>
                       
                                </View>                        
                                ):(<View>

                      </View>
                    )}
                    {blood.cReactiveProtein >0 ? ( 
                       <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                                <Text spacing={0.5} caption style={styles.text_footer}>C-Reactive protein: </Text>
                                <Text spacing={0.5} caption style={styles.textfooter}>{blood.cReactiveProtein}</Text>
                       
                                </View>                        
                                ):(<View>

                      </View>
                    )}
                    {blood.dDimer >0 ? ( 
                       <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                                <Text spacing={0.5} caption style={styles.text_footer}>D-dimer: </Text>
                                <Text spacing={0.5} caption style={styles.textfooter}>{blood.dDimer}</Text>
                       
                                </View>                        
                                ):(<View>

                      </View>
                    )}
                    {blood.ip10 >0 ? ( 
                       <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                                <Text spacing={0.5} caption style={styles.text_footer}>IP-10: </Text>
                                <Text spacing={0.5} caption style={styles.textfooter}>{blood.ip10}</Text>
                       
                                </View>                        
                                ):(<View>

                      </View>
                    )}
                    {blood.freeAlbumin >0 ? ( 
                       <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                                <Text spacing={0.5} caption style={styles.text_footer}>Free albumin: </Text>
                                <Text spacing={0.5} caption style={styles.textfooter}>{blood.freeAlbumin}</Text>
                       
                                </View>                        
                                ):(<View>

                      </View>
                    )}
                    {blood.leptin >0 ? ( 
                       <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                                <Text spacing={0.5} caption style={styles.text_footer}>Leptin: </Text>
                                <Text spacing={0.5} caption style={styles.textfooter}>{blood.leptin}</Text>
                       
                                </View>                        
                                ):(<View>

                      </View>
                    )}
                    
                    {blood.adiponectin >0 ? ( 
                       <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                                <Text spacing={0.5} caption style={styles.text_footer}>Adiponectin: </Text>
                                <Text spacing={0.5} caption style={styles.textfooter}>{blood.adiponectin}</Text>
                       
                                </View>                        
                                ):(<View>

                      </View>
                    )}
                    {blood.igf1 >0 ? ( 
                       <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                                <Text spacing={0.5} caption style={styles.text_footer}>IGF-1: </Text>
                                <Text spacing={0.5} caption style={styles.textfooter}>{blood.igf1}</Text>
                       
                                </View>                        
                                ):(<View>

                      </View>
                    )}
                    {blood.resistin >0 ? ( 
                       <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                                <Text spacing={0.5} caption style={styles.text_footer}>Resistin: </Text>
                                <Text spacing={0.5} caption style={styles.textfooter}>{blood.resistin}</Text>
                       
                                </View>                        
                                ):(<View>

                      </View>
                    )}
                    {blood.opn >0 ? ( 
                       <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                                <Text spacing={0.5} caption style={styles.text_footer}>OPN: </Text>
                                <Text spacing={0.5} caption style={styles.textfooter}>{blood.opn}</Text>
                       
                                </View>                        
                                ):(<View>

                      </View>
                    )}
                    {blood.orexinA >0 ? ( 
                       <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                                <Text spacing={0.5} caption style={styles.text_footer}>Orexin-A: </Text>
                                <Text spacing={0.5} caption style={styles.textfooter}>{blood.orexinA}</Text>
                       
                                </View>                        
                                ):(<View>

                      </View>
                    )}
                    {blood.melatonin >0 ? ( 
                       <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                                <Text spacing={0.5} caption style={styles.text_footer}>Melatonin: </Text>
                                <Text spacing={0.5} caption style={styles.textfooter}>{blood.melatonin}</Text>
                       
                                </View>                        
                                ):(<View>

                      </View>
                    )}
                    {blood.creatinine >0 ? ( 
                       <View style={{flexDirection: 'row', marginTop: height * 0.02, marginLeft: width * 0.02}}>
                                <Text spacing={0.5} caption style={styles.text_footer}>Creatinine: </Text>
                                <Text spacing={0.5} caption style={styles.textfooter}>{blood.creatinine}</Text>
                       
                                </View>                        
                                ):(<View>

                      </View>
                    )}
                     <Block row space="between" style={{ marginBottom: 16 }}>
                     <TouchableOpacity 
                                
                                 spacing={0.5} caption
                                 onPress={() => navigation.navigate("BloodAnalysisEdit", blood.idBloodAnalyse)}  
                                 key={index}
                       >
                      </TouchableOpacity>
                       
                     </Block> 
                     
                    
             </Card1>
             </View>
            ))}
            </View> : <View></View> }

            </View>
            </SafeAreaView>

        </ScrollView>
    );
}

export default BloodAnalysisHistory;

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
  fontSize: 43,
  marginLeft: width * 0.05,
  marginTop:  height * 0.01,
  },
  headerText: {
    fontSize: 22,
    alignSelf: "center",
    fontWeight: 'bold',
    marginLeft: width * 0.1,
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
    containerThree: {
        backgroundColor: '#fff',
        flex: 1,
        width: width * 0.95,
        alignSelf: "center",
    },
    containerThreee: {
      backgroundColor: '#fff',
      flex: 1,
      width: width * 0.95,
      alignSelf: "center",
      height: height * 0.3
  },
    containerFour: {
      backgroundColor: '#fff',
      flex: 1,
      width: width * 0.95,
      alignSelf: "center",
      height: height * 0.3
    },
    containerSix: {
      backgroundColor: 'red',
      height: height * 0.5,
      marginTop: height * 0.02,
      width: width * 0.95,
      alignSelf: 'center',
      marginBottom: height * 0.05
    },
    dateText:{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#3a3c4e',
      marginTop: - height * 0.038,
      alignSelf: 'center'
    },
    text_footer: {
      color: '#3a3c4e',
      fontSize: 18,
  },
  textfooter: {
    color: '#5C75D9',
    fontWeight: 'bold',
    fontSize: 18,
},
    textStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf:"center",
        marginTop: 20
    },
    detailText: {
        color: '#1C47BE',
        fontSize: 20,
        alignSelf:"center",
        marginTop: 20,
        fontWeight: 'bold'
    },   
    image1: {
        height: width *0.07,
        width: width * 0.07,
        marginLeft: width * 0.7,
        marginBottom: height * 0.02
    },
    image: {
      height: width *0.07,
      width: width * 0.07,
  }
    
});