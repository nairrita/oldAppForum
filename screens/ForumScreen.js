import * as React from 'react';
import {TouchableOpacity, Text, View, TextInput,KeyboardAvoidingView, StyleSheet, FlatList, Image, ScrollView, SafeAreaView} from 'react-native';
import {Badge, Icon, Header} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';
import {RFValue} from 'react-native-responsive-fontsize';
import { SimpleLineIcons } from '@expo/vector-icons';
var logo = require("../assets/shareYourProblem.png")
var logo2 = require("../assets/drivingLicense.png")
var logo3 = require("../assets/panCard.png")
var logo4 = require("../assets/aadharCard.png")
var logo5 = require("../assets/passport.png")
var logo6 = require("../assets/education.png")
var logo7 = require("../assets/automobiles.png")
var logo8 = require("../assets/travel.png")
var logo9 = require("../assets/film.png")
var logo10 = require("../assets/sports.png")
var logo11 = require("../assets/electronics.png")
var logo12 = require("../assets/food.png")

export default class ForumScreen extends React.Component {
    render(){
        return(
            <KeyboardAvoidingView style = {styles.container} behavior = 'padding' enabled>
                <ScrollView style = {styles.scrollView}>
                <Header 
                backgroundColor = {"#00adb5"}
                containerStyle = {styles.header}
                centerComponent = {{
                    text:"Forum",
                    style : {flex:1,color:"#fff",fontWeight:'bold', fontStyle:'italic', fontSize:RFValue(30)}
                }}
                />
                <TouchableOpacity 
                style = {styles.button5}
                onPress = {()=>{
                    this.props.navigation.navigate("PostYourTopic")
                }}>
                <Text style = {{fontWeight:'bold',color:"#fff",fontSize:RFValue(40),fontStyle:'italic',alignItems:'center',}}>Post your topic</Text>
                <Image 
                source = {logo}
                style = {styles.shareYourProblemImage}/>
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.button1}
                onPress={()=>{
                    this.props.navigation.navigate("DrivingLicense")
                }}>
                    <Text style = {styles.buttonText}>Driving License</Text>
                    <Image 
                    source = {logo2}
                    style = {styles.drivingLicenseImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.button1}
                onPress={()=>{
                    this.props.navigation.navigate("AadharCard")
                }}>
                    <Text style = {styles.buttonText}>AADHAR Card</Text>
                    <Image 
                    source = {logo4}
                    style = {styles.aadharCardImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                style ={styles.button10}
                onPress={()=>{
                    this.props.navigation.navigate("PanCard")
                }}>
                    <Text style = {styles.buttonText}>PAN Card</Text>
                    <Image
                    source = {logo3}
                    style = {styles.panCardImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.button2}
                onPress={()=>{
                    this.props.navigation.navigate("Passport")
                }}>
                    <Text style = {styles.buttonText}>Passport</Text>
                    <Image 
                    source={logo5}
                    style = {styles.passportImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.button8}
                onPress={()=>{
                    this.props.navigation.navigate("Education")
                }}>
                    <Text style = {styles.buttonText}>Education</Text>
                    <Image 
                    source = {logo6}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.button9}
                onPress={()=>{
                    this.props.navigation.navigate("Automobiles")
                }}>
                    <Text style = {styles.buttonText}>Automobiles</Text>
                    <Image 
                    source = {logo7}
                    style = {styles.automobilesImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.button11}
                onPress={()=>{
                    this.props.navigation.navigate("Travel")
                }}>
                    <Text style = {styles.buttonText}>Travel & Tourism</Text>
                    <Image 
                    source = {logo8}
                    style = {styles.travelImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.button12}
                onPress={()=>{
                    this.props.navigation.navigate("Film")
                }}>
                    <Text style = {styles.buttonText}>Film & Entertainment</Text>
                    <Image 
                    source = {logo9}
                    style = {styles.filmImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.button13}
                onPress={()=>{
                    this.props.navigation.navigate("Sports")
                }}>
                    <Text style = {styles.buttonText}>Sports</Text>
                    <Image 
                    source = {logo10}
                    style = {styles.sportsImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.button14}
                onPress={()=>{
                    this.props.navigation.navigate("Electronics")
                }}>
                    <Text style = {styles.buttonText}>Electronics</Text>
                    <Image 
                    source = {logo11}
                    style = {styles.eImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.button15}
                onPress={()=>{
                    this.props.navigation.navigate("Food")
                }}>
                    <Text style = {{fontWeight:'bold',color:"#fff",fontSize:RFValue(15),fontStyle:'italic',alignItems:'center',}}>Food & Dine-out</Text>
                    <Image 
                    source = {logo12}
                    style = {styles.foodImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.button7}
                onPress = {()=>{

                }}>
                    <Text style = {{fontWeight:'bold',color:"#fff",fontSize:RFValue(50),fontStyle:'italic',}}>Others</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style = {styles.button4}
                onPress={()=>{
                    this.props.navigation.navigate("SignIn")
                }}>
                    <Text style = {styles.buttonText}>Logout</Text>
                    <SimpleLineIcons name="logout" size={RFValue(50)} color="black" />
                </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:"#222831",
        alignItems:'center',
    },
    button1 : {
        backgroundColor : "#00adb5",
        marginLeft : RFValue(13),
        borderWidth:RFValue(2),
        borderColor:"#fff",
        width:RFValue(150),
        justifyContent:'center',
        alignItems:'center',
        marginTop : RFValue(20),
        borderRadius:RFValue(5),
    },
    button2 : {
        backgroundColor : "#00adb5",
        borderWidth:RFValue(2),
        borderColor:"#fff",
        marginLeft : RFValue(180),
        width:RFValue(150),
        justifyContent:'center',
        alignItems:'center',
        marginTop:RFValue(-243),
        borderRadius:RFValue(5),
    },
    button3 : {
        backgroundColor : "#00adb5",
        borderWidth:RFValue(2),
        borderColor:"#fff",
        justifyContent:'center',
        alignItems:'center',
        marginTop:RFValue(150),
        borderRadius:RFValue(5),
        width:RFValue(200),
    },
    button4 : {
        backgroundColor : "#00adb5",
        borderWidth:RFValue(2),
        borderColor:"#fff",
        justifyContent:'center',
        alignItems:'center',
        marginTop:RFValue(20),
        borderRadius:RFValue(5),
        width:RFValue(100),
        alignSelf : 'center',
    },
    button5 : {
        backgroundColor : "#00adb5",
        borderWidth:RFValue(2),
        borderColor:"#fff",
        justifyContent:'center',
        alignItems:'center',
        marginTop : RFValue(20),
        borderRadius:RFValue(5),
        width:RFValue(320),
        alignSelf : 'center',
    },
    button6 : {
        backgroundColor : "#00adb5",
        borderWidth:RFValue(2),
        borderColor:"#fff",
        marginLeft : RFValue(180),
        justifyContent:'center',
        alignItems:'center',
        marginTop:RFValue(-100),
        borderRadius:RFValue(5),
        width:RFValue(150),
    },
    button7 : {
        backgroundColor : "#00adb5",
        borderWidth:RFValue(2),
        borderColor:"#fff",
        justifyContent:'center',
        alignItems:'center',
        marginTop:RFValue(30),
        borderRadius:RFValue(5),
        width:RFValue(200),
        alignSelf : 'center',
    },
    button8 : {
        backgroundColor : "#00adb5",
        borderWidth:RFValue(2),
        marginLeft : RFValue(13),
        borderColor:"#fff",
        width:RFValue(150),
        justifyContent:'center',
        alignItems:'center',
        marginTop : RFValue(140),
        borderRadius:RFValue(5),
    },
    button9 : {
        backgroundColor : "#00adb5",
        borderWidth:RFValue(2),
        marginLeft : RFValue(180),
        borderColor:"#fff",
        width:RFValue(150),
        height:RFValue(187),
        justifyContent:'center',
        alignItems:'center',
        marginTop : RFValue(-187),
        borderRadius:RFValue(5),
    },
    button10 : {
        backgroundColor : "#00adb5",
        borderWidth:RFValue(2),
        borderColor:"#fff",
        marginLeft : RFValue(180),
        justifyContent:'center',
        alignItems:'center',
        marginTop:RFValue(-97),
        borderRadius:RFValue(5),
        width:RFValue(150),
    },
    button11 : {
        backgroundColor : "#00adb5",
        borderWidth:RFValue(2),
        borderColor:"#fff",
        marginLeft : RFValue(15),
        justifyContent:'center',
        alignItems:'center',
        marginTop:RFValue(20),
        borderRadius:RFValue(5),
        width:RFValue(150),
    },
    button12 : {
        backgroundColor : "#00adb5",
        borderWidth:RFValue(2),
        borderColor:"#fff",
        marginLeft : RFValue(15),
        justifyContent:'center',
        alignItems:'center',
        marginTop:RFValue(-200),
        borderRadius:RFValue(5),
        marginLeft:RFValue(180),
        width:RFValue(150),
    },
    button13 : {
        backgroundColor : "#00adb5",
        borderWidth:RFValue(2),
        borderColor:"#fff",
        marginLeft : RFValue(15),
        justifyContent:'center',
        alignItems:'center',
        marginTop:RFValue(20),
        borderRadius:RFValue(5),
        marginLeft:RFValue(15),
        width:RFValue(150),
    },
    button14 : {
        backgroundColor : "#00adb5",
        borderWidth:RFValue(2),
        borderColor:"#fff",
        marginLeft : RFValue(15),
        justifyContent:'center',
        alignItems:'center',
        marginTop:RFValue(-110),
        borderRadius:RFValue(5),
        marginLeft:RFValue(180),
        width:RFValue(150),
        height:RFValue(110),
    },
    button15 : {
        backgroundColor : "#00adb5",
        borderWidth:RFValue(2),
        borderColor:"#fff",
        justifyContent:'center',
        alignItems:'center',
        marginTop:RFValue(20),
        borderRadius:RFValue(5),
        alignSelf:'center',
    },
    buttonText:{
        fontWeight:'bold',
        color:"#fff",
        fontSize:RFValue(20),
        fontStyle:'italic',
        alignItems:'center',
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
        flex:1,
        width:RFValue(345)
    },
    shareYourProblemImage:{
        width:RFValue(150),
        height:RFValue(180)
    },
    drivingLicenseImage : {
        width:RFValue(150),
        height:RFValue(100),
    },
    panCardImage : {
        width:RFValue(100),
        height:RFValue(70),
    },
    aadharCardImage : {
        width:RFValue(80),
        height:RFValue(70),
    },
    passportImage : {
        width:RFValue(100),
        height:RFValue(100),
    },
    scrollView: {
        marginTop:RFValue(-15),
        backgroundColor: '#222831',      
    },
    automobilesImage : {
        width:170,
        height:170,
    },
    travelImage : {
        width:200,
        height:180,
    },
    filmImage:{
        width:160,
        height:180,
    },
    sportsImage : {
        width:200,
        height:100,
    },
    eImage : {
        width:170,
        height:90,
    },
    foodImage : {
        width:200,
        height:160,
    },
})