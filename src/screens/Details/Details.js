
import React, {useCallback, useMemo, useState} from "react";
import {NativeModules, Platform, Text, View} from "react-native";
import Button from "../../Components/Button/Button";
const  {MathOperations} = NativeModules;
 const Details =(props)=>{
     const [count,setCount] = useState(0);
     const [item,setItem] = useState(0);
     const [data,setData] = useState([
         {
             id:1,
             name:"John",
             age:24
         },
         {
             id:2,
             name:"John",
             age:25
         },
         {
             id:3,
             name:"John",
             age:26
         }
     ])

    const renderingComponent = useMemo(()=>{
        return <IsReRendering/>
    },[count]);

    const onIncreaseCount = useCallback(()=>{
        setCount(count+1)},[count]
    )
    const onIncreaseItem = useCallback(()=>{
        setItem(item+1)
    },[item])

     const callNativeModule = ()=>{
        console.log("Math Operations ===>>>",Platform.OS === "ios" ? MathOperations.add : "no module");
     }

     const reduceArray = (array)=>{
        array.reduce((prev,next)=>{
            console.log("previous ===>>>",prev);
            console.log("Next ===>>>",next);
        })
     }

     function * generatorFunction() { // Line 1
         console.log('This will be executed first.');
         yield 'Hello, ';   // Line 2
         console.log('I will be printed after the pause');
         yield 'World!';
     }
     const generateFunction = generatorFunction();
    console.log("generateFunction ==1==>>>",generateFunction.next().value)
    console.log("generateFunction ==2==>>>",generateFunction.next().value)

    return(
        <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
            {renderingComponent}
            <Text>{"Testing Please Ignore"}</Text>
            <Button name={"Increase Count"} onPress={()=>{callNativeModule()}}/>
            <Button name={"Increase Item"} onPress={()=>{generateFunction.next()}}/>
        </View>
    )
}
export default React.memo(Details);

 const IsReRendering = (props) => {
     const checkRender =() =>{
         console.log("Is Re Rendering ...?")
     }
   return(
       <View>
           {checkRender()}
           <Text>{"Is Re Rendering ...?"}</Text>
       </View>
   )
 }



