import React, {useEffect} from 'react'
import {View, Text, FlatList, Image, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Types from "../../redux/CartItem";
import Header from "../../Components/Header/Header";
import ApiHelper from "../../Api/ApiHelper";
import apiHelper from "../../Api/ApiHelper";
import EndPoints from "../../Api/EndPoints";




function CartScreen({navigation}) {
    const cartItems = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(()=>{
        getUsers();
    })

    const removeItemFromCart = (item) =>
        dispatch({
            type: Types.REMOVE_FROM_CART,
            payload: item
        })
    const getUsers = () =>{
        apiHelper.getAPi(EndPoints.users,"",(response)=>{
            console.log("get Users ====response ====>>>>",response);
        })
    }
    function Separator() {
        return <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />
    }
    return (
        // <SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}>
            <View style={{flex:0.1,}}>
                <Header
                    title={"Cart Screen"}
                    onRightImagePress = {()=>{}}
                    rightTitle={cartItems.length}
                    onLeftImagePress={()=>{navigation.goBack()}}
                />
            </View>
            <View
                style={{
                    flex: 0.9
                }}>
                {cartItems.length !== 0 ? (
                    <FlatList
                        data={cartItems}
                        keyExtractor={item => item.id.toString()}
                        ItemSeparatorComponent={() => Separator()}
                        renderItem={({ item }) => (
                            <View style={styles.bookItemContainer}>
                                <Image source={{ uri: item.imgUrl }} style={styles.thumbnail} />
                                <View style={styles.bookItemMetaContainer}>
                                    <Text style={styles.textTitle} numberOfLines={1}>
                                        {item.name}
                                    </Text>
                                    <Text style={styles.textAuthor}>by {item.author}</Text>
                                    <View style={styles.buttonContainer}>
                                        <TouchableOpacity
                                            onPress={() => {removeItemFromCart(item)}}
                                            style={styles.button}>
                                            <Text style={styles.buttonText}>Remove -</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                ) : (
                    <View style={styles.emptyCartContainer}>
                        <Text style={styles.emptyCartMessage}>Your cart is empty :'(</Text>
                    </View>
                )}
            </View>
        </View>
        // </SafeAreaView>

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
        backgroundColor: '#ff333390',
        padding: 5
    },
    buttonText: {
        fontSize: 22,
        color: '#fff'
    },
    emptyCartContainer: {
        marginTop: 250,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyCartMessage: {
        fontSize: 28
    }
})

export default CartScreen

