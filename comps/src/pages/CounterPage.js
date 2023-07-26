import { useState } from 'react';//
import Button from '../components/Button';

function CounterPage({ initialCount }) {//Counterpage function hai ye initialCount se aayega ..initialCount rahega...by default App.js me <CounterPage initialCount=-10> rhega...
    
    const [count, setCount] = useState(initialCount);//ye wala setCount rhega....state bnega...count badhane ke liyye..
    const [valueToAdd, setValueToAdd] = useState(0);//kitni value add karni hai..wo valueToAdd me aayega...setvalueToadd me aayengi values jo valueToAdd me aayengi or render hongi
    
    const increment = () => {//const increment se count increase hoga by 1 
        setCount(count + 1);//baar baar render krenge by setcount jb jb add+1 hoga
    }
    const decrement = () => {//const decrement se count decrease hoga by 1
        setCount(count - 1);//baar baar render krenge by setcount jb jb add+1 hoga
    }

    const handleChange = (event) => {//handlechange tab use hoga jab jab input me click krenge or kuch aur add krenge
        const value = parseInt(event.target.value) || 0;//0 default value hai input mein..agr input ke alawa kuch daalenge to input ko reaad krenge through input.target.value
        //parseInt krdenge taali integer ki trh behave krenge ..value me jayengi event.target.value integer me convert hokar 
        setValueToAdd(value);// ADD A LOT  ke input mein daalenge jo bhi input wo jayenge value mwin or setValueToAdd render karega value ko baarbaar ...har value input ke baad page render hogi 
        console.log(value);
    }
    //So last thing we'll take care of very quickly, we're going to add in a on submit event handler to the form.
    //So in the form element, I'll put an on submit.Whenever that occurs, we will call, handle, submit.Then underneath handle change.
   //We'll define, handle, submit.Remember that whenever we submit a form, the browser by default is going to try to submit the form for us to a back end server.
   //And we pretty much never want that default behavior.So we call event prevent default.Then all we really have to do is take our value to add piece of state and we want to update our account piece of state with it and then reset value to add back to zero.
   //So in total.We'll say set count two count plus value to add.And reset value to add back to zero.
   //All right, here's our last little test I'm going to add in 60.Click, add it and it works.I should also see increment and decrement, still working correctly as well.
   
    const handleSubmit = (event) => {//submit jab hoga tab jo bhi event yaanni jo bhi changes hongi tab tab event  ko parameters me use krenege
        //handleSubmit function use krke kr skte hai zaruri kaam
        event.preventDefault();//event.preventDefault() se jo default form behaviour hota hai jisse baar baar har form ki input console,log hota hai..wo behaviour change hota hai 

        setCount(count + valueToAdd);//end mein Count mein add krdenge Value to add....yaani icremented count yaani 10,11,12...etc..me jo value humne daali hai add krne ko input mein...
        setValueToAdd(0);//setValueToAdd ko baaad me 0 krdo..yaani input box ko firse by default 0 krdo...jisse baad mein firse input daals ake
    }

    return (
        <div className="m-3">{/* margin-3 */}
            <h1 className='text-lg'>Count is {count}</h1>{/* Count jo aarahai upar se ..count variable becasuse uski hi hai jo responsible hai initialcount ki default value ko badhane mein */}
            <div className='flex flex-row'>
                <Button onClick={increment}> Increment</Button>{/* increment aa raha hai upar se  */}
                <Button onClick={decrement}>Decrement</Button>{/* decrement aayega upar se 1-1 kam hoga */}
            </div>
            <form onSubmit={handleSubmit}>{/* handlesubmit se submit hoga..submit hoga form iss function se */}
                <label>Add a lot!</label>
                <input value={valueToAdd || ''} onChange={handleChange} type="number" className='p-1 m-3 bg-red-50 border-blue-300' />{/* valueToAdd se value add hogi...or || '' ka matlab hai ki agar value to add ahio uske alawa bhi koi or value add hop jaaye to usse use karlio....band nahi honba hai input lena...sir ek baar input nahbi lena hai */}
               {/* So here's the last little change we're going to add in down at the input element right here.I'm going to add in for the value value to add or empty string.
                So that means if we have a value to add peace of state of zero, then don't print out the zero.Just put in empty string instead.So one last save. */}
                <Button>Add it!</Button>
            </form>
        </div>
    )
}


export default CounterPage;