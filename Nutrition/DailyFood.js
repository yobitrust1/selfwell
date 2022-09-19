import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, Dimensions, StatusBar, LogBox, Image } from 'react-native';
import { Agenda } from 'react-native-calendars'
import API from '../../API';
import { PieChart } from 'react-native-svg-charts'
import Card1 from '../../components/Card1';
import Block from '../../components/Block';
import { ProgressBar, Colors } from 'react-native-paper';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'localstorage-polyfill'; 
const { width, height } = Dimensions.get("window");

var caloriesBudget;

const DailyFood = props => {
 
  const {navigation} = props;
  const moment = require('moment');
  const today = moment();
  const [currentDate, setCurrentDate] = useState(today.format("YYYY-MM-DD"));
  const [pressedDate, setPressedDate] = useState(today.format("YYYY-MM-DD"));
  const [value, setValue] = useState('');

  const initialAnalyseState = {
    id: "",
    food: [],
    calories: "0",
    fat: "0",
    protein: "0",
    calcium: "0",
    saturatedFats: "0",
    fiber: "0"
  };
  
  const [breakfastItems, setBreakfastItems] = useState(initialAnalyseState);
  const [lunchItems, setLunchItems] = useState(initialAnalyseState);
  const [dinnerItems, setDinnerItems] = useState(initialAnalyseState);
  var back = '<';
  const getBreakfast = async (date) => {
      const idUser = await AsyncStorage.getItem("id");
      API.showBreakfast(idUser, date)
      .then(response => {
        setBreakfastItems (response.data);
      })
      .catch(e => {
        console.log(e);
      });
    };

    const getLunch = async (date) => {
      const idUser = await AsyncStorage.getItem("id");
      API.showLunch(idUser, date)
      .then(response => {
        setLunchItems (response.data);
      })
      .catch(e => {
        console.log(e);
      });
    };
var idUser= '';
    const getDinner = async (date) => {
       idUser = await AsyncStorage.getItem("id");
      API.showDinner(idUser, date)
      .then(response => {
        setDinnerItems (response.data);
      })
      .catch(e => {
        console.log(e);
      });
    };
    useEffect(() => {
      const d = new Date();
      getBreakfast(d);
      getLunch(d);
      getDinner(d);
      LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
      localStorage.clear("valuetest");
     }, []);
    useEffect(() => {
      getBreakfast(pressedDate);
      getLunch(pressedDate);
      getDinner(pressedDate);
      LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
      localStorage.clear("value");
     }, [pressedDate]);

    const navigateToBreakfast = async (val) => {
      setValue(val);
      const idUser = await AsyncStorage.getItem("id");
      localStorage.clear("value");
      localStorage.setItem("value", 'Breakfast');
      navigation.navigate("BreakfastFood", {value});
      
    };

    const navigateToLunch = async () => {
      const idUser = await AsyncStorage.getItem("id");
      localStorage.clear("value");
      localStorage.setItem("value", 'Lunch');
      navigation.navigate("LunchFood", {value});
    };

    const navigateToDinner = async () => {
      const idUser = await AsyncStorage.getItem("id");
      localStorage.clear("value");
      localStorage.setItem("value", 'Dinner');
      navigation.navigate("DinnerFood", {value});
    };



  const rowHasChanged = (r1, r2) => {
    return r1.name !== r2.name
    
  }

  return (
   
    <SafeAreaView>
      <StatusBar backgroundColor='#57BED1' barStyle="light-content"/>
      <View style={styles.containerOne}>
      <View style={styles.header}>
          <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
            <Text style={styles.back}>{back}</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>Daily food</Text>
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
            onDayPress={(date)=>{setPressedDate(date.dateString), 
            getBreakfast(pressedDate), getLunch(pressedDate), getDinner(pressedDate)}}
            hideKnob={false}
            enableSwipeMonths={true}
            />
            </View>
    </View>
    
   <ScrollView style={styles.containerTwo}>
       <View style={styles.containerThree}>
       
       <TouchableOpacity  onPress={()=> navigateToBreakfast("Breakfast")}>  
       <Card1 style={styles.card}>
       {breakfastItems   ? ( 
       
               <Block row space="between">
                 
               <View style={{flex: 1, flexDirection: 'row'}}>
               <Image source={require('../../assets/breakfast.png')} style={styles.icon}/>
              <Text style={styles.itemText}>Breakfast</Text>
               </View>
               
              <Text style={styles.caloriesText}>{breakfastItems.calories} cals</Text>
              </Block>
              
          ) : (
            <Block row space="between">
            <View style={{flex: 1, flexDirection: 'row'}}>
            <Image source={require('../../assets/breakfast.png')} style={styles.icon}/>
           <Text style={styles.itemText}>Breakfast</Text>
            </View>
           
           <Text style={styles.caloriesText}>0 cals</Text>
           </Block>
          )}
               
       </Card1>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() =>  navigateToLunch()} >
       <Card1 style={styles.card}>
       {lunchItems ? ( 
               <Block row space="between">
                 
               <View style={{flex: 1, flexDirection: 'row'}}>
               <Image source={require('../../assets/waiting.png')} style={styles.icon}/>
              <Text style={styles.itemText}>Lunch</Text>
               </View>
               
              <Text style={styles.caloriesText}>{lunchItems.calories} cals</Text>
              </Block>
          ) : (
            <Block row space="between">
            <View style={{flex: 1, flexDirection: 'row'}}>
            <Image source={require('../../assets/waiting.png')} style={styles.icon}/>
           <Text style={styles.itemText}>Lunch</Text>
            </View>
           
           <Text style={styles.caloriesText}>0 cals</Text>
           </Block>
          )}
               
       </Card1>
       </TouchableOpacity>

       <TouchableOpacity  onPress={() =>  navigateToDinner()} >
       <Card1 style={styles.card}>
       {dinnerItems ? ( 
               <Block row space="between">
                 
               <View style={{flex: 1, flexDirection: 'row'}}>
               <Image source={require('../../assets/omelette.png')} style={styles.icon}/>
              <Text style={styles.itemText}>Dinner</Text>
               </View>
              <Text style={styles.caloriesText}>{dinnerItems.calories} cals</Text>
              </Block>
          ) : (
            <Block row space="between">
            <View style={{flex: 1, flexDirection: 'row'}}>
            <Image source={require('../../assets/omelette.png')} style={styles.icon}/>
           <Text style={styles.itemText}>Dinner</Text>
            </View>
           
           <Text style={styles.caloriesText}>0 cals</Text>
           </Block>
          )}
               
       </Card1>
      </TouchableOpacity>
       </View>
       {breakfastItems && lunchItems && dinnerItems ? ( 
       <View style={styles.containerFour}>
         <View style={{alignContent:"center", alignItems: "center", marginTop: height * 0.02, marginBottom: height * 0.02}}>
         <AnimatedCircularProgress
          size={1800/10}
          width={15}
          fill={(((parseFloat(breakfastItems.calories) + parseFloat(lunchItems.calories) + parseFloat(dinnerItems.calories)).toFixed(2))/1800)*100}
          tintColor="#00e0ff"
          backgroundColor="white"
          rotation={360}
          duration={1000}
        >
          {(fill) => <Text style={styles.circleText}>Total calories: {(parseFloat(breakfastItems.calories) + parseFloat(lunchItems.calories) + parseFloat(dinnerItems.calories)).toFixed(0)} cals</Text>}
        </AnimatedCircularProgress>
         </View>
         
             <Text style={styles.meal}>Meal totals:</Text> 
             <View style={{flex: 1, flexDirection: 'row', marginTop: height * 0.03 , marginLeft:width * 0.05}}>
             <Text>Calories:</Text>
             <View style={{flex: 1, flexDirection: 'column',  marginLeft:width * 0.05}}>
               <Text>{(parseFloat(breakfastItems.calories) + parseFloat(lunchItems.calories) + parseFloat(dinnerItems.calories)).toFixed(0)} cals, 
               {(((parseFloat(breakfastItems.calories) + parseFloat(lunchItems.calories) + parseFloat(dinnerItems.calories)).toFixed(2)*100)/1800).toFixed(0)}%</Text>
               <ProgressBar progress={((parseFloat(breakfastItems.calories) + parseFloat(lunchItems.calories) + parseFloat(dinnerItems.calories)).toFixed(2))/1800} color={Colors.green300} width={width * 0.5} />
             </View>
             </View>  
             <View style={{flex: 1, flexDirection: 'row', marginTop: height * 0.03 , marginLeft:width * 0.05}}>
             <View style={{flex: 1, flexDirection: 'column', marginTop: height * 0.05 , marginLeft:width * 0.01}}>
             <Text>Protein: {(((parseFloat(breakfastItems.protein) + parseFloat(lunchItems.protein) + parseFloat(dinnerItems.protein)).toFixed(2)*100)/94).toFixed(0)}%</Text>
             <ProgressBar progress={(parseFloat(breakfastItems.protein) + parseFloat(lunchItems.protein) + parseFloat(dinnerItems.protein)).toFixed(2)/94} color={Colors.green500} width={width * 0.25} />
             <Text>{(parseFloat(breakfastItems.protein) + parseFloat(lunchItems.protein) + parseFloat(dinnerItems.protein)).toFixed(2)}g</Text>
           </View>
           <View style={{flex: 1, flexDirection: 'column', marginTop: height * 0.05 , marginLeft:width * 0.01}}>
             <Text>Carbs: {(((parseFloat(breakfastItems.netCarbs) + parseFloat(lunchItems.netCarbs) + parseFloat(dinnerItems.netCarbs)).toFixed(2)*100)/212).toFixed(0)}%</Text>
             <ProgressBar progress={((parseFloat(breakfastItems.netCarbs) + parseFloat(lunchItems.netCarbs) + parseFloat(dinnerItems.netCarbs)).toFixed(2))/212} color={Colors.green500} width={width * 0.25} />
             <Text>{(parseFloat(breakfastItems.netCarbs) + parseFloat(lunchItems.netCarbs) + parseFloat(dinnerItems.netCarbs)).toFixed(2)}g</Text>
           </View>
           <View style={{flex: 1, flexDirection: 'column', marginTop: height * 0.05 , marginLeft:width * 0.01}}>
             <Text>Fat: {(((parseFloat(breakfastItems.netCarbs) + parseFloat(lunchItems.netCarbs) + parseFloat(dinnerItems.netCarbs)).toFixed(2)*100)/73).toFixed(0)}%</Text>
             <ProgressBar progress={(parseFloat(breakfastItems.netCarbs) + parseFloat(lunchItems.netCarbs) + parseFloat(dinnerItems.netCarbs))/73} color={Colors.green500} width={width * 0.25} />
             <Text>{(parseFloat(breakfastItems.netCarbs) + parseFloat(lunchItems.netCarbs) + parseFloat(dinnerItems.netCarbs)).toFixed(2)}cals</Text>
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
                     value: (parseFloat(breakfastItems.protein) + parseFloat(lunchItems.protein) + parseFloat(dinnerItems.protein)),
                     svg: { fill: '#3bafda' }, 
                     arc: { cornerRadius: 1, }
                   },
                   {
                     key: 2,
                     value:(parseFloat(breakfastItems.netCarbs) + parseFloat(lunchItems.netCarbs) + parseFloat(dinnerItems.netCarbs)),
                     svg: { fill: '#ff6c87' }, 
                     arc: { cornerRadius: 1, }
                   },
                   {
                     key: 3,
                     value:(parseFloat(breakfastItems.fat) + parseFloat(lunchItems.fat) + parseFloat(dinnerItems.fat)),
                     svg: { fill: 'gold' }, 
                     arc: { cornerRadius: 1, }
                   }
                 ]}
                 />
               
               <View style={{flex: 1, flexDirection: 'column', marginBottom: height * 0.12, marginTop: height*0.05, alignSelf: 'center'}}>
                 <Text>{"\n"}</Text>
               <View style={{flex: 1, flexDirection: 'row' }}>
                 <Text style={{color: '#3bafda', fontWeight: 'bold', fontSize: 16}}>Protein: </Text>
                 <Text style={{color: 'black', fontSize: 16}}>{(parseFloat(breakfastItems.protein) + parseFloat(lunchItems.protein) + parseFloat(dinnerItems.protein)).toFixed(2)}g</Text>
               </View>
               <View style={{flex: 1, flexDirection: 'row' }}>
                 <Text style={{color: '#ff6c87', fontWeight: 'bold', fontSize: 16}}>Carbs: </Text>
                 <Text style={{color: 'black', fontSize: 16}}>{(parseFloat(breakfastItems.netCarbs) + parseFloat(lunchItems.netCarbs) + parseFloat(dinnerItems.netCarbs)).toFixed(2)}g</Text>
               </View>
               <View style={{flex: 1, flexDirection: 'row' }}>
                 <Text style={{color: 'gold', fontWeight: 'bold', fontSize: 16}}>Fat: </Text>
                 <Text style={{color: 'black', fontSize: 16}}>{(parseFloat(breakfastItems.fat) + parseFloat(lunchItems.fat) + parseFloat(dinnerItems.fat)).toFixed(2)}g</Text>
               </View>
          
               </View>
             </View> 
         </View> ) : (lunchItems && dinnerItems ? ( 
       <View style={styles.containerFour}>
          <View style={{alignContent:"center", alignItems: "center", marginTop: height * 0.02, marginBottom: height * 0.02}}>
         <AnimatedCircularProgress
          size={1800/10}
          width={15}
          fill={(((parseFloat(lunchItems.calories) + parseFloat(dinnerItems.calories)).toFixed(2))/1800)*100}
          tintColor="#00e0ff"
          backgroundColor="white"
          rotation={360}
          duration={1000}
        >
          {(fill) => <Text style={styles.circleText}>Total calories: {(parseFloat(lunchItems.calories) + parseFloat(dinnerItems.calories)).toFixed(0)} cals</Text>}
        </AnimatedCircularProgress>
         </View>
             <Text style={styles.meal}>Meal totals:</Text> 
             <View style={{flex: 1, flexDirection: 'row', marginTop: height * 0.03 , marginLeft:width * 0.05}}>
             <Text>Calories:</Text>
             <View style={{flex: 1, flexDirection: 'column',  marginLeft:width * 0.05}}>
               <Text>{(parseFloat(lunchItems.calories) + parseFloat(dinnerItems.calories)).toFixed(0)} cals, 
               {(((parseFloat(lunchItems.calories) + parseFloat(dinnerItems.calories)).toFixed(2)*100)/1800).toFixed(0)}%</Text>
               <ProgressBar progress={((parseFloat(lunchItems.calories) + parseFloat(dinnerItems.calories)).toFixed(2))/1800} color={Colors.green300} width={width * 0.5} />
             </View>
             </View>  
             <View style={{flex: 1, flexDirection: 'row', marginTop: height * 0.03 , marginLeft:width * 0.05}}>
             <View style={{flex: 1, flexDirection: 'column', marginTop: height * 0.05 , marginLeft:width * 0.01}}>
             <Text>Protein: {(((parseFloat(lunchItems.protein) + parseFloat(dinnerItems.protein)).toFixed(2)*100)/94).toFixed(0)}%</Text>
             <ProgressBar progress={(parseFloat(lunchItems.protein) + parseFloat(dinnerItems.protein)).toFixed(2)/94} color={Colors.green500} width={width * 0.25} />
             <Text>{(parseFloat(lunchItems.protein) + parseFloat(dinnerItems.protein)).toFixed(2)}g</Text>
           </View>
           <View style={{flex: 1, flexDirection: 'column', marginTop: height * 0.05 , marginLeft:width * 0.01}}>
             <Text>Carbs: {(((parseFloat(lunchItems.netCarbs) + parseFloat(dinnerItems.netCarbs)).toFixed(2)*100)/212).toFixed(0)}%</Text>
             <ProgressBar progress={((parseFloat(lunchItems.netCarbs) + parseFloat(dinnerItems.netCarbs)).toFixed(2))/212} color={Colors.green500} width={width * 0.25} />
             <Text>{(parseFloat(lunchItems.netCarbs) + parseFloat(dinnerItems.netCarbs)).toFixed(2)}g</Text>
           </View>
           <View style={{flex: 1, flexDirection: 'column', marginTop: height * 0.05 , marginLeft:width * 0.01}}>
             <Text>Fat: {(((parseFloat(lunchItems.netCarbs) + parseFloat(dinnerItems.netCarbs)).toFixed(2)*100)/73).toFixed(0)}%</Text>
             <ProgressBar progress={(parseFloat(lunchItems.netCarbs) + parseFloat(dinnerItems.netCarbs))/73} color={Colors.green500} width={width * 0.25} />
             <Text>{(parseFloat(lunchItems.netCarbs) + parseFloat(dinnerItems.netCarbs)).toFixed(2)}cals</Text>
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
                     value: (parseFloat(lunchItems.protein) + parseFloat(dinnerItems.protein)),
                     svg: { fill: '#3bafda' }, 
                     arc: { cornerRadius: 1, }
                   },
                   {
                     key: 2,
                     value:(parseFloat(lunchItems.netCarbs) + parseFloat(dinnerItems.netCarbs)),
                     svg: { fill: '#ff6c87' }, 
                     arc: { cornerRadius: 1, }
                   },
                   {
                     key: 3,
                     value:( parseFloat(lunchItems.fat) + parseFloat(dinnerItems.fat)),
                     svg: { fill: 'gold' }, 
                     arc: { cornerRadius: 1, }
                   }
                 ]}
                 />
               
               <View style={{flex: 1, flexDirection: 'column', marginBottom: height * 0.12, marginTop: height*0.05, alignSelf: 'center'}}>
                 <Text>{"\n"}</Text>
               <View style={{flex: 1, flexDirection: 'row' }}>
                 <Text style={{color: '#3bafda', fontWeight: 'bold', fontSize: 16}}>Protein: </Text>
                 <Text style={{color: 'black', fontSize: 16}}>{(parseFloat(lunchItems.protein) + parseFloat(dinnerItems.protein)).toFixed(2)}g</Text>
               </View>
               <View style={{flex: 1, flexDirection: 'row' }}>
                 <Text style={{color: '#ff6c87', fontWeight: 'bold', fontSize: 16}}>Carbs: </Text>
                 <Text style={{color: 'black', fontSize: 16}}>{(parseFloat(lunchItems.netCarbs) + parseFloat(dinnerItems.netCarbs)).toFixed(2)}g</Text>
               </View>
               <View style={{flex: 1, flexDirection: 'row' }}>
                 <Text style={{color: 'gold', fontWeight: 'bold', fontSize: 16}}>Fat: </Text>
                 <Text style={{color: 'black', fontSize: 16}}>{(parseFloat(lunchItems.fat) + parseFloat(dinnerItems.fat)).toFixed(2)}g</Text>
               </View>
          
               </View>
             </View> 
         </View>): (breakfastItems && dinnerItems ? ( 
       <View style={styles.containerFour}>
          <View style={{alignContent:"center", alignItems: "center", marginTop: height * 0.02, marginBottom: height * 0.02}}>
         <AnimatedCircularProgress
          size={1800/10}
          width={15}
          fill={(((parseFloat(breakfastItems.calories) +parseFloat(dinnerItems.calories)).toFixed(2))/1800)*100}
          tintColor="#00e0ff"
          backgroundColor="white"
          rotation={360}
          duration={1000}
        >
          {(fill) => <Text style={styles.circleText}>Total calories: {((parseFloat(breakfastItems.calories)) + parseFloat(dinnerItems.calories)).toFixed(0)} cals</Text>}
        </AnimatedCircularProgress>
         </View>
             <Text style={styles.meal}>Meal totals:</Text> 
             <View style={{flex: 1, flexDirection: 'row', marginTop: height * 0.03 , marginLeft:width * 0.05}}>
             <Text>Calories:</Text>
             <View style={{flex: 1, flexDirection: 'column',  marginLeft:width * 0.05}}>
               <Text>{(parseFloat(breakfastItems.calories)+ parseFloat(dinnerItems.calories)).toFixed(0)} cals, 
               {(((parseFloat(breakfastItems.calories) + parseFloat(dinnerItems.calories)).toFixed(2)*100)/1800).toFixed(0)}%</Text>
               <ProgressBar progress={((parseFloat(breakfastItems.calories) + parseFloat(dinnerItems.calories)).toFixed(2))/1800} color={Colors.green300} width={width * 0.5} />
             </View>
             </View>  
             <View style={{flex: 1, flexDirection: 'row', marginTop: height * 0.03 , marginLeft:width * 0.05}}>
             <View style={{flex: 1, flexDirection: 'column', marginTop: height * 0.05 , marginLeft:width * 0.01}}>
             <Text>Protein: {(((parseFloat(breakfastItems.protein) + parseFloat(dinnerItems.protein)).toFixed(2)*100)/94).toFixed(0)}%</Text>
             <ProgressBar progress={(parseFloat(breakfastItems.protein) + parseFloat(dinnerItems.protein)).toFixed(2)/94} color={Colors.green500} width={width * 0.25} />
             <Text>{(parseFloat(breakfastItems.protein) + parseFloat(dinnerItems.protein)).toFixed(2)}g</Text>
           </View>
           <View style={{flex: 1, flexDirection: 'column', marginTop: height * 0.05 , marginLeft:width * 0.01}}>
             <Text>Carbs: {(((parseFloat(breakfastItems.netCarbs) + parseFloat(dinnerItems.netCarbs)).toFixed(2)*100)/212).toFixed(0)}%</Text>
             <ProgressBar progress={((parseFloat(breakfastItems.netCarbs) + parseFloat(dinnerItems.netCarbs)).toFixed(2))/212} color={Colors.green500} width={width * 0.25} />
             <Text>{(parseFloat(breakfastItems.netCarbs) + parseFloat(dinnerItems.netCarbs)).toFixed(2)}g</Text>
           </View>
           <View style={{flex: 1, flexDirection: 'column', marginTop: height * 0.05 , marginLeft:width * 0.01}}>
             <Text>Fat: {(((parseFloat(breakfastItems.netCarbs) + parseFloat(dinnerItems.netCarbs)).toFixed(2)*100)/73).toFixed(0)}%</Text>
             <ProgressBar progress={(parseFloat(breakfastItems.netCarbs) + parseFloat(dinnerItems.netCarbs))/73} color={Colors.green500} width={width * 0.25} />
             <Text>{(parseFloat(breakfastItems.netCarbs) + parseFloat(dinnerItems.netCarbs)).toFixed(2)}cals</Text>
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
                     value: (parseFloat(breakfastItems.protein) + parseFloat(dinnerItems.protein)),
                     svg: { fill: '#3bafda' }, 
                     arc: { cornerRadius: 1, }
                   },
                   {
                     key: 2,
                     value:(parseFloat(breakfastItems.netCarbs) + parseFloat(dinnerItems.netCarbs)),
                     svg: { fill: '#ff6c87' }, 
                     arc: { cornerRadius: 1, }
                   },
                   {
                     key: 3,
                     value:(parseFloat(breakfastItems.fat) + parseFloat(dinnerItems.fat)),
                     svg: { fill: 'gold' }, 
                     arc: { cornerRadius: 1, }
                   }
                 ]}
                 />
               
               <View style={{flex: 1, flexDirection: 'column', marginBottom: height * 0.12, marginTop: height*0.05, alignSelf: 'center'}}>
                 <Text>{"\n"}</Text>
               <View style={{flex: 1, flexDirection: 'row' }}>
                 <Text style={{color: '#3bafda', fontWeight: 'bold', fontSize: 16}}>Protein: </Text>
                 <Text style={{color: 'black', fontSize: 16}}>{(parseFloat(breakfastItems.protein) + parseFloat(dinnerItems.protein)).toFixed(2)}g</Text>
               </View>
               <View style={{flex: 1, flexDirection: 'row' }}>
                 <Text style={{color: '#ff6c87', fontWeight: 'bold', fontSize: 16}}>Carbs: </Text>
                 <Text style={{color: 'black', fontSize: 16}}>{(parseFloat(breakfastItems.netCarbs) + parseFloat(dinnerItems.netCarbs)).toFixed(2)}g</Text>
               </View>
               <View style={{flex: 1, flexDirection: 'row' }}>
                 <Text style={{color: 'gold', fontWeight: 'bold', fontSize: 16}}>Fat: </Text>
                 <Text style={{color: 'black', fontSize: 16}}>{(parseFloat(breakfastItems.fat) + parseFloat(dinnerItems.fat)).toFixed(2)}g</Text>
               </View>
          
               </View>
             </View> 
         </View>) : (breakfastItems && lunchItems ? ( 
       <View style={styles.containerFour}>
          <View style={{alignContent:"center", alignItems: "center", marginTop: height * 0.02, marginBottom: height * 0.02}}>
         <AnimatedCircularProgress
          size={1800/10}
          width={15}
          fill={(((parseFloat(breakfastItems.calories) + parseFloat(lunchItems.calories)).toFixed(2))/1800)*100}
          tintColor="#00e0ff"
          backgroundColor="white"
          rotation={360}
          duration={1000}
        >
          {(fill) => <Text style={styles.circleText}>Total calories: {(parseFloat(breakfastItems.calories) + parseFloat(lunchItems.calories)).toFixed(0)} cals</Text>}
        </AnimatedCircularProgress>
         </View>
             <Text style={styles.meal}>Meal totals:</Text> 
             <View style={{flex: 1, flexDirection: 'row', marginTop: height * 0.03 , marginLeft:width * 0.05}}>
             <Text>Calories:</Text>
             <View style={{flex: 1, flexDirection: 'column',  marginLeft:width * 0.05}}>
               <Text>{(parseFloat(breakfastItems.calories)+ parseFloat(lunchItems.calories)).toFixed(0)} cals, 
               {(((parseFloat(breakfastItems.calories) + parseFloat(lunchItems.calories)).toFixed(2)*100)/1800).toFixed(0)}%</Text>
               <ProgressBar progress={((parseFloat(breakfastItems.calories) + parseFloat(lunchItems.calories)).toFixed(2))/1800} color={Colors.green300} width={width * 0.5} />
             </View>
             </View>  
             <View style={{flex: 1, flexDirection: 'row', marginTop: height * 0.03 , marginLeft:width * 0.05}}>
             <View style={{flex: 1, flexDirection: 'column', marginTop: height * 0.05 , marginLeft:width * 0.01}}>
             <Text>Protein: {(((parseFloat(breakfastItems.protein) + parseFloat(lunchItems.protein)).toFixed(2)*100)/94).toFixed(0)}%</Text>
             <ProgressBar progress={(parseFloat(breakfastItems.protein) + parseFloat(lunchItems.protein)).toFixed(2)/94} color={Colors.green500} width={width * 0.25} />
             <Text>{(parseFloat(breakfastItems.protein) + parseFloat(lunchItems.protein)).toFixed(2)}g</Text>
           </View>
           <View style={{flex: 1, flexDirection: 'column', marginTop: height * 0.05 , marginLeft:width * 0.01}}>
             <Text>Carbs: {(((parseFloat(breakfastItems.netCarbs) + parseFloat(lunchItems.netCarbs)).toFixed(2)*100)/212).toFixed(0)}%</Text>
             <ProgressBar progress={((parseFloat(breakfastItems.netCarbs) + parseFloat(lunchItems.netCarbs)).toFixed(2))/212} color={Colors.green500} width={width * 0.25} />
             <Text>{(parseFloat(breakfastItems.netCarbs) + parseFloat(lunchItems.netCarbs)).toFixed(2)}g</Text>
           </View>
           <View style={{flex: 1, flexDirection: 'column', marginTop: height * 0.05 , marginLeft:width * 0.01}}>
             <Text>Fat: {(((parseFloat(breakfastItems.netCarbs) + parseFloat(lunchItems.netCarbs)).toFixed(2)*100)/73).toFixed(0)}%</Text>
             <ProgressBar progress={(parseFloat(breakfastItems.netCarbs) + parseFloat(lunchItems.netCarbs))/73} color={Colors.green500} width={width * 0.25} />
             <Text>{(parseFloat(breakfastItems.netCarbs) + parseFloat(lunchItems.netCarbs)).toFixed(2)}cals</Text>
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
                     value: (parseFloat(breakfastItems.protein) + parseFloat(lunchItems.protein)),
                     svg: { fill: '#3bafda' }, 
                     arc: { cornerRadius: 1, }
                   },
                   {
                     key: 2,
                     value:(parseFloat(breakfastItems.netCarbs) + parseFloat(lunchItems.netCarbs)),
                     svg: { fill: '#ff6c87' }, 
                     arc: { cornerRadius: 1, }
                   },
                   {
                     key: 3,
                     value:(parseFloat(breakfastItems.fat) + parseFloat(lunchItems.fat)),
                     svg: { fill: 'gold' }, 
                     arc: { cornerRadius: 1, }
                   }
                 ]}
                 />
               
               <View style={{flex: 1, flexDirection: 'column', marginBottom: height * 0.12, marginTop: height*0.05, alignSelf: 'center'}}>
                 <Text>{"\n"}</Text>
               <View style={{flex: 1, flexDirection: 'row' }}>
                 <Text style={{color: '#3bafda', fontWeight: 'bold', fontSize: 16}}>Protein: </Text>
                 <Text style={{color: 'black', fontSize: 16}}>{(parseFloat(breakfastItems.protein) + parseFloat(lunchItems.protein)).toFixed(2)}g</Text>
               </View>
               <View style={{flex: 1, flexDirection: 'row' }}>
                 <Text style={{color: '#ff6c87', fontWeight: 'bold', fontSize: 16}}>Carbs: </Text>
                 <Text style={{color: 'black', fontSize: 16}}>{(parseFloat(breakfastItems.netCarbs) + parseFloat(lunchItems.netCarbs)).toFixed(2)}g</Text>
               </View>
               <View style={{flex: 1, flexDirection: 'row' }}>
                 <Text style={{color: 'gold', fontWeight: 'bold', fontSize: 16}}>Fat: </Text>
                 <Text style={{color: 'black', fontSize: 16}}>{(parseFloat(breakfastItems.fat) + parseFloat(lunchItems.fat)).toFixed(2)}g</Text>
               </View>
          
               </View>
             </View> 
         </View>): (breakfastItems ? ( 
       <View style={styles.containerFour}>
          <View style={{alignContent:"center", alignItems: "center", marginTop: height * 0.02, marginBottom: height * 0.02}}>
         <AnimatedCircularProgress
          size={1800/10}
          width={15}
          fill={(((parseFloat(breakfastItems.calories)).toFixed(2))/1800)*100}
          tintColor="#00e0ff"
          backgroundColor="white"
          rotation={360}
          duration={1000}
        >
          {(fill) => <Text style={styles.circleText}>Total calories: {(parseFloat(breakfastItems.calories) ).toFixed(0)} cals</Text>}
        </AnimatedCircularProgress>
         </View>
             <Text style={styles.meal}>Meal totals:</Text> 
             <View style={{flex: 1, flexDirection: 'row', marginTop: height * 0.03 , marginLeft:width * 0.05}}>
             <Text>Calories:</Text>
             <View style={{flex: 1, flexDirection: 'column',  marginLeft:width * 0.05}}>
               <Text>{(parseFloat(breakfastItems.calories)).toFixed(0)} cals, 
               {(((parseFloat(breakfastItems.calories)).toFixed(2)*100)/1800).toFixed(0)}%</Text>
               <ProgressBar progress={((parseFloat(breakfastItems.calories)).toFixed(2))/1800} color={Colors.green300} width={width * 0.5} />
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
             <ProgressBar progress={((parseFloat(breakfastItems.netCarbs)).toFixed(2))/212} color={Colors.green500} width={width * 0.25} />
             <Text>{(parseFloat(breakfastItems.netCarbs)).toFixed(2)}g</Text>
           </View>
           <View style={{flex: 1, flexDirection: 'column', marginTop: height * 0.05 , marginLeft:width * 0.01}}>
             <Text>Fat: {(((parseFloat(breakfastItems.netCarbs)).toFixed(2)*100)/73).toFixed(0)}%</Text>
             <ProgressBar progress={(parseFloat(breakfastItems.netCarbs))/73} color={Colors.green500} width={width * 0.25} />
             <Text>{(parseFloat(breakfastItems.netCarbs)).toFixed(2)}cals</Text>
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
                     value: (parseFloat(breakfastItems.protein) ),
                     svg: { fill: '#3bafda' }, 
                     arc: { cornerRadius: 1, }
                   },
                   {
                     key: 2,
                     value:(parseFloat(breakfastItems.netCarbs)),
                     svg: { fill: '#ff6c87' }, 
                     arc: { cornerRadius: 1, }
                   },
                   {
                     key: 3,
                     value:(parseFloat(breakfastItems.fat)),
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
         </View>):(lunchItems ? ( 
       <View style={styles.containerFour}>
          <View style={{alignContent:"center", alignItems: "center", marginTop: height * 0.02, marginBottom: height * 0.02}}>
         <AnimatedCircularProgress
          size={1800/10}
          width={15}
          fill={((parseFloat(parseFloat(lunchItems.calories)).toFixed(2))/1800)*100}
          tintColor="#00e0ff"
          backgroundColor="white"
          rotation={360}
          duration={1000}
        >
          {(fill) => <Text style={styles.circleText}>Total calories: {(parseFloat(lunchItems.calories)).toFixed(0)} cals</Text>}
        </AnimatedCircularProgress>
         </View>
             <Text style={styles.meal}>Meal totals:</Text> 
             <View style={{flex: 1, flexDirection: 'row', marginTop: height * 0.03 , marginLeft:width * 0.05}}>
             <Text>Calories:</Text>
             <View style={{flex: 1, flexDirection: 'column',  marginLeft:width * 0.05}}>
               <Text>{(parseFloat(lunchItems.calories)).toFixed(0)} cals, 
               {(((parseFloat(lunchItems.calories)).toFixed(2)*100)/1800).toFixed(0)}%</Text>
               <ProgressBar progress={((parseFloat(lunchItems.calories)).toFixed(2))/1800} color={Colors.green300} width={width * 0.5} />
             </View>
             </View>  
             <View style={{flex: 1, flexDirection: 'row', marginTop: height * 0.03 , marginLeft:width * 0.05}}>
             <View style={{flex: 1, flexDirection: 'column', marginTop: height * 0.05 , marginLeft:width * 0.01}}>
             <Text>Protein: {(((parseFloat(lunchItems.protein)).toFixed(2)*100)/94).toFixed(0)}%</Text>
             <ProgressBar progress={(parseFloat(lunchItems.protein)).toFixed(2)/94} color={Colors.green500} width={width * 0.25} />
             <Text>{(parseFloat(lunchItems.protein)).toFixed(2)}g</Text>
           </View>
           <View style={{flex: 1, flexDirection: 'column', marginTop: height * 0.05 , marginLeft:width * 0.01}}>
             <Text>Carbs: {(((parseFloat(lunchItems.netCarbs)).toFixed(2)*100)/212).toFixed(0)}%</Text>
             <ProgressBar progress={((parseFloat(lunchItems.netCarbs)).toFixed(2))/212} color={Colors.green500} width={width * 0.25} />
             <Text>{(parseFloat(lunchItems.netCarbs)).toFixed(2)}g</Text>
           </View>
           <View style={{flex: 1, flexDirection: 'column', marginTop: height * 0.05 , marginLeft:width * 0.01}}>
             <Text>Fat: {(((parseFloat(lunchItems.netCarbs)).toFixed(2)*100)/73).toFixed(0)}%</Text>
             <ProgressBar progress={(parseFloat(lunchItems.netCarbs))/73} color={Colors.green500} width={width * 0.25} />
             <Text>{(parseFloat(lunchItems.netCarbs)).toFixed(2)}cals</Text>
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
                     value: (parseFloat(lunchItems.protein) ),
                     svg: { fill: '#3bafda' }, 
                     arc: { cornerRadius: 1, }
                   },
                   {
                     key: 2,
                     value:(parseFloat(lunchItems.netCarbs)),
                     svg: { fill: '#ff6c87' }, 
                     arc: { cornerRadius: 1, }
                   },
                   {
                     key: 3,
                     value:(parseFloat(lunchItems.fat)),
                     svg: { fill: 'gold' }, 
                     arc: { cornerRadius: 1, }
                   }
                 ]}
                 />
               
               <View style={{flex: 1, flexDirection: 'column', marginBottom: height * 0.12, marginTop: height*0.05, alignSelf: 'center'}}>
                 <Text>{"\n"}</Text>
               <View style={{flex: 1, flexDirection: 'row' }}>
                 <Text style={{color: '#3bafda', fontWeight: 'bold', fontSize: 16}}>Protein: </Text>
                 <Text style={{color: 'black', fontSize: 16}}>{(parseFloat(lunchItems.protein)).toFixed(2)}g</Text>
               </View>
               <View style={{flex: 1, flexDirection: 'row' }}>
                 <Text style={{color: '#ff6c87', fontWeight: 'bold', fontSize: 16}}>Carbs: </Text>
                 <Text style={{color: 'black', fontSize: 16}}>{(parseFloat(lunchItems.netCarbs)).toFixed(2)}g</Text>
               </View>
               <View style={{flex: 1, flexDirection: 'row' }}>
                 <Text style={{color: 'gold', fontWeight: 'bold', fontSize: 16}}>Fat: </Text>
                 <Text style={{color: 'black', fontSize: 16}}>{(parseFloat(lunchItems.fat)).toFixed(2)}g</Text>
               </View>
          
               </View>
             </View> 
         </View>) : (dinnerItems ? ( 
       <View style={styles.containerFour}>
          <View style={{alignContent:"center", alignItems: "center", marginTop: height * 0.02, marginBottom: height * 0.02}}>
         <AnimatedCircularProgress
          size={1800/10}
          width={15}
          fill={(((parseFloat(dinnerItems.calories)).toFixed(2))/1800)*100}
          tintColor="#00e0ff"
          backgroundColor="white"
          rotation={360}
          duration={1000}
        >
          {(fill) => <Text style={styles.circleText}>Total calories: {(parseFloat(dinnerItems.calories)).toFixed(0)} cals</Text>}
        </AnimatedCircularProgress>
         </View>
             <Text style={styles.meal}>Meal totals:</Text> 
             <View style={{flex: 1, flexDirection: 'row', marginTop: height * 0.03 , marginLeft:width * 0.05}}>
             <Text>Calories:</Text>
             <View style={{flex: 1, flexDirection: 'column',  marginLeft:width * 0.05}}>
               <Text>{(parseFloat(dinnerItems.calories)).toFixed(0)} cals, 
               {(((parseFloat(dinnerItems.calories)).toFixed(2)*100)/1800).toFixed(0)}%</Text>
               <ProgressBar progress={((parseFloat(dinnerItems.calories)).toFixed(2))/1800} color={Colors.green300} width={width * 0.5} />
             </View>
             </View>  
             <View style={{flex: 1, flexDirection: 'row', marginTop: height * 0.03 , marginLeft:width * 0.05}}>
             <View style={{flex: 1, flexDirection: 'column', marginTop: height * 0.05 , marginLeft:width * 0.01}}>
             <Text>Protein: {(((parseFloat(dinnerItems.protein)).toFixed(2)*100)/94).toFixed(0)}%</Text>
             <ProgressBar progress={(parseFloat(dinnerItems.protein)).toFixed(2)/94} color={Colors.green500} width={width * 0.25} />
             <Text>{(parseFloat(dinnerItems.protein)).toFixed(2)}g</Text>
           </View>
           <View style={{flex: 1, flexDirection: 'column', marginTop: height * 0.05 , marginLeft:width * 0.01}}>
             <Text>Carbs: {(((parseFloat(dinnerItems.netCarbs)).toFixed(2)*100)/212).toFixed(0)}%</Text>
             <ProgressBar progress={((parseFloat(dinnerItems.netCarbs)).toFixed(2))/212} color={Colors.green500} width={width * 0.25} />
             <Text>{(parseFloat(dinnerItems.netCarbs)).toFixed(2)}g</Text>
           </View>
           <View style={{flex: 1, flexDirection: 'column', marginTop: height * 0.05 , marginLeft:width * 0.01}}>
             <Text>Fat: {(((parseFloat(dinnerItems.netCarbs)).toFixed(2)*100)/73).toFixed(0)}%</Text>
             <ProgressBar progress={(parseFloat(dinnerItems.netCarbs))/73} color={Colors.green500} width={width * 0.25} />
             <Text>{(parseFloat(dinnerItems.netCarbs)).toFixed(2)}cals</Text>
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
                     value: (parseFloat(dinnerItems.protein) ),
                     svg: { fill: '#3bafda' }, 
                     arc: { cornerRadius: 1, }
                   },
                   {
                     key: 2,
                     value:(parseFloat(dinnerItems.netCarbs)),
                     svg: { fill: '#ff6c87' }, 
                     arc: { cornerRadius: 1, }
                   },
                   {
                     key: 3,
                     value:(parseFloat(dinnerItems.fat)),
                     svg: { fill: 'gold' }, 
                     arc: { cornerRadius: 1, }
                   }
                 ]}
                 />
               
               <View style={{flex: 1, flexDirection: 'column', marginBottom: height * 0.12, marginTop: height*0.05, alignSelf: 'center'}}>
                 <Text>{"\n"}</Text>
               <View style={{flex: 1, flexDirection: 'row' }}>
                 <Text style={{color: '#3bafda', fontWeight: 'bold', fontSize: 16}}>Protein: </Text>
                 <Text style={{color: 'black', fontSize: 16}}>{(parseFloat(dinnerItems.protein)).toFixed(2)}g</Text>
               </View>
               <View style={{flex: 1, flexDirection: 'row' }}>
                 <Text style={{color: '#ff6c87', fontWeight: 'bold', fontSize: 16}}>Carbs: </Text>
                 <Text style={{color: 'black', fontSize: 16}}>{(parseFloat(dinnerItems.netCarbs)).toFixed(2)}g</Text>
               </View>
               <View style={{flex: 1, flexDirection: 'row' }}>
                 <Text style={{color: 'gold', fontWeight: 'bold', fontSize: 16}}>Fat: </Text>
                 <Text style={{color: 'black', fontSize: 16}}>{(parseFloat(dinnerItems.fat)).toFixed(2)}g</Text>
               </View>
          
               </View>
             </View> 
         </View>) :
           (<View style={{marginTop: height * 0.2}}></View>)))))))}
         
   </ScrollView>
   </SafeAreaView>
  );
};

export default DailyFood;

const styles = StyleSheet.create({
  container: {
    height: height * 0.4,
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
   marginTop: height *0.00,
    flex: 1,
    height: height * 0.6,
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
      marginBottom: height * 0.05,
      
    },
    containerFour: {
      backgroundColor: '#fff',
      width: width * 0.95,
      alignSelf: 'center',
      marginBottom: height * 0.05
    },
    back: {
      color: '#fff',
      fontSize: 60,
      marginLeft: width * 0.05,
      marginTop: - height * 0.035,
    },
    headerText: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: height * 0.012,
      marginLeft: width * 0.2,
    },
    card: {
      backgroundColor: '#fff',
      height: height * 0.1,
      width: width * 0.95,
    },
    icon: {
      height: height * 0.05,
      width: width * 0.09,
    },
    itemText: {
      color: '#000000',
      fontSize: 18,
      marginLeft: width * 0.05
    },
    caloriesText: {
      color: '#000000',
      fontSize: 18,
    },
})