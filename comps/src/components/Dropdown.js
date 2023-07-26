import { useState , useEffect,useRef } from "react"; 
import {GoChevronDown } from "react-icons/go";
//This code imports the necessary hooks (useState, useEffect, useRef) from the React library and
//imports the GoChevronDown icon component from the react-icons/go package.
function Dropdown ({options , selection , onSelect}){
    //This defines a functional component named Dropdown which takes three props: options, selection, and onSelect. 
    //These props will be used to render the dropdown component and handle user interactions.
    const [isOpen,setIsOpen] = useState(false);
    //This initializes two state variables using the useState hook: isOpen and setIsOpen. 
    //isOpen represents the state of the dropdown (whether it's open or closed), and setIsOpen is a function used to update the isOpen state. 
    //The initial state of isOpen is set to false.
    const divEl = useRef();
    //The useRef hook is used to create a reference (divEl) that will be attached to an element in the component's JSX. 
    //This reference will be used in the useEffect hook.

    //why was useEffect hook used and its implementation -
    //The useEffect hook in this code is used to add an event listener to the document when the component mounts.
    // The purpose of adding the event listener is to detect clicks that occur outside of the dropdown component.
    //The useEffect hook is called with a callback function as its first argument. This callback function will be executed after the component has rendered.
    //In summary, the purpose of this useEffect hook is to listen for clicks that occur anywhere in the document, and when a click event is triggered, the handler function is called, which logs the value of divEl.current.
    // This is useful for detecting clicks outside of the dropdown component, allowing the component to respond accordingly (e.g., closing the dropdown when a click occurs outside of it).
    useEffect(()=>{
    const handler = (event) =>{
        console.log(divEl.current);
    }
    //This useEffect hook is used to add an event listener to the document when the component mounts.
    //The event listener listens for a click event, and when triggered, it calls the handler function.
    document.addEventListener('click',handler,true);
    //The handler function logs the value of divEl.current to the console.
    //divEl.current refers to the DOM element associated with the divEl reference created using useRef.
    },[])

    const handleClick =() =>{
        setIsOpen(! isOpen);
    };
    //This defines a function named handleClick that is called when the user clicks on the dropdown component.
    //It toggles the isOpen state using setIsOpen.
    const handleOptionClick=(option)=>{
        //close dropdown
        setIsOpen(false);
        //what option did the user click on
        onSelect(option);
    }
    //This defines a function named handleOptionClick that is called when the user clicks on one of the options in the dropdown.
    //It sets the isOpen state to false to close the dropdown, and then calls the onSelect function (passed as a prop) with the selected option as an argument.
    const renderedOptions = options.map((option)=>{
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={()=>handleOptionClick(option)} key={option.value}> {option.label}</div>
    });
//This creates an array of JSX elements (renderedOptions) by mapping over the options prop.
// Each option is rendered as a div element with a class name for styling,
//an onClick event handler that calls handleOptionClick with the selected option, and a unique key based on the option.value.
    let content = 'Select...'
    if(selection){
        content =  selection.label;
    }
//This initializes a variable named content with a default value of "Select...".
// If a selection prop is provided, the content variable is updated with the label of the selected option.
    return(
        <div ref = {divEl} className="w-48 relative">
        <div className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full " onClick={handleClick} >{content}<GoChevronDown className="text-lg"/></div>
        {isOpen && <div className="absolute top-full border rounded p-3 shadow bg-white w-full ">{renderedOptions}</div>}
        </div>
    )
}

export default Dropdown;