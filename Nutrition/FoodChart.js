import React, { useState, useEffect } from 'react';

import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  LogBox,
  StyledImage
} from 'react-native';
import { PieChart } from 'react-native-svg-charts'
import DatePicker from 'react-native-datepicker';
import DropDownPicker from 'react-native-dropdown-picker';

import API from '../../API';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'localstorage-polyfill'; 

const { width, height } = Dimensions.get("window");
var back = '<';

const FoodChart = props => {

    const res = localStorage.getItem("value");
    const moment = require('moment');
    const today = moment();
    const [contents, setContents] = useState([]);
    
    const initialAnalyseState = {
        id: "",
        name: "",
        calories: "",
        fat: "",
        protein: "",
        netCarbs: "",
        quantity: 1,
        saturatedFats: 0
        
      };
      const [data, setData] = React.useState({
        id: '',
        name: '',
        calories: '',
        fat: '',
        protein: '',
        netCarbs: '',
        quantity: 1,
        breakfastDate: today.format("YYYY-MM-DD"),
    });
      const [open, setOpen] = useState(false);
      const [currentFood, setCurrentFood] = useState(initialAnalyseState);
      const [currentDate, setCurrentDate] = useState(today.format("YYYY-MM-DD"));
      const [quantity, setQuantity] = useState(1);
      const [value, setValue] = useState(res);
      const [items, setItems] = useState([ {label: 'Breakfast', value: 'Breakfast'}, {label: 'Lunch', value: 'Lunch'}, {label: 'Dinner', value: 'Dinner'} ]);

      const {navigation} = props;


      const getfood = idFood => {

        API.getFoodByName(idFood)
          .then(response => {
            setCurrentFood (response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };
    
      useEffect(() => {
        
        getfood (props.route.params.name);
        LogBox.ignoreAllLogs();
        const moment = require('moment');
        const today = moment();
        setValue(res);
        setCurrentDate(
          today.format("YYYY-MM-DD")
        );
        const saturatedFats= currentFood.saturatedFats;
        const sugars= currentFood.sugars;
        const carbohydrate= currentFood.carbohydrate;
        const fiber= currentFood.fiber;
        const cholesterol= currentFood.cholesterol; 
        const calcium= currentFood.calcium;
        const ironFe= currentFood.ironFe;
        const potassium = currentFood.potassium;
        const magnesium= currentFood.magnesium;
        const vitaminC= currentFood.vitaminC;
        const netCarbs= currentFood.netCarbs;
        const water= currentFood.water;
        const sucrose= currentFood.sucrose; 
        const glucose= currentFood.glucose;
        const fructose= currentFood.fructose;
        const lactose = currentFood.lactose;
        const sodium= currentFood.sodium;
        const zinc = currentFood.zinc;

        setContents([
          {
            title: 'Nutritions v ',
            body: '\n' +'\n' +'Sturated fats: '+ saturatedFats + 'g'+ '\n'+ 'Sugar: '+ sugars + 'g'+ '\n' + 'Carbohydrate: ' + carbohydrate+ 'g'
            + '\n' + 'Fiber: ' +fiber + 'g'+ '\n' + 'Cholesterol: '+ cholesterol+ 'g'+ '\n'+ 'Calcium: '+ calcium+ 'g' + '\n' +
            'Iron Fe: ' + ironFe +'g' +'\n'+ 'Potassium: '+ potassium +'g'+ '\n'+'Magnesium: '+ magnesium + 'g'+ '\n'+ 'Vitamin C: '+ vitaminC + 'g'+ '\n' + 'Carbs: ' + netCarbs+ 'g'
            + '\n' + 'Glucose: ' +glucose + 'g'+ '\n' + 'Fructose: '+ fructose+ 'g'+ '\n'+ 'lactose: '+ lactose+ 'g' + '\n' +
            'Water: ' + water +'g' +'\n'+ 'Sucrose: '+ sucrose +'g'+ '\n' + 'Sodium: '+ sodium+ 'g'+ '\n'+ 'Zinc: '+ zinc+ 'g'
          }
         
        ]);
      
      }, [props.route.params.name]);

      const dateChange = (val) => {
        if (val == undefined || val == '' ) {
          setData({
            ...data,
            breakfastDate: currentDate,
            check_textInputChange: true,
            });
        }
        else {
          setData({
            ...data,
            breakfastDate: val,
            check_textInputChange: true,
            });
        }
        
      };

      const addBreakfast = async () => {
        const idUser = await AsyncStorage.getItem("id");
        localStorage.setItem("value", "Breakfast");
        const breakfastDate = data.breakfastDate;
        const food = [currentFood];
        const calories = ((parseFloat(currentFood.calories) * quantity).toFixed(0)).toString();
        const protein = ((parseFloat(currentFood.protein) * quantity).toFixed(1)).toString();
        const fiber = ((parseFloat(currentFood.fiber) * quantity).toFixed(1)).toString();
        const saturatedFats = ((parseFloat(currentFood.saturatedFats) * quantity).toFixed(1)).toString();
        const calcium = ((parseFloat(currentFood.calcium) * quantity).toFixed(1)).toString();
        const fat = ((parseFloat(currentFood.fat) * quantity).toFixed(1)).toString();
        const netCarbs = ((parseFloat(currentFood.netCarbs) * quantity).toFixed(1)).toString();
        await API.NewBreakfast({idUser, breakfastDate, food, calories, protein, fiber, saturatedFats, calcium, fat, netCarbs }, idUser, breakfastDate);
        navigation.navigate("BreakfastFood", {idUser});
      };

      const addLunch = async () => {
        const idUser = await AsyncStorage.getItem("id");
        localStorage.setItem("value", "Lunch");
        const lunchDate = data.breakfastDate;
        const food = [currentFood];
        const calories = ((parseFloat(currentFood.calories) * quantity).toFixed(0)).toString();
        const protein = ((parseFloat(currentFood.protein) * quantity).toFixed(1)).toString();
        const fiber = ((parseFloat(currentFood.fiber) * quantity).toFixed(1)).toString();
        const saturatedFats = ((parseFloat(currentFood.saturatedFats) * quantity).toFixed(1)).toString();
        const calcium = ((parseFloat(currentFood.calcium) * quantity).toFixed(1)).toString();
        const fat = ((parseFloat(currentFood.fat) * quantity).toFixed(1)).toString();
        const netCarbs = ((parseFloat(currentFood.netCarbs) * quantity).toFixed(1)).toString();
        await API.NewLunch({idUser, lunchDate, food, calories, protein, fiber, saturatedFats, calcium, fat, netCarbs }, idUser, lunchDate);
        navigation.navigate("LunchFood", {idUser});
      };

      const addDinner = async () => {
        const idUser = await AsyncStorage.getItem("id");
        localStorage.setItem("value", "Dinner");
        const dinnerDate = data.breakfastDate;
        const food = [currentFood];
        const calories = ((parseFloat(currentFood.calories) * quantity).toFixed(0)).toString();
        const protein = ((parseFloat(currentFood.protein) * quantity).toFixed(1)).toString();
        const fiber = ((parseFloat(currentFood.fiber) * quantity).toFixed(1)).toString();
        const saturatedFats = ((parseFloat(currentFood.saturatedFats) * quantity).toFixed(1)).toString();
        const calcium = ((parseFloat(currentFood.calcium) * quantity).toFixed(1)).toString();
        const fat = ((parseFloat(currentFood.fat) * quantity).toFixed(1)).toString();
        const netCarbs = ((parseFloat(currentFood.netCarbs) * quantity).toFixed(1)).toString();
        await API.NewDinner({idUser, dinnerDate, food, calories, protein, fiber, saturatedFats, calcium, fat, netCarbs }, idUser, dinnerDate);
        navigation.navigate("DinnerFood", {idUser});
      };

      return (

        <View style={styles.container}>
        
      <ScrollView>

     
      {value=='Breakfast'?
      <ImageBackground style={styles.header} source={require('../../assets/breakfast.jpeg')}>
        <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => {navigation.navigate('SearchFood')}}>
            <Text style={styles.back}>{back}</Text>
          </TouchableOpacity>
        <DropDownPicker
      containerStyle={{height: height * 0.07}}
      style={{backgroundColor: 'rgba(0, 0, 0, 0)', width: width *0.5, marginLeft: width*0.32, marginTop: height *0.01}}
      labelStyle={{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 28
      }}
      itemStyle={{justifyContent: 'flex-start'}}
      dropDownStyle={{backgroundColor: 'rgba(0, 0, 0, 0)', width: width *0.5, marginLeft: width*0.35}}
      arrowStyle={{color: '#fff', size: 50}}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
/>
        </View>
      
                <TouchableOpacity
                     
                      onPress={() => {addBreakfast()}}
                  >
                 <Image source={require('../../assets/check.png')} style={styles.icon}/>
                  </TouchableOpacity>
          
      </ImageBackground>
      : <View></View>}
      {value == 'Lunch'? 
      <ImageBackground style={styles.header} source={require('../../assets/lunch.jpeg')}>
     <View style={{flexDirection: 'row'}}>
     <TouchableOpacity onPress={() => {navigation.navigate('SearchFood')}}>
            <Text style={styles.back}>{back}</Text>
          </TouchableOpacity>
        <DropDownPicker
      containerStyle={{height: height * 0.07}}
      style={{backgroundColor: 'rgba(0, 0, 0, 0)', width: width *0.5, marginLeft: width*0.32, marginTop: height *0.01}}
      labelStyle={{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 28
      }}
      itemStyle={{justifyContent: 'flex-start'}}
      dropDownStyle={{backgroundColor: 'rgba(0, 0, 0, 0)', width: width *0.5, marginLeft: width*0.35}}
      arrowStyle={{color: '#fff', size: 50}}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
/>
        </View>
              <TouchableOpacity
                     
                      onPress={() => {addLunch()}}
                  >
                 <Image source={require('../../assets/check.png')} style={styles.icon}/>
                  </TouchableOpacity>
      </ImageBackground>: <View></View>}
     
      {value == 'Dinner'? 
      <ImageBackground style={styles.header} source={require('../../assets/dinner.jpeg')}>
      <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => {navigation.navigate('SearchFood')}}>
            <Text style={styles.back}>{back}</Text>
          </TouchableOpacity>
        <DropDownPicker
      containerStyle={{height: height * 0.07}}
      style={{backgroundColor: 'rgba(0, 0, 0, 0)', width: width *0.5, marginLeft: width*0.32, marginTop: height *0.01}}
      labelStyle={{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 28
      }}
      itemStyle={{justifyContent: 'flex-start'}}
      dropDownStyle={{backgroundColor: 'rgba(0, 0, 0, 0)', width: width *0.5, marginLeft: width*0.35}}
      arrowStyle={{color: '#fff', size: 50}}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
/>
        </View>
                <TouchableOpacity
                     
                      onPress={() => {addDinner()}}
                  >
                 <Image source={require('../../assets/check.png')} style={styles.icon}/>
                  </TouchableOpacity>
      </ImageBackground>: <View></View>}
        
          
      
              <View style= {styles.footer}>
              
                <Text style= {styles.text_header}>{currentFood.name} ({currentFood.servingDescription})</Text>
                <View style={{flexDirection:'row'}}> 
                <View style={{flex: 1, flexDirection: 'column', marginBottom: height * 0.03}}>                
                <TextInput
                  style= {styles.textInput}
                  onChangeText={text => setQuantity(text)}
                  
                  placeholder={'Quantity'}
                  
                  />
                  <Text style={{color: '#434a54'}}>Weight:  { quantity }00g</Text>
                </View>
                <Text style={styles.textCalories}>Calories: {parseFloat(currentFood.calories) * quantity} Kcal</Text>
                </View>
               
                
                  
                  <DatePicker
                    mode="date"
                    placeholder={(data.breakfastDate !== undefined && data.breakfastDate) || (currentDate)}
                    format="YYYY-MM-DD"
                    minDate="2000-01-01"
                    maxDate={new Date()}
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    style={{ width: width * 0.6 }}
                    customStyles={{
                    dateIcon: {
                    position: 'absolute',
                    left: width * 0.05 ,
                    marginLeft: 0
                    },
                    dateInput: {
                    marginLeft: width * 0.15
                    }

                    }}
                onDateChange={(val) => { dateChange(moment(val).format("YYYY-MM-DD")) }}
                  />
                  <View>
                  <View style={{alignItems: 'center', padding: height * 0.02}}>
                 

                  <View style={{flex: 1, flexDirection: 'row', marginBottom: height * 0, alignSelf: 'center'}}>
                  <PieChart
                  style={{ height: 200, width: 200}}
                  outerRadius={'70%'}
                  innerRadius={1}
                  data={[
                    {
                      key: 1,
                      value: parseFloat(currentFood.protein) * quantity,
                      svg: { fill: '#3bafda' }, 
                      arc: { cornerRadius: 1, }
                    },
                    {
                      key: 2,
                      value: parseFloat(currentFood.netCarbs) * quantity,
                      svg: { fill: 'darkorange' }, 
                      arc: { cornerRadius: 1, },
                    },
                    {
                      key: 3,
                      value:parseFloat(currentFood.fat) * quantity,
                      svg: { fill: 'gold' }, 
                      arc: { cornerRadius: 1, }
                    }
                  ]}
                  />
                
                <View style={{flex: 1, flexDirection: 'column', marginBottom: height * 0.12, marginTop: height*0.05, alignSelf: 'center'}}>
                  <Text>{"\n"}</Text>
                <View style={{flex: 1, flexDirection: 'row' }}>
                  <Text style={{color: '#3bafda', fontWeight: 'bold', fontSize: 16}}>Protein: </Text>
                  <Text style={{color: 'black', fontSize: 16}}>{(parseFloat(currentFood.protein) * quantity).toFixed(2)}g</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row' }}>
                  <Text style={{color: 'darkorange', fontWeight: 'bold', fontSize: 16}}>Carbs: </Text>
                  <Text style={{color: 'black', fontSize: 16}}>{(parseFloat(currentFood.netCarbs) * quantity).toFixed(2)}g</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row' }}>
                  <Text style={{color: 'gold', fontWeight: 'bold', fontSize: 16}}>Fat: </Text>
                  <Text style={{color: 'black', fontSize: 16}}>{(parseFloat(currentFood.fat) * quantity).toFixed(2)}g</Text>
                </View>
           
                </View>
               
             
              
            </View>
          </View>
         
          </View>
          { contents.map((param, i) => {
          return (
            
              <Text style={{color: 'black', fontSize: 16}}>
                {param.body}
              </Text>
           
          );
        })}
          </View>
         

          </ScrollView>
</View>
      );

};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#f1c06e'
  },
  header: {
      flex: 1,
      height: height * 0.37,
      width: width,
      paddingBottom: height * 0.25
  },
  icon: {
    height: height * 0.09,
    width: width * 0.15,
    marginLeft: width * 0.8,
    marginTop: height * 0.15
  },
  footer: {
      flex: Platform.OS === 'ios' ? 3 : 5,
      backgroundColor: '#fff',
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: '#434a54',
      fontWeight: 'bold',
      fontSize: 24,
      
  },
  textCalories: {
    color: '#48c27d',
    fontWeight: 'bold',
    fontSize: 20,
  },
  text_footer: {
      color: '#434a54',
      fontSize: 18
  },
  textInput: {
    width: width * 0.2,
    height: height * 0.06,
    marginTop: height * 0.01,
    marginBottom: height * 0.01,
    borderBottomWidth: 1,
    borderBottomColor: '#3bafda'
  },
  back: {
    color: '#fff',
    fontSize: 60,
    marginLeft: width * 0.05,
    marginTop: - height * 0.03,
  }
});
export default FoodChart;