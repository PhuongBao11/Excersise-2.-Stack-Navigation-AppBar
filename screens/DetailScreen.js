import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native";
const DetailsScreen =()=>{
    return(
        <View style={style.container}>
            <Text>Details Screnn</Text>
        </View>
    )
}

export default DetailsScreen;

const style =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})