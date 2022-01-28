import * as React from 'react'
import {Text, TouchableOpacity, View} from "react-native";
import HOComponent from "./HOComponent";
const TestingScreen =(props)=> {

    const getResults =()=>{
        let data = [3,600,110,90,3,600,200,3,200,600,90,110];
        let obj = {a:1,b:2}
        let str = "Welcome to this Javascript Guide!";
        let data1 = [3,1,2];
        let data2 = [2,1,3];
        // bubbleSort(data);
        // selectionSort(data);
        // findRepeatingElements(data);
        // findMinValue(data);
        // duplicateItems(data);
        // reverseString(str);
        // sumOfArrays(data1,data2);
        // checkArguments(4);
        // getReversedArray(data);
        // swapVariables(7,9);
        // printShapes("54321");
        // getSumOfArray(data,data2);
        // getNumberMode(200);
        // getFloydTriangle(7);
        // getTypeOfInput(data);
    }

    const getFloydTriangle =(number)=>{
        let str = "";
        let previousNumber = 1;
        for (let i = 0; i < number; i++){
             str = "";
            let j = 0;
            while (j <= i){
                str = str+"  "+previousNumber;
                j++
                previousNumber++;
            }
            console.log(str);
        }
    }

    const getSumOfArray = (arr1,arr2)=>{
        for (let i = 0; i<=arr1.length-1; i++){
            for (let j = 0; j<= arr2.length-1; j++){
                let sum = arr1[i]+arr2[j];
                if (sum === 4){
                    console.log("Pairs  => First Value :",arr1[i],"Second Value :",arr2[j]," = ",sum);
                }
            }
        }
    }

    const getNumberMode = (number)=>{
        if (number % 2 === 0){
            console.log("Given Number ",number,"is Even")
        }else {
            console.log("Given Number ",number,"is Odd")
        }
    }



    const printShapes = (a) =>{
        console.log("a====>>>",a.length);
        let str = "";
        for (let i = 0; i < a.length ; i++){
            console.log('numbers ===>>>',str+= i + " ")
        }
    }

    const bubbleSort = (array) =>{
        for (let i = 0; i < array.length; i++){
            for (let j = 0; j < array.length; j++ ){
                let temp = "";
                if (array[j] > array[j+1]){
                    temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;
                }
            }
        }
        console.log("array ==bubbleSort==>>>>",array);
    }

    const selectionSort = (array) =>{
        for (let i = 0; i < array.length-1; i++){
            let min = array[i];
            let loc = i;
            for (let j = i+1; j < array.length; j++ ){
                let temp;
                if (array[j] < min){
                    min = array[j]
                    loc = j;
                }
                temp = array[i];
                array[i] = array[loc];
                array[loc] = temp;
            }
        }
        console.log("array ==selectionSort==>>>>",array);
    }

    const findRepeatingElements = (array) =>{
        let repeatedItem = {};
        for (let i = 0; i <= array.length; i++){
            for ( let j = i+1; j <= array.length; j++){
                if (array[i] === array[j]){
                    repeatedItem[array[i]] = repeatedItem[array[i]] +1
                    // if (repeatedItem[array[j]]){
                    //     repeatedItem[array[j]] +=1
                    // }
                    // else {
                    //     repeatedItem[array[j]] = 1
                    // }
                }
            }
        }
        console.log("findRepeatingElements =====>>>>",repeatedItem);
    }

    const  duplicateItems =(array)=>{
        let counts ={};
        for (let i = 0; i < array.length; i++){
            if (counts[array[i]]){
                counts[array[i]] +=1
            }else {
                counts[array[i]] =1
            }
        }
        for (let item in counts){
            if (counts[item] >= 2){
            console.log("counts ====>>>",item, counts[item] ,"times")
            }
        }
    }


    const findMinValue = (array) =>{
        let min = array[0];
        for (let i = 0; i< array.length; i++){
           if (array[i] >= min){
               min = array[i];
           }
        }
        console.log("minimum Number ===>>>",min);
    }
    const reverseString = (string) =>{
        let result = "";
        console.log(string.split("").reverse().join(""))
        for (let i = string.length-1 ; i >= 0; --i){
            console.log("strings ====>>>>",string[i]);
             result += string[i];
        }
        console.log("reversed string ====>>>>",result);
    }

    const sumOfArrays = (arr1,arr2)=>{
        for (let i = 0; i<= arr1.length; i++){
            // for (let j = 0; j <= arr2.length ; j++){
                console.log("sum of arrays ===>>>>",arr1[i],"+",arr2[i],"=",arr1[i] + arr2[i]);
            // }
        }
    }
    const checkArguments =(x) =>{
        console.log("number of arguments ===>>>",arguments.length);
    }

    const getReversedArray = (array) =>{
        for (let i = array.length-1; i >= 0; i--){
            console.log("reversed arrya ===>>>>",array[i]);
        }

    }

    const swapVariables = (a,b) =>{
        a = a+b;
        b = a-b;
        a = a-b;
       console.log("a====>>",a);
       console.log("b====>>",b);

    }

    const getTypeOfInput = (input) =>{

        if (Array.isArray(input)){
            console.log("type is====>>ARRAY");
        }else if (typeof input === "object") {
            console.log("type is====>>OBJECT");
        }else if (typeof input === "string"){
            console.log("type is====>>STRING");
        }else if (typeof input === "number"){
            console.log("type is====>>NUMBER");
        }

    }


    return (
        <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
            <Text>{props.count}</Text>
            <TouchableOpacity onPress={props.onIncreasePress}>
                <Text>{"Increase count from Testing"}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{getResults()}}>
                <Text>{"Get Results"}</Text>
            </TouchableOpacity>
        </View>
    );
}
export default HOComponent(TestingScreen);
