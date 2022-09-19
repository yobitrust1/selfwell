import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, Dimensions, Alert, LogBox, Image, TouchableHighlight, Modal } from 'react-native';
import { Agenda } from 'react-native-calendars'
import API from '../../API';
import { PieChart } from 'react-native-svg-charts'
import Card1 from '../../components/Card1';
import Block from '../../components/Block';
import { ProgressBar, Colors } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'localstorage-polyfill'; 

const { width, height } = Dimensions.get("window");

const BreakfastFood = props => {

  const {navigation} = props;
  const moment = require('moment');
  const today = moment();
  const [currentDate, setCurrentDate] = useState(today.format("YYYY-MM-DD"));
  const [pressedDate, setPressedDate] = useState(today.format("YYYY-MM-DD"));
  const [value, setValue] = useState('Breakfast');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [items, setItems] = useState([ {label: 'Breakfast', value: 'Breakfast'}, {label: 'Lunch', value: 'Lunch'}, {label: 'Dinner', value: 'Dinner'} ]);
  const [ingredient, setIgredient]= useState(0);
  let controller; 
var back = '<';
  const initialAnalyseState = {
    id: "",
    food: [],
    calories: "",
    fat: "",
    protein: "",
    calcium: "",
    saturatedFats: "",
    fiber: ""
  };
  
  const [breakfastItems, setBreakfastItems] = useState(initialAnalyseState);
  const [lunchItems, setLunchItems] = useState(initialAnalyseState);
  const [dinnerItems, setDinnerItems] = useState(initialAnalyseState);

  
  
  const getfood = async (date) => {
    const idUser = await AsyncStorage.getItem("id");
    
      API.showBreakfast(idUser, date)
      .then(response => {
        setBreakfastItems (response.data);
      })
      .catch(e => {
        console.log(e);
      });
    
    
  };

  useEffect(() => {
    const d = new Date();
    getfood(d);
  }, []);
  useEffect(() => {
    getfood(pressedDate);
  }, [pressedDate]);



  const rowHasChanged = (r1, r2) => {
    return r1.name !== r2.name
    
  }
  const deleteFoodFromBreakfast = async (food, calories, protein, fiber, saturatedFats, calcium, fat, netCarbs, index) => {
    await API.deleteFoodFromBreakfast({food, calories, protein, fiber, saturatedFats, calcium, fat, netCarbs }, breakfastItems.id, index);
    getfood(pressedDate);
  };
  const showAlertDeleteBreakfast = (food, calories, protein, fiber, saturatedFats, calcium, fat, netCarbs, index) => {
    Alert.alert(
        'Confirmation',
        'Sure you want to delete this item ?',
        [
            {
                text: 'Cancel'
            },
            {
                text: 'Delete',
                onPress: () => deleteFoodFromBreakfast(food, calories, protein, fiber, saturatedFats, calcium, fat, netCarbs, index)
            },
        ],
    )
  }

  
  
  const navigateToBreakfast = async () => {
    localStorage.setItem("value", 'Breakfast');
    navigation.navigate('SearchFood');    
  };

  if ((ingredient == 10) || (ingredient == 11) || (ingredient == 12) ) {
    setTimeout(() => {
      setModalVisible1(false)
    }, 4000);         
  }
  if ((ingredient == 9) || (ingredient == 8) || (ingredient == 7) ) {
    setTimeout(() => {
      setModalVisible2(false)
    }, 4000);         
  }
  if ((ingredient == 6) || (ingredient == 5) || (ingredient == 4) ) {
    setTimeout(() => {
      setModalVisible3(false)
    }, 4000);         
  }
  if ((ingredient == 3) || (ingredient == 2) || (ingredient == 1) ) {
    setTimeout(() => {
      setModalVisible4(false)
    }, 4000);         
  }
    return (
   
      <SafeAreaView>
        <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible1}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
        <Text style={styles.headline}>Great job</Text>
        <Image
                      style={{height : height * 0.4, width : width * 0.9, alignSelf: 'center', marginTop: height * 0.01}}
                      source={require('../../assets/great.gif')}/>
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.headline}>your ate</Text>
                <Text style={[styles.number, {
                      color: '#3cc196'
                  }]}> {ingredient}</Text>
            </View>
          </View>
        
      </View>
    </Modal>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible2}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
        <Text style={styles.headline}>Good job</Text>
        <Image
                      style={{height : height * 0.4, width : width * 0.9, alignSelf: 'center', marginTop: height * 0.01}}
                      source={require('../../assets/good.gif')}/>
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.headline}>your ate</Text>
                <Text style={[styles.number, {
                      color: '#3cc196'
                  }]}> {ingredient}</Text>
            </View>
          </View>
        
      </View>
    </Modal>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible3}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
        <Text style={styles.headline}>Not too bad</Text>
        <Image
                      style={{height : height * 0.4, width : width * 0.9, alignSelf: 'center', marginTop: height * 0.01}}
                      source={require('../../assets/sorry.gif')}/>
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.headline}>your ate</Text>
                <Text style={[styles.number, {
                      color: '#3cc196'
                  }]}> {ingredient}</Text>
            </View>
          </View>
        
      </View>
    </Modal>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible4}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
        <Text style={styles.headline}>Poor meal</Text>
        <Image
                      style={{height : height * 0.4, width : width * 0.9, alignSelf: 'center', marginTop: height * 0.01}}
                      source={require('../../assets/bad.gif')}/>
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.headline}>your ate</Text>
                <Text style={[styles.number, {
                      color: '#3cc196'
                  }]}> {ingredient}</Text>
            </View>
          </View>
        
      </View>
    </Modal>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
          <TouchableOpacity 
                                 onPress={ () => setModalVisible(!modalVisible)}
                       >
                              <Image source={require('../../assets/x-button.png')} style={styles.image1}/>  
                      </TouchableOpacity>
        <View style={styles.centeredView}>
       
       
             <View style={styles.modalView}>
               
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.title}>{value} ingredients</Text>
                
                       
                       </View>
                      <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity 
                       style={{width: width * 0.25, height: height*0.15, backgroundColor: '#F70000',marginTop: height *0.05 }}
                                 onPress={() => {setModalVisible(!modalVisible); setIgredient(1); setModalVisible4(true) }}
                       >
                              <Text style={styles.ingText}>1</Text>  
                      </TouchableOpacity>
                      <TouchableOpacity 
                       style={{width: width * 0.25, height: height*0.15, backgroundColor: 'orange',marginTop: height *0.05 }}
                                 onPress={ () => {setModalVisible(!modalVisible); setIgredient(2); setModalVisible4(true) }}
                       >
                              <Text style={styles.ingText}>2</Text>  
                      </TouchableOpacity>
                      <TouchableOpacity 
                       style={{width: width * 0.25, height: height*0.15, backgroundColor: 'yellow',marginTop: height *0.05 }}
                                 onPress={ () => {setModalVisible(!modalVisible); setIgredient(3); setModalVisible4(true) }}
                       >
                              <Text style={styles.ingText}>3</Text>  
                      </TouchableOpacity>
                      </View>
                       
                      <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity 
                       style={{width: width * 0.25, height: height*0.15, backgroundColor: '#00FF00' }}
                                 onPress={ () => {setModalVisible(!modalVisible); setIgredient(4); setModalVisible3(true) }}
                       >
                              <Text style={styles.ingText}>4</Text>  
                      </TouchableOpacity>
                      <TouchableOpacity 
                       style={{width: width * 0.25, height: height*0.15, backgroundColor: '#00BC00' }}
                                 onPress={ () => {setModalVisible(!modalVisible); setIgredient(5); setModalVisible3(true) }}
                       >
                              <Text style={styles.ingText}>5</Text>  
                      </TouchableOpacity>
                      <TouchableOpacity 
                       style={{width: width * 0.25, height: height*0.15, backgroundColor: '#00FF77'}}
                                 onPress={ () => {setModalVisible(!modalVisible); setIgredient(6); setModalVisible3(true) }}
                       >
                              <Text style={styles.ingText}>6</Text>  
                      </TouchableOpacity>
                      </View>

                      <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity 
                       style={{width: width * 0.25, height: height*0.15, backgroundColor: '#00FFFF' }}
                                 onPress={ () => {setModalVisible(!modalVisible); setIgredient(7); setModalVisible2(true) }}
                       >
                              <Text style={styles.ingText}>7</Text>  
                      </TouchableOpacity>
                      <TouchableOpacity 
                       style={{width: width * 0.25, height: height*0.15, backgroundColor: '#4554FF' }}
                                 onPress={ () => {setModalVisible(!modalVisible); setIgredient(8); setModalVisible2(true) }}
                       >
                              <Text style={styles.ingText}>8</Text>  
                      </TouchableOpacity>
                      <TouchableOpacity 
                       style={{width: width * 0.25, height: height*0.15, backgroundColor: '#5D00FF'}}
                                 onPress={ () => {setModalVisible(!modalVisible); setIgredient(9); setModalVisible2(true) }}
                       >
                              <Text style={styles.ingText}>9</Text>  
                      </TouchableOpacity>
                      </View>

                      <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity 
                       style={{width: width * 0.25, height: height*0.15, backgroundColor: '#9E00FF' }}
                                 onPress={ () =>{setModalVisible(!modalVisible); setIgredient(10); setModalVisible1(true) }}
                       >
                              <Text style={styles.ingText}>10</Text>  
                      </TouchableOpacity>
                      <TouchableOpacity 
                       style={{width: width * 0.25, height: height*0.15, backgroundColor: '#FF00FF' }}
                                 onPress={ () => {setModalVisible(!modalVisible); setIgredient(11); setModalVisible1(true) }}
                       >
                              <Text style={styles.ingText}>11</Text>  
                      </TouchableOpacity>
                      <TouchableOpacity 
                       style={{width: width * 0.25, height: height*0.15, backgroundColor: '#FF007C'}}
                                 onPress={ () => {setModalVisible(!modalVisible); setIgredient(12); setModalVisible1(true) }}
                       >
                              <Text style={styles.ingText}>12</Text>  
                      </TouchableOpacity>
                      </View>
  </View> 
         
        </View>
      </Modal>
        <View style={styles.containerOne}>
          <View style={styles.header}>
          <TouchableOpacity onPress={() => {navigation.navigate('DailyFood'), setValue('Breakfast')}}>
            <Text style={styles.back}>{back}</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>{value}</Text>
          </View>
              <View style={styles.container}>
                
              <Agenda
              style={{

              }}
              // Specify theme properties to override specific styles for calendar parts. Default = {}
              theme={{
                backgroundColor: '#57BED1',
                calendarBackground: '#57BED1',
                textSectionTitleColor: '#fff',
                textSectionTitleDisabledColor: '#fff',
                selectedDayBackgroundColor: '#fff',
                selectedDayTextColor: '#57BED1',
                todayTextColor: '#a7a8ad',
                dayTextColor: '#ffffff',
                textDisabledColor: '#ffffff',
                dotColor: '#ffffff',
                selectedDotColor: '#ffffff',
                arrowColor: 'orange',
                disabledArrowColor: '#ffffff',
                monthTextColor: '#ffffff',
                textDayFontFamily: 'monospace',
                textMonthFontFamily: 'monospace',
                textDayHeaderFontFamily: 'monospace',
                textDayFontWeight: '300',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: '300',
                textDayFontSize: 14,
                textMonthFontSize: 14,
                textDayHeaderFontSize: 14,
                agendaKnobColor: '#ffffff'
              }}
              hideArrows={true}
              selected={currentDate}
              renderEmptyDate={() => <View />}
              rowHasChanged={rowHasChanged}
              onDayPress={(date)=>{setPressedDate(date.dateString), getfood(pressedDate)}}
              hideKnob={false}
              enableSwipeMonths={true}
              />
              </View>
      </View>
      
     <ScrollView style={styles.containerTwo}>
       {value=='Breakfast' ?
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
        
        
<TouchableOpacity style={styles.tab}
           onPress={() => setModalVisible(true)}>
           <Text style={styles.tabText}>Ingredients</Text>
         </TouchableOpacity>
        </View>
     
{breakfastItems ? ( 
  <ScrollView>
    
<View style={styles.containerThree}>
{breakfastItems &&
           breakfastItems.food.map((breakfast, index) => (
             <Card1  key={index} style={styles.card}>
               
                    <Block row space="between">
                      <Text style={{color: 'black', fontSize: 16}}>{breakfast.name}</Text>
                      <TouchableOpacity 
                                spacing={0.5} caption
                                onPress={() => {showAlertDeleteBreakfast([breakfast], breakfast.calories, breakfast.protein, breakfast.fiber,
                                  breakfast.saturatedFats, breakfast.calcium, breakfast.fat, breakfast.netCarbs, index)}}
                      >
                        <Text spacing={0.5} caption style={styles.points}>...</Text>
                     </TouchableOpacity>
                    </Block>
                    <Block row space="between">
                      <Text spacing={0.5} caption ></Text>
                      <Text style={styles.textCalories}>{breakfast.calories}</Text>
                    </Block>
            </Card1>
           ))}
    
           <Text style={styles.textCalories}>{"\n"}{parseFloat(breakfastItems.calories).toFixed(0)} cals</Text>
           <TouchableOpacity
                     
                      onPress={() => {navigateToBreakfast()}}
                  >
                 <Image source={require('../../assets/add.png')} style={styles.icon}/>
                  </TouchableOpacity>
           </View>
           <View style={styles.containerFour}>
             <Text style={styles.meal}>Meal totals:</Text> 
             <View style={{flex: 1, flexDirection: 'row', marginTop: height * 0.03 , marginLeft:width * 0.05}}>
             <Text>Calories:</Text>
             <View style={{flex: 1, flexDirection: 'column',  marginLeft:width * 0.05}}>
               <Text>{(parseFloat(breakfastItems.calories)).toFixed(0)} cals, {(((parseFloat(breakfastItems.calories)).toFixed(2)*100)/1800).toFixed(0)}%</Text>
               <ProgressBar progress={(breakfastItems.calories)/1800} color={Colors.green300} width={width * 0.5} />
             </View>
             </View>  
             <View style={{flex: 1, flexDirection: 'row', marginTop: height * 0.03 , marginLeft:width * 0.05}}>
             <View style={{flex: 1, flexDirection: 'column', marginTop: height * 0.05 , marginLeft:width * 0.01}}>
             <Text>Protein: {(((parseFloat(breakfastItems.protein)).toFixed(2)*100)/94).toFixed(0)}%</Text>
             <ProgressBar progress={(parseFloat(breakfastItems.protein)).toFixed(2)/94} color={Colors.green500} width={width * 0.25} />
             <Text>{(parseFloat(breakfastItems.protein)).toFixed(2)}g</Text>
           </View>
           <View style={{flex: 1, flexDirection: 'column', marginTop: height * 0.05 , marginLeft:width * 0.01}}>
             <Text>Carbs: {(((parseFloat(breakfastItems.netCarbs)).toFixed(2)*100)/212).toFixed(0)}%</Text>
             <ProgressBar progress={(breakfastItems.netCarbs)/212} color={Colors.green500} width={width * 0.25} />
             <Text>{(parseFloat(breakfastItems.netCarbs)).toFixed(2)}cals</Text>
           </View>
           <View style={{flex: 1, flexDirection: 'column', marginTop: height * 0.05 , marginLeft:width * 0.01}}>
             <Text>Fat: {(((parseFloat(breakfastItems.fat)).toFixed(2)*100)/73).toFixed(0)}%</Text>
             <ProgressBar progress={(breakfastItems.fat)/73} color={Colors.green500} width={width * 0.25} />
             <Text>{(parseFloat(breakfastItems.fat)).toFixed(2)}cals</Text>
           </View>
           </View>
             <View style={{flexDirection: 'row', alignItems: 'center' }}>
                 <PieChart
                 style={{ height: 200, width: 200}}
                 outerRadius={'70%'}
                 innerRadius={1}
                 data={[
                   {
                     key: 1,
                     value: parseFloat(breakfastItems.protein),
                     svg: { fill: '#3bafda' }, 
                     arc: { cornerRadius: 1, }
                   },
                   {
                     key: 2,
                     value:parseFloat(breakfastItems.netCarbs),
                     svg: { fill: '#ff6c87' }, 
                     arc: { cornerRadius: 1, }
                   },
                   {
                     key: 3,
                     value:parseFloat(breakfastItems.fat),
                     svg: { fill: 'gold' }, 
                     arc: { cornerRadius: 1, }
                   }
                 ]}
                 />
               
               <View style={{flex: 1, flexDirection: 'column', marginBottom: height * 0.12, marginTop: height*0.05, alignSelf: 'center'}}>
                 <Text>{"\n"}</Text>
               <View style={{flex: 1, flexDirection: 'row' }}>
                 <Text style={{color: '#3bafda', fontWeight: 'bold', fontSize: 16}}>Protein: </Text>
                 <Text style={{color: 'black', fontSize: 16}}>{(parseFloat(breakfastItems.protein)).toFixed(2)}g</Text>
               </View>
               <View style={{flex: 1, flexDirection: 'row' }}>
                 <Text style={{color: '#ff6c87', fontWeight: 'bold', fontSize: 16}}>Carbs: </Text>
                 <Text style={{color: 'black', fontSize: 16}}>{(parseFloat(breakfastItems.netCarbs)).toFixed(2)}g</Text>
               </View>
               <View style={{flex: 1, flexDirection: 'row' }}>
                 <Text style={{color: 'gold', fontWeight: 'bold', fontSize: 16}}>Fat: </Text>
                 <Text style={{color: 'black', fontSize: 16}}>{(parseFloat(breakfastItems.fat)).toFixed(2)}g</Text>
               </View>
          
               </View>
             </View> 
         </View>
         
         <View style={styles.containerFive}>
           <Text style={styles.meal}>Nutritions:</Text>  
           <View style={{flex: 1, flexDirection: 'row', marginLeft: width * 0.05, marginTop: height * 0.02 }}>
             <Text style={{color: 'black', fontSize: 15.5}}>Calcium: </Text>
             <Text style={{color: 'green', fontSize: 15.5, paddingLeft: width * 0.02}}>{(parseFloat(breakfastItems.calcium)).toFixed(2)}g</Text>
           </View>
           <View style={{flex: 1, flexDirection: 'row', marginLeft: width * 0.05, marginTop: height * 0.02 }}>
             <Text style={{color: 'black', fontSize: 15.5}}>Fiber: </Text>
             <Text style={{color: 'darkorange', fontSize: 15.5, paddingLeft: width * 0.02}}>{(parseFloat(breakfastItems.fiber)).toFixed(2)}g</Text>
           </View>
           <View style={{flex: 1, flexDirection: 'row', marginLeft: width * 0.05, marginTop: height * 0.02 }}>
               <Text style={{color: 'black', fontSize: 15.5}}>Saturated fats: </Text>
               <Text style={{color: 'gold', fontSize: 15.5, paddingLeft: width * 0.02}}>{(parseFloat(breakfastItems.saturatedFats)).toFixed(2)}g</Text>
           </View>
           </View>
           </ScrollView>) : (<ScrollView>
             <View style={styles.containerSix}>
               <View style={{alignSelf: 'center', alignContent: 'center', marginTop: height * 0.05}}>
             <TouchableOpacity onPress={() =>  navigateToBreakfast()} >
             <Text style={styles.cardText}>   No data found..</Text>
             <TouchableOpacity onPress={ () => navigateToBreakfast()}>
             <Text style={styles.cardText}>Add and Log Food</Text>
          </TouchableOpacity>
              
             </TouchableOpacity> 
             </View>
             </View>
            </ScrollView>)}
           </ScrollView>: <View></View> }

          
       </ScrollView>
     
     </SafeAreaView>
     
    )
  
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.3,
    width: width * 1,
    //marginTop: height * 0.05,
    alignSelf: 'center',
    
  },
  header: {
    backgroundColor: '#57BED1',
    height: height * 0.1,
    width: width,
    flexDirection: 'row'
  },
  containerOne: {
   marginTop: height * 0,
    flex: 1,
    height: height * 0.45,
    width: width,
  },
  containerTwo: {
    marginTop: height * 0.3,
    backgroundColor: '#f5f7fa',
  },
  containerThree: {
    backgroundColor: '#fff',
    marginTop: height * 0.02,
    width: width * 0.95,
    alignSelf: 'center',
    marginBottom: height * 0.05
  },
  containerFour: {
    marginTop: height * 0.01, 
    backgroundColor: '#fff',
    width: width * 0.95,
    alignSelf: 'center',
    marginBottom: height * 0.05
  },
  containerFive: {
    marginTop: height * 0.01, 
    backgroundColor: '#fff',
    width: width * 0.95,
    alignSelf: 'center',
    marginBottom: height * 0.6
  },
  containerSix: {
    backgroundColor: '#fff',
    height: height * 0.5,
    marginTop: height * 0.02,
    width: width * 0.95,
    alignSelf: 'center',
    marginBottom: height * 0.05
  },
  card: {
    backgroundColor: '#fff',
    height: height * 0.2,
    width: width * 0.90,
    marginBottom: - height * 0.03,
    alignSelf: "center"
  },
  cardText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: width * 0.15
  },
  points: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  textBreakfast: {
    color: '#3eb5a0',
    fontWeight: 'bold',
    fontSize: 24,
    alignSelf: 'center',
    paddingTop: height * 0.05
  },
  textCalories: {
    color: '#48c27d',
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: width * 0.5
  },
  itemText: {
    color: '#000000',
    fontSize: 16,
    alignSelf: 'center'
  },
  back: {
    color: '#fff',
    fontSize: 60,
    marginLeft: width * 0.05,
    marginTop: - height * 0.02,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: width * 0.15,
    marginTop: height *0.02
  },
  meal: {
    color: '#656d78',
    fontSize: 14,
    paddingTop: height * 0.02,
    paddingLeft: width * 0.02
  },
  progressBar: {
    height: 20,
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5
  },
  tab: {
    flex: 1,
    backgroundColor: '#fff',
    width: width *0.3,
    height: height * 0.05,
    marginLeft: width * 0.05,
    marginRight: width*0.02,
    marginTop: height * 0.03,
    borderRadius: 10,
    alignContent: 'center',
    alignItems: 'center'
  },
  tabText: {
    color: '#56BED1',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  ingText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: height * 0.03
  },
  icon: {
    height: height * 0.09,
    width: width * 0.15,
    marginBottom: height * 0.05,
    marginLeft: width * 0.05
  },
  backIcon: {
    height: height * 0.06,
    width: width * 0.15,
    marginLeft: width * 0.02,
    marginBottom: - height * 0.05
  },
  image1: {
    height: width *0.08,
    width: width * 0.08,
    marginLeft: width * 0.9,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    height: height * 0.85,
    width: width * 0.9,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
})

export default BreakfastFood;