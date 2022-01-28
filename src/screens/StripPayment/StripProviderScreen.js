import * as React from 'react'
import { StripeProvider } from '@stripe/stripe-react-native';
import StripPayment from "./StripPayment";
import {View} from "react-native";
import Header from "../../Components/Header/Header";
import Button from "../../Components/Button";
import CommonDataManager from "../../Utiils/Singleton";
import {useEffect, useState} from "react";
import {useNavigationState} from "@react-navigation/native";
import useColorScheme from "react-native/Libraries/Utilities/useColorScheme";
import Colors from "../../assets/colors/colors";
export default function StripProviderScreen(props) {
    let publishableKey = "pk_live_51K9ldQB4O0YFNEohavgZr5mRDBLw35vlb0DMNaEWJskKZnG94aA1ccnKcTl8rDjlf5aJfYMe82hXrS3fZOKaAOfz00X8U2z5Mk";

    const [colors,setColors] = useState("");
   const changeTheme =()=>{
       let theme = CommonDataManager.getInstance().getTheme();
       const colorScheme = theme === "light" ? Colors.lightTheme : Colors.darkTheme;
       console.log("colorScheme =colorScheme===>>>",colorScheme);
       CommonDataManager.getInstance().setTheme(theme === "light" ? "dark" : "light");
       setColors(colorScheme);
   }

    return (
       <View style={{flex:1}}>
           <View style={{flex:0.1}}>
               <Header
                    title={"Stripe Provider"}
                    onRightImagePress={()=>{props.navigation.navigate("Books")}}
               />
           </View>
           <View style={{flex:0.9}}>
               <View style={{flex:0.4,backgroundColor: colors.BACKGROUND_COLOR }}>
               </View>
               <View style={{flex:0.6,backgroundColor:'green'}}>
                   <StripeProvider
                       publishableKey={publishableKey}
                       merchantIdentifier="merchant.identifier">
                       <StripPayment />
                   </StripeProvider>
                   <View style={{height:100}}>
                       <Button
                            text={"Change Theme"}
                            onPress={()=>{changeTheme()}}
                       />
                   </View>
               </View>
           </View>
       </View>
    );
}
