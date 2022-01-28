import * as React from 'react'
import { CardField, useStripe } from '@stripe/stripe-react-native';
import PaymentHelper from "../../Utiils/PaymentHelper";
import {View} from "react-native";
import Button from "../../Components/Button";
import {useState} from "react";

export default function StripPayment() {
    const { confirmPayment } = useStripe();
    const [pay,setPay] = useState(false);
    const [cardDetails,setCardDetails] = useState("");

   const getStripToken = ()=>{
        let publishableKey = "pk_test_51KBYtjJhGnmfpsXagGhJTrD4tO4bxEWobebQWidxVzN9bvoBAp0q1MYqZF8ulYK3S2PP0BWpFM0lHk6IxaqvoUmM00BbeGl0e1";
        let data = {
            "cardNumber" : `424242424242${cardDetails.last4}`,
            "exp_month"  : cardDetails.expiryMonth,
            "exp_year"   : cardDetails.expiryYear,
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

    return (

        <View style={{flex:1}}>
            <CardField
                postalCodeEnabled={false}
                placeholder={{number: '4242 4242 4242 4242',}}
                cardStyle={{backgroundColor: '#FFFFFF', textColor: '#000000',}}
                style={{width: '100%', height: 50, marginVertical: 30,}}
                onCardChange={(cardDetails) => {
                    console.log('cardDetails', cardDetails);
                    if (cardDetails.complete){
                        setCardDetails(cardDetails);
                        setPay(true);

                    }
                }}
                onFocus={(focusedField) => {}}
            />
            {
                pay &&
                <Button
                    text={"Play"}
                    onPress={()=>{
                        getStripToken();
                    }}
                />
            }

        </View>

    );
}
