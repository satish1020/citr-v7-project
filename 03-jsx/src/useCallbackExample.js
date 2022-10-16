import React from 'react';
import { useState, useEffect, useCallback, memo } from 'react';

// eslint-disable-next-line react/display-name
const  ExpensiveComputationalComponent = memo(({compute, count}) =>
{
    return (
    <div>
    <h1>computed: {compute(count)}</h1>
    <h4>lastRerender: {new Date().toLocaleTimeString()}</h4>
    </div>
    )
});

const  useCallbackExample = () => {
    const [time, setTime] = useState('')
    const [count, setCount] = useState(1)

    useEffect(()=>{
        setTimeout(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);
    },[])

    const fibannocci = (n) =>{
        if(n <= 1)
        {
        return 1
        }
        return fibannocci(n-1)+ fibannocci(n-2)
    }
    return (
        <div>
            <h1>useCallBackExample{time}</h1>
            <button onClick={()=>{setCount(count++)}}>current count{count}</button>
            <ExpensiveComputationalComponent compute = {useCallback(fibannocci)} count = {count}/>
        </div>
    );
};

export default useCallbackExample;