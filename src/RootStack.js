import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import BookScreen from "./screens/BookScreen/BookScreen";
import CartScreen from "./screens/CartScreen/CartScreen";
import PaymentScreen from "./screens/PaymentScreen/PaymentScreen";
import StripPayment from "./screens/StripPayment/StripPayment";
import StripProviderScreen from "./screens/StripPayment/StripProviderScreen";
import HOCParent from "./screens/HOCParent/HOCParent";
import ProfileScreen from "./screens/HOCParent/ProfileScree";
import TestingScreen from "./screens/HOCParent/TestingScreen";
import Details from "./screens/Details/Details";


const Stack = createStackNavigator();

function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={"Details"}
                screenOptions={{headerShown:false}}>
                <Stack.Screen name='Books' component={BookScreen}/>
                <Stack.Screen name='Cart' component={CartScreen} />
                <Stack.Screen name='Payment' component={PaymentScreen} />
                <Stack.Screen name='StripePayment' component={StripPayment} />
                <Stack.Screen name='StripeProvide' component={StripProviderScreen} />
                <Stack.Screen name='HOCParent' component={HOCParent} />
                <Stack.Screen name='Profile' component={ProfileScreen} />
                <Stack.Screen name='Testing' component={TestingScreen} />
                <Stack.Screen name='Details' component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator
