import React, {useEffect, useState} from "react";
import {View, FlatList, Image, Text, TouchableOpacity, StyleSheet, SafeAreaView, Alert} from "react-native";
import {books} from "../../Utiils/Books";
import {useSelector,useDispatch} from "react-redux";
import {addToCart} from "../../redux/actions";
import Header from "../../Components/Header/Header";
import messaging from '@react-native-firebase/messaging';
import { withInAppNotification } from 'react-native-in-app-notification';
import images from "../../assets/images/images";
import Colors from "../../assets/colors/colors";
import CommonDataManager from "../../Utiils/Singleton";

const BookScreen =(props)=> {
    // const [colors,setColors] = useState("");
    const cartItems = useSelector(state => state)
    const dispatch = useDispatch();
    const addItemToCart = (item) => dispatch(addToCart(item));

    useEffect(()=>{
        getFCMToken();
        onMessage();
        // setTheme();
    });

    // const setTheme = () =>{
        let theme = CommonDataManager.getInstance().getTheme();
        const colors = theme === "light" ? Colors.lightTheme : Colors.darkTheme;
        // console.log("colors scheme ====>>>",colorScheme);
        // setColors(colorScheme);
    // }

    useEffect(()=>{
        getFCMToken();
        onMessage();
    },[])

    const getFCMToken = () =>{
        messaging().getToken().then((res)=>{
            console.log("FCM token ====>>>>",res);
        });
    }
    const onMessage = ()=> {
        messaging().onMessage(() => {
            props.showNotification({
                title: showText("Testing Please Ignore ....title"),
                message: showMessage("Testing Please Ignore .....message"),
                icon:images.add_to_cart,
                onPress: () => {
                    props.navigation.navigate("Cart")
                },
                // backgroundColour:colors.BLUE,
                additionalProps: {type: 'error',backgroundColor:'red'},
            });
        })
    }

    const showText = (text) => {
      return(
          <View>
              <Text style={{fontSize:20,fontWeight:"bold"}}>{text}</Text>
          </View>
      )
    }
    const showMessage = (text) => {
        return(
            <View>
                <Text style={{fontSize:20,fontFamily:'italic'}}>{text}</Text>
            </View>
        )
    }
    function Separator() {
        return <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />
    }

    return (

        <View style={styles.container}>
            <View style={{flex:0.1,}}>
                <Header
                    title={"Book Screen"}
                    leftImage={images.add_to_cart}
                    onRightImagePress = {()=>{props.navigation.navigate("Cart")}}
                    rightTitle={cartItems.length}
                    onLeftImagePress={()=>{
                        props.navigation.goBack()
                    }}
                />
            </View>
            <View style={{flex:0.9,backgroundColor:colors.BACKGROUND_COLOR}}>
                <FlatList
                    data={books}
                    keyExtractor={item => item.id.toString()}
                    ItemSeparatorComponent={() => Separator()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={()=>{props.navigation.navigate("Details")}}
                            style={styles.bookItemContainer}>
                            <Image source={{ uri: item.imgUrl }} style={styles.thumbnail} />
                            <View style={styles.bookItemMetaContainer}>
                                <Text style={styles.textTitle} numberOfLines={1}>
                                    {item.name}
                                </Text>
                                <Text style={styles.textAuthor}>by {item.author}</Text>
                                <View style={styles.buttonContainer}>
                                    <TouchableOpacity
                                        onPress={() => addItemToCart(item)}
                                        style={styles.button}>
                                        <Text style={styles.buttonText}>Add +</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff'
        },
        bookItemContainer: {
            flexDirection: 'row',
            padding: 10
        },
        thumbnail: {
            width: 100,
            height: 150
        },
        bookItemMetaContainer: {
            padding: 5,
            paddingLeft: 10
        },
        textTitle: {
            fontSize: 22,
            fontWeight: '400'
        },
        textAuthor: {
            fontSize: 18,
            fontWeight: '200'
        },
        buttonContainer: {
            position: 'absolute',
            top: 110,
            left: 10
        },
        button: {
            borderRadius: 8,
            backgroundColor: '#24a0ed',
            padding: 5
        },
        buttonText: {
            fontSize: 22,
            color: '#fff'
        }
    })

export default withInAppNotification(BookScreen)
