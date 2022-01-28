import * as React from 'react'
import {Text, TouchableOpacity, View} from "react-native";
import HOComponent from "./HOComponent";
const ProfileScreen =(props)=> {
    return (
        <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
            <Text>{props.count}</Text>
            <TouchableOpacity onPress={props.onIncreasePress}>
                <Text>{"Increase count from Profile"}</Text>
            </TouchableOpacity>
        </View>
    );
}
export default HOComponent(ProfileScreen);
