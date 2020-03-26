import React from "react";
import {StyleSheet,View, Text, StatusBar} from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze:{
        iconName:"weather-hail",
        gradient: ["#4DA0B0","#D39D38"],
        title: "Haze",
        subtitle: "Just don't go outside."
    },
    Thunderstorm:{
        iconName:"weather-lightning-rainy",
        gradient:["#e4e5e6" , "#00416a"],
        title:"Thunderstorm",
        subtitle:"Just don't go outside!"
    },
    Drizzle: {
      iconName: "weather-hail",
      gradient: ["#89F7FE", "#66A6FF"]
    },
    Rain: {
      iconName: "weather-rainy",
      gradient: ["#00C6FB", "#005BEA"]
    },
    Snow: {
      gradient: ["#7DE2FC", "#B9B6E5"]
    },
    Atmosphere: {
      iconName: "weather-hail",
      gradient: ["#89F7FE", "#66A6FF"]
    },
    Clear: {
      iconName: "weather-sunny",
      gradient: ["#FF7300", "#FEF253"]
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"]
    },
    Mist: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"]
    },
    Dust: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"]
    },
}

export default function Weather({temp, condition}){
    return (
            <LinearGradient
                colors={weatherOptions[condition].gradient}
                style={stlyes.container}>
                    <StatusBar barStyle="light-content" />
                <View style={stlyes.halfContainer}>
                    <MaterialCommunityIcons 
                        name={weatherOptions[condition].iconName} 
                        size={100} 
                        color="white" />
                    <Text style={stlyes.temp}>{temp}℃</Text>
                </View>
                <View style={{ ...stlyes.halfContainer, ...stlyes.textContainer}}>
                    <Text style={stlyes.title}>{weatherOptions[condition].title}</Text>
                    <Text style={stlyes.subtitle}>{weatherOptions[condition].subtitle}</Text>
                </View>
          </LinearGradient>
    )
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
]).isRequired
}

const stlyes = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems:"center"
    },
    temp:{
        fontSize:36,
        color:"white",
        fontWeight:"bold"
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        color:"white",
        fontSize:40,
        fontWeight:"300",
        marginBottom:15
    },
    subtitle:{
        color:"white",
        fontWeight:"600",
        fontSize:20
    },
    textContainer:{
        color:"white",
        fontSize:40,
        fontWeight:"300",
        marginBottom:15
    }
})