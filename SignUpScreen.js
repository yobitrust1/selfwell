import React from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    Alert,
    Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import  { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import DatePicker from 'react-native-datepicker'
import { useTheme } from 'react-native-paper';
import { AuthContext } from '../components/context';
import API from '../API';
import { useState, useEffect } from 'react';

const { width, height } = Dimensions.get("window");

const SignUpScreen = ({navigation}) => {

    const [data, setData] = React.useState({
        username: '',
        email: '',
        password: '',
        confirmedPassword: '',
        gender: '',
        age: 0,
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
        isValidusername: true,
        isValidEmail: true,
        isValidPassword: true,
        isValidconfirmedPassword: true,
        isValidAge: true,
    });

    const [message, setMessage] = useState("");
    const [successful, setSuccessful] = useState(false);

    validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      };

    validatePassword = (password) => {
        var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#-\$%\^&\*\-\/\+])(?=.{8,})/;
        return re.test(password);
      };
    
      useEffect(() => {
  
       
      }, 
      [message, successful]);
    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidusername: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidusername: false
            });
        }
    }

    const textInputChange1 = (val) => {
       
            setData({
            ...data,
            gender: val,
            check_textInputChange: true,
            });
        
    }   

    const textInputChange2 = (val) => {
        if( val >= 5 && val <= 120 ){
            setData({
            ...data,
            age: val,
            check_textInputChange: true,
            isValidAge: true
            });
        }
        else {
            setData({
            ...data,
            age: val,
            check_textInputChange: false,
            isValidAge: false
        });
    }
        }
    
    const textInputChange3 = (val) => {
        if( validateEmail(val) ) {
            setData({
            ...data,
            email: val,
            check_textInputChange: true,
            isValidEmail: true,
            });
        } else {
            setData({
            ...data,
            email: val,
            check_textInputChange: false,
            isValidEmail: false,
            });
        }
    }   

    const handlePasswordChange = (val) => {
        if( validatePassword(val) ) {
            setData({
                ...data,
                password: val,
                check_textInputChange: true,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                check_textInputChange: false,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    

    const SignUpHandle = async (username, email, password, gender, age) => {

        setMessage("");
        setSuccessful(false);

        if ( data.username.length == 0 || data.email.length == 0 || data.password.length == 0 || data.gender.length == 0 || data.age.length == 0 ) {
            Alert.alert('Wrong Input!', 'All the fields cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }
        else if (!validateEmail(data.email)){
            Alert.alert('Wrong Input!', 'Your email is not valid', [
                {text: 'Okay'}
            ]);
            return;
        }
        else if (!validatePassword(data.password)){
            Alert.alert('Wrong Input!', 'Your password is not valid', [
                {text: 'Okay'}
            ]);
            return;
        }
        else {
            const isEnable = false;
            
            await API.Register({ username, email, password, gender, age, isEnable }).then(
                (response) => {
                  setMessage(response.data.message);
                  setSuccessful(true);
                  Alert.alert('Success message', 'You are registered successfully! You will receive an email to confirm your account.', [
                    {
                        text: 'Okay',
                        onPress: () => navigation.navigate("ConfirmAccount")
                    }
                ]);
                },
                (error) => {
                  const resMessage =
                    (error.response &&
                      error.response.data &&
                      error.response.data.message) ||
                    error.message ||
                    error.toString();
        
                  setMessage(resMessage);
                  setSuccessful(false);
                  console.log(message);
                  Alert.alert('Error message', 'this email is already in use!', [
                    {text: 'Okay'}
                ]);
                }
              ); 
              
        }
           
    
        
     }

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#57BED1' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Register Now!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView>
            <Text style={styles.text_footer}>Full Name</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Full Name"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>
            { data.isValidusername ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Your name must contain at least 4 characters.</Text>
            </Animatable.View>
            }

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Email</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="envelope-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Email"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange3(val)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>
            { data.isValidEmail ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Please enter a valid email.</Text>
            </Animatable.View>
            }
            
            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Password"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            { data.isValidPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Your password must contain at least:{'\n'} 8 characters 
                                                                              {'\n'} one uppercase letter (ex: A, B, etc.)
                                                                              {'\n'} one lowercase letter
                                                                              {'\n'} one digit number (ex: 0, 1, 2, 3, etc.)
                                                                              {'\n'} one special character (ex: $, #, @, !,%,^,* etc.)
            </Text>
            </Animatable.View>
            }
           
            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Gender</Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity
                onPress={(val) => textInputChange1(val ? 'male' : 'female')}>
               
                                               
                    <Image  source={require('../assets/male.png')}
                            style={styles.imageMale}
                            resizeMode="contain" />
                
            </TouchableOpacity>
            <TouchableOpacity
                onPress={(val) => textInputChange1(val ? 'female' : 'male')}>
               
                    <Image  source={require('../assets/female.png')}
                            style={styles.image}
                            resizeMode="contain" />
               
            </TouchableOpacity>
            </View>
            

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Age</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput 
                    placeholder="Your age"
                    style={styles.textInput}
                    keyboardType={'numeric'}
                    onChangeText={(val) => textInputChange2(val)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>
            { data.isValidAge ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Please enter a valid age between 5 and 120.</Text>
            </Animatable.View>
            }
            

            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By signing up you agree to our
                </Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                <Text style={styles.color_textPrivate}>{" "}and</Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {SignUpHandle( data.username, data.email, data.password, data.gender, data.age )}}
                >
                <LinearGradient
                    colors={['#57BED1', '#57BED1']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign Up</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[styles.signIn, {
                        borderColor: '#57BED1',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#57BED1'
                    }]}>Sign In</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </Animatable.View>
      </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#57BED1'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
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
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    },
    image: {
        height:height * 0.17,
        width: width * 0.4,
        marginTop: height *0.03
      },
    imageMale: {
        height:height * 0.2,
        width: width * 0.4,
               
      },
  });
