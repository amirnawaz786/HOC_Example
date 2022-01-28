import React from 'react'
import {TouchableOpacity, View, Text, Image} from 'react-native'
import styles from "./styles";
import PropTypes from 'prop-types';
import images from "../../assets/images/images";
const Header =(props)=> {
    const {
        leftImage,
        onLeftImagePress,
        rightImage,
        rightSubImage,
        onRightImagePress,
        title,
        rightTitle
    } = props;

    return (
        <View style={styles.mainContainer}>
            <View style={styles.leftContainer}>
                {onLeftImagePress !== undefined && <TouchableOpacity style={{flex:1}} onPress={()=>{onLeftImagePress()}}>
                    <Image style={{height:20,width:20,resizeMode:'contain'}} source={leftImage} />
                </TouchableOpacity>}
            </View>
            <View style={styles.centerContainer}><Text style={styles.headerTitle}>{title}</Text></View>
            <View style={styles.rightContainer}>
                {onRightImagePress !== undefined &&
                    <TouchableOpacity style={{flex:1,flexDirection:"row",justifyContent:'center',alignItems:'center'}} onPress={()=>{onRightImagePress()}}>
                        <View style={styles.itemCountContainer}><Text style={styles.itemCountText}>{rightTitle}</Text></View>
                        <View><Image style={{height:20,width:20,resizeMode:'contain'}} source={rightSubImage} /></View>
                    </TouchableOpacity>}
            </View>
        </View>
    )
}

Header.propTypes = {
    title : PropTypes.string
}

Header.defaultProps =
    {
        title: 'Hello',
        // rightSubImage:images.add_to_cart
    }


export default Header;
