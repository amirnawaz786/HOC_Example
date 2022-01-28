import React, {PureComponent, useEffect} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import PaymentHelper from "../../Utiils/PaymentHelper";

export default class PaymentScreen extends PureComponent {


     getStripToken = ()=>{
         let publishableKey = "pk_test_51KBYtjJhGnmfpsXagGhJTrD4tO4bxEWobebQWidxVzN9bvoBAp0q1MYqZF8ulYK3S2PP0BWpFM0lHk6IxaqvoUmM00BbeGl0e1";
         let data = {
                "cardNumber" : "4242424242424242",
                "exp_month"  : "12",
                "exp_year"   : "33",
                "cvc"        : "123",
                "name"       : "Amir"
        }
        PaymentHelper.getToken(data,publishableKey,(response)=>{
            console.log("response of getting Token ===>>",response.id);
            if (response){
                let SECRET_KEY_DEV = "sk_test_51KBYtjJhGnmfpsXaFF68RoPGTYbTUCkeVLv6xDB0IftkvERsLpYtanNPHTrUr4UMW6UHuPZjEYX7TFxxbYzY6cw100nuTzjvUZ";
                let price = '100';
             PaymentHelper.chargeAccount(SECRET_KEY_DEV,response.id,price,(response)=>{
                 console.log("response of chargeAccount ===>>",response);
                 PaymentHelper.retrieveBalance(SECRET_KEY_DEV,(response)=>{
                     console.log("response of retrieveBalance ===>>",response);
                 })
             })
            }
        })
    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.header}>Card Form Example</Text>
                <Text style={styles.instruction}>Click button to show Card Form dialog.</Text>
                {/*<Button*/}
                {/*    text="Enter you card and pay"*/}
                {/*    loading={loading}*/}
                {/*    onPress={()=>{*/}
                {/*        // this.getStripToken();*/}
                {/*        this.handleCardPayPress()*/}
                {/*    }}*/}
                {/*/>*/}
                {/*<View style={styles.paymentMethod} >*/}
                {/*    {paymentMethod && (*/}
                {/*        <Text style={styles.instruction}>Payment Method: {JSON.stringify(paymentMethod)}</Text>*/}
                {/*    )}*/}
                {/*</View>*/}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instruction: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    paymentMethod: {
        height: 20,
    },
})
