import React, {Component, useState} from 'react';

const HOComponent = (OriginalComponent) =>{

    const NewComponent = () => {
        const [counter ,setCounter] = useState(0);
        const increaseCount = ()=>{
            setCounter(counter + 1)
        }
            return(
                <OriginalComponent
                    count={counter}
                    onIncreasePress={()=>{increaseCount()}}
                />
            )
    }
    return NewComponent;
}
export default HOComponent;


