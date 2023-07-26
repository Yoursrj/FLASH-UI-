//2
import { useState } from "react";
import { GoChevronDown,GoChevronLeft } from "react-icons/go";
//These lines import the necessary dependencies. useState is a React hook used for managing state, and GoChevronDown and GoChevronLeft are icons from the react-icons/go package.
function Accordion({items}){
  // *Overall, this component creates an accordion UI where each item can be expanded or collapsed by clicking on its label. 
  // The items prop should be an array of objects, with each object containing an id, label, and content property. */
  
    const[expandedIndex,setExpandedIndex]=useState(-1);
    //This line uses the useState hook to initialize the expandedIndex state variable with a default value of -1. 
    //The setExpandedIndex function is used to update the value of expandedIndex later on.
    
    //usestate ko -1 rakha hai taaaki shuruaat me saare collapsed rahe koi expanded na rahe
   //expandedIndex ka default value is -1 or setExpandedIndex uss variable ko use krenge jisse wp baar baar rerender hoga
    const renderedItems = items.map((item,index)=>{//the items which were received as a prop which contanied content in the form of object
      //unn items ko map kardo or item ko as a prameter lena hai because har item ke upar map krke ek individual item ki id or label ko target krenge
      //index ko isliye liya hai kyuki 
          const isExpanded = index ===expandedIndex;//agar current index jispe humne click kiya hai ( 0,1,2 hai)or current index same hai dono to true chla jayega isExpanded mein
        //warna agar index jispe click kiya hai or jo index(after mapping the items) same hai..to matlab humne 
          const icon = <span className="text-3xl">{isExpanded? <GoChevronDown/> : <GoChevronLeft/>}</span>
        //span me jayega classname text-3xl ...agar isExpanded true hai (yaani agar current index or expanded index(state(0) == current index jispe hum map krre hai) tab down kardo arrow or baaki time jab wo false hove tab arrow kp seedha krdo)
          // {    console.log('expanded');
        // }
        // else{
        //     console.log('collapsed')
        // }
        const handleClick=()=>{//handleclick function hai jo tab kaam aayega  jab bbi hum label wale div par click krenge tab ye handle click
            setExpandedIndex(index);//page rerender ho jayega...iss function p click krne pe..yaani div p click krte hai..expectedIndex equal ho jayega index ke or wo div jispe click kiya hai collapse ho jayega
        }
        //Determines whether the item is expanded by checking if the current index matches the expandedIndex state variable.
        //Sets the appropriate icon (GoChevronDown or GoChevronLeft) based on the expansion state.
      //Defines a handleClick function that updates the expandedIndex state variable with the current index when the label div is clicked.
      //Renders a div element that displays the label and the icon. It also attaches the handleClick function to the onClick event of the div.
      //Checks if the item is expanded (isExpanded === true). If so, it renders a div element that displays the item's content.
      //eturns the above elements for each item, using the item.id as the key prop for efficient rendering.
      return(
        <div key={item.id}>
            <div className="flex justify-content p-3 bg-gray-50 border-b items-center cursor-pointer   " onClick={handleClick}>{icon}{item.label}</div>{/*
            This line returns a div element that wraps all the rendered items. It applies some CSS classes to style the element.
            div of label pe click krte hi collapse ho jayega div kyuki handleclick wohi krra hai*/}
            {isExpanded && <div className="border-b p-5"> {item.content}</div>}{/*
            This exports the Accordion component as the default export, allowing it to be imported and used in other files.
            isExpanded==true && content== false...*/}
        </div>
      );
    })

    return <div className="border-x border-t rounded"> {renderedItems} </div>;
  
}

export default Accordion;