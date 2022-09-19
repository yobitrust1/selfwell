import React, {useState} from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, StatusBar, TouchableOpacity, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import  { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from 'react-native-paper';

import axios from "axios";

import Api from '../API';


const { width, height } = Dimensions.get("window");

const ConfirmAccount = ({navigation}) => {

    const { colors } = useTheme();
    
    const [token, setToken] = useState("");
    const [message, setMessage] = useState("");
    const [successful, setSuccessful] = useState(false);

    const CODE_LENGTH = new Array(4).fill(0);
    
    const values = token.split("");
    const selectedIndex = values.length < CODE_LENGTH.length ? values.length : CODE_LENGTH.length - 1;
    const confirm = async () => {
        
        if (token != "") {
             Api.confirmAccount(token).then(
                (response) => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                    Alert.alert('Success message', 'Your account is verified! Please login now!', [
                        {
                            text: 'Okay',
                            onPress: () => navigation.navigate("SignInScreen")
                        }
                    ]);
                  })
                  .catch((err) => {
                    Alert.alert('Erro message', 'Error in the entered code. Please check your email!', [
                        {
                            text: 'Okay',
                            onPress: () => navigation.navigate("SignInScreen")
                        }
                    ]);
                });}
        else{console.log("right something");}
       
        
    }

    return(
        <View  style={styles.container}>
          <StatusBar backgroundColor='#57BED1' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Confirm your account!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
              backgroundColor: colors.background
          }]}
        >
          <Text style={[styles.text_footer, {
                color: colors.text
            }]}>Enter your code</Text>
          <Text style={[styles.text_footer1, {
                color: colors.text
            }]}>We've sent a 4-digit code to your email</Text>
            <View style={[styles.wrap, {
                backgroundColor: colors.background
            }]}>
          {CODE_LENGTH.map((v, index) => {
            const removeBorder = index === CODE_LENGTH.length - 1 ? styles.noBorder : undefined;
            return (
              <View style={[styles.display, removeBorder, {
                backgroundColor: colors.background
            }]} key={index}>
                <Text style={[styles.text, {
                color: colors.text
            }]}>{values[index] || ""}</Text>
              </View>
              
            );
          })}
          <TextInput value={token}
         
            onChangeText={(value) => setToken(value)}  style={[
                styles.input,
                {
                  left: selectedIndex * 0,
                },
              ]}/>
        </View>
          
                <TouchableOpacity
                    style={styles.signIn}
                    onPress = { () => confirm()}
                >
                <LinearGradient
                    colors={['#57BED1', '#57BED1']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Confirm</Text>
                </LinearGradient>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
};

export default ConfirmAccount;
  
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#57BED1'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: width * 0.05,
      paddingBottom: width * 0.12,
  },
  footer: {
      flex: Platform.OS === 'ios' ? 3 : 5,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30,
      alignSelf: "center"
  },
  text_footer: {
      color: '#05375a',
      fontSize: 28,
      fontWeight: 'bold',
      alignSelf: "center",
      marginBottom: height * 0.015
  },
  text_footer1: {
    color:  "rgba(0, 0, 0, 0.55)",
    fontSize: 16,
    alignSelf: "center",
    marginBottom: height * 0.05
},

  button: {
      alignItems: 'center',
      marginTop: 50
  },
  wrap: {
    borderWidth: 2,
    width: width * 0.56,
    alignContent:"center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: height * 0.05,
    borderColor: "rgba(0, 0, 0, 0.2)",
    flexDirection: "row",
    marginBottom: height * 0.1
    },
  display: {
    borderRightWidth: 2,
    borderRightColor: "rgba(0, 0, 0, 0.2)",
    width: width * 0.137,
    height: height * 0.1,
    alignItems: "center",
    justifyContent: "center",
    overflow: "visible",
    },
  text: {
    fontSize: 32,
    },
  noBorder: {
    borderRightWidth: 0,
    },
  input: {
      position: "absolute",
      fontSize: 0,
      textAlign: "center",
      backgroundColor: "transparent",
      width: width * 0.56,
      top: height * 0,
      bottom: height * 0,
    },
    signIn: {
      width: width * 0.5,
      height: height * 0.09,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: "center",
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  }
});
