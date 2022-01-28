
import {StyleSheet} from  "react-native";
import colors from "../../assets/colors/colors";

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        flexDirection:"row",
        paddingTop:30,
        backgroundColor:colors.BLUE
    },
    leftContainer:{
        flex:0.2,
        backgroundColor:colors.BLUE,
    },
    centerContainer:{
        flex:0.6,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:colors.BLUE
    },
    rightContainer:{
        flex:0.2,
        backgroundColor:colors.BLUE,
        // justifyContent:"center",
        // alignItems:"center"
    },
    headerTitle:{
        fontSize:20,
    },
    itemCountContainer: {
        // position: 'absolute',
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: '#FF7D7D',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000
    },
    itemCountText: {
        color: 'white',
        fontWeight: 'bold'
    }
})
export default styles;
