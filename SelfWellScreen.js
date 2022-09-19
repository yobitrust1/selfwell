import React, {useEffect} from 'react';
import { View, Text, Image, StyleSheet, StatusBar, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';

import Card from '../components/Card';
import Block from '../components/Block';
import Badge from '../components/Badge';



const { width, height } = Dimensions.get("window");

const SelfWellScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();

 
  
    return (
      <View style={[styles.container , {
        backgroundColor: colors.background
      }]}>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <Block>
        
        <ScrollView showsVerticalScrollIndicator={false}
          style={{ paddingVertical: 16 * 2 }}>
        <Block flex={false} row space="between" style={styles.categories}>
            
              
          
              <TouchableOpacity
                
                onPress={() => navigation.navigate("AddCardiac")}
              >

                <Card center middle shadow style={styles.category}>
                  <Badge
                    margin={[0, 0, 15]}
                    size={50}
                    color="rgba(41,216,143,0.20)"
                  >
                    <Image source={require('../assets/heartbeat.png')} style={styles.image} />
                  </Badge>
                  <Text style={styles.text}>
                    Cardio-care
                  </Text>
                 
                </Card>
              </TouchableOpacity>

              <TouchableOpacity
                
                onPress={() => navigation.navigate("WelcomeScreen")}
              >

                <Card center middle shadow style={styles.category}>
                  <Badge
                    margin={[0, 0, 15]}
                    size={50}
                    color="rgba(41,216,143,0.20)"
                  >
                    <Image source={require('../assets/blood.png')} style={styles.image} />
                  </Badge>
                  <Text style={styles.text}>
                    Blood analysis
                  </Text>
                 
                </Card>
              </TouchableOpacity>


              <TouchableOpacity
                
                onPress={() => navigation.navigate("BmiScreen")}
              >

                <Card center middle shadow style={styles.category}>
                  <Badge
                    margin={[0, 0, 15]}
                    size={50}
                    color="rgba(41,216,143,0.20)"
                  >
                    <Image source={require('../assets/bmi.png')} style={styles.image}/>
                  </Badge>
                  <Text style={styles.text}>
                    Bmi calculator
                  </Text>
                </Card>
              </TouchableOpacity>
            
            
          </Block>
        </ScrollView>
        </Block>
      </View>
      
    );
};

export default SelfWellScreen;

const styles = StyleSheet.create({
  container: {
    flex : 1,
    display : 'flex',
  },
  cards : {
    flex : 1,
    display : 'flex',
    marginTop : 10,
    marginHorizontal : 30
  }, 
  categories: {
    flexWrap: "wrap",
    paddingHorizontal: 16 * 2,
    marginBottom: 16 * 3.5,
    
  },
  category: {
    // this should be dynamic based on screen width
    minWidth: (width - 25 * 2.4 - 16) / 2,
    maxWidth: (width - 25 * 2.4 - 16) / 2,
    maxHeight: (width - 25 * 2.4 - 16) / 2,
    backgroundColor : '#fff',
  },
  header: {
    paddingHorizontal: 16 * 2
  },
  image: {
    width: width * 0.25,
    height: width * 0.25
  },
  text:{
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000000',
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginTop: height * 0.025
  }
});
