import * as React from 'react';
import {Text, View, TouchableOpacity, TextInput, StyleSheet, Alert} from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import SignUpScreen from './SignUpScreen';
import {RFValue} from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';
import {Header, Icon, Badge} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';

export default class SignInScreen extends React.Component {
constructor(){
    super()
    this.state = {
        emailId : " ",
        password : " ",
    }
}

userSignIn=(emailId,password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId,password)
    .then(response=>{
        Alert.alert("Successfully Signed In")
        this.props.navigation.navigate("Forum")
    })
    .catch(error=>{
        var error = error.code 
        var errorMessage = error.message
        return Alert.alert(errorMessage)
    })
}

userForgotPassword=()=>{

}

    render(){
        return(
            <View style = {styles.container}>
                <Header 
                backgroundColor = {"#00adb5"}
                containerStyle = {styles.header}
                centerComponent={{
                    text : 'Sign in here',
                    style : {flex:1,color:"#fff",fontWeight:'bold', fontStyle:'italic', fontSize:RFValue(25)}
                }}
                />
                <TextInput 
                style = {styles.inputBox}
                placeholder = {"Email-ID"}
                placeholderTextColor = {'#393e46'}
                clearButtonMode = {"while-editing"}
                autoCorrect = {false}
                keyboardType = {"email-address"}
                allowFontScaling = {true}
                autoCapitalize = {"none"}
                onChangeText={(text)=>{
                    this.setState({
                        emailId:text
                    })
                }} />
                <TextInput 
                style = {styles.inputBox}
                placeholder = {"Password"}
                placeholderTextColor = {'#393e46'}
                clearButtonMode = {"while-editing"}
                allowFontScaling = {true}
                autoCorrect = {false}
                clearTextOnFocus = {true}
                textContentType = {"newPassword"}
                passwordRules = {"required: lower; required: upper; required: digit; required: [-]; minlength: 20"}
                autoCapitalize = {"none"}
                secureTextEntry = {true}
                onChangeText = {(text)=>{
                    this.setState({
                        password:text
                    })
                }} />
                <TouchableOpacity 
                style = {styles.button}
                onPress = {()=>{
                    this.userSignIn(this.state.emailId, this.state.password)
                }}>
                    <Text style = {styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style = {styles.button}
                onPress={()=>{
                    this.userForgotPassword()
                }}>
                    <Text style = {styles.buttonText}>Forgot Password</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style = {styles.button}
                onPress = {()=>{
                    this.props.navigation.navigate("SignUp")
                }}>
                    <Text style = {styles.buttonText}>Not Registered? Sign up here</Text>
                    <AntDesign name="rightcircle" size={40} color="black" />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:"#222831",
        alignItems:'center',
    },
    button : {
        backgroundColor : "#00adb5",
        borderWidth:RFValue(2),
        borderColor:"#fff",
        justifyContent:'center',
        alignItems:'center',
        marginTop:RFValue(20),
        borderRadius:RFValue(5),
    },
    buttonText:{
        fontWeight:'bold',
        color:"#fff",
        fontSize:RFValue(20),
        fontStyle:'italic',
    },
    inputBox:{
        backgroundColor : '#00adb5',
        borderColor:'#eeeeee',
        borderRadius:RFValue(5),
        borderWidth:RFValue(2),
        width:RFValue(300),
        height:RFValue(50),
        marginTop:RFValue(20),
    },
    header : {
        marginTop:-15,
        flex:0.1,
        width:RFValue(500)
    }
})