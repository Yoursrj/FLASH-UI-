import Button from "../components/Button"; //button yaani add a lot button from button.ja
import useCounter from "../hooks/use-counter";//usecOUNTER AS A CUSTOM HOOK use kiya hai 

function CounterPage2({ initialCount }) {//iska naam kuch bhi rakh sakte hai hum ...initial count ko define karna pdega kji kitna hai...default value kitni hogi...wo jayegi...iske andar
    const { count, increment } = useCounter(initialCount);
    //count or increment aa raha hai use-counter.js se ...useCounter bhi aa raha hai use-counter se ek function hai jo define hua hai jisme increment or count define hai...
    //useCounter aa raaha hai use-counter.js se usecOUNTER KA NAAM KUCH BHI HO SAKTA HAI useSomething,usethis,usethat etc

    return (
        <div>
            <h1>Count is {count} . This is counter using custom hooks</h1>{/* count use karra hai jo aara hai use-Counter.js se */}
            <Button onClick={increment} >Increment</Button>{/*increment bhi aayega use-counter.js se */}
        </div>
    )
}
export default CounterPage2
