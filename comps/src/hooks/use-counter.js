//ye custom hooks ke liye use kiya hai kyuki custom hooks me aap useCounter jese function ka kuch bhi naam use karke kisi bhi component
//me use kr sakte ho...ye useCounter bahar kahi bhaad me use ho sakta hai doosre components me 

import { useState,useEffect } from "react";
//The hook imports the necessary hooks from React: useState and useEffect. These hooks will be used to manage state and perform side effects.

function useCounter(initialCount){
    //The useCounter function is declared as a custom hook. It takes an initialCount parameter that represents the initial value of the counter.
    const [count,setCount ]= useState(initialCount);
    //Inside the hook, the useState hook is used to create a state variable count and its corresponding setter function setCount. 
    //The initial value of count is set to initialCount provided as an argument to the hook.

    //initial count yaani 'Add a number : __'m ke asage kya aayega
    //agar add a number ki shuruaat 10 se karni hai to initial count 10 hoga ...agr initiol copunt 0 se hoga to count hoga 0 se set by default 
    
    useEffect(()=>{//useeffecrt isiliye use kiya hai kyuki ek particular kaama karwana  hai ek particular time par jab count render ho
     console.log(count);//console.log kar dena count variable ko 
    },[count]);//jab jab count render hoga tab tab useeffect chalega
    //The useEffect hook is used to perform side effects. In this case, it logs the value of count to the console whenever it changes. 
    //`The dependency array [count] ensures that the effect only runs when count changes.

    const increment = () =>{//increment ke liye function
        setCount(count+1);//baar baar render hoga or +1 bhi hota rahega 
    };
    //The increment function is defined, which increases the value of count by 1. It calls the setCount function with the updated value
    return{
        count:count,//iss function se return honge count variable becasuse uski hi hai jo responsible hai initialcount ki default value ko badhane mein
        increment:increment,//increment function hai jisme count badhra hai..wo bhi return hoga
    }
}

export default useCounter;