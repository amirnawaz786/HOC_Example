import {Text, TouchableOpacity} from "react-native";
import React from "react";
const Button =(props)=>{

    console.log("props ====>>>>",props.name);
    return(
        <TouchableOpacity
            style={{height:50,width:300,backgroundColor:'green',marginVertical:10,justifyContent:"center",alignItems:'center'}}
            onPress={()=>{props.onPress()}}>
            <Text>{props.name}</Text>
        </TouchableOpacity>
    )
}
export default React.memo(Button);
