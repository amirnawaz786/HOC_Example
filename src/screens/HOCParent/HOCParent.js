import * as React from 'react'
import {Text, View} from "react-native";
import TestingScreen from "./TestingScreen";
import ProfileScreen from "./ProfileScree";

const HOCParent =(props)=> {

    return (
        <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
            <TestingScreen/>
            <ProfileScreen/>
        </View>
    );
}
export default HOCParent;
