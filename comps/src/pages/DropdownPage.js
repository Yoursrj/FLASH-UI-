//import dropdown from dropdown component
import Dropdown from '../components/Dropdown'
import { useState } from 'react';
//These lines import the necessary dependencies. The first line imports the Dropdown component from the specified file location (../components/Dropdown). 
//The second line imports the useState hook from the React library.

//import usestate , useeffect from react
function DropdownPage(){
    ///This declares a functional component named DropdownPage.
    const [selection,setSelection] = useState(null);
    //This line initializes a state variable selection using the useState hook. The initial value of selection is set to null. 
    //setSelection is a function used to update the value of selection.
    const handleSelect = (option) => {
        setSelection(option);
    } 
    //This declares a function named handleSelect that takes an option parameter. 
    //When this function is called, it updates the selection state using the setSelection function.
    const options =  [
        {label:'Red',value:'Red'},
        {label:'Green',value:'Green'},
        {label:'Blue',value:'Blue'},
    ];
    //This declares an array named options containing three objects.
    // Each object represents an option in the dropdown and consists of a label and a value
 return   <Dropdown options={options} selection={selection} onSelect={handleSelect}/>
  //This returns the JSX code that renders the Dropdown component. The options, selection, and onSelect props are passed to the Dropdown component. 
  //options is set to the options array declared above, selection is set to the selection state variable, and onSelect is set to the handleSelect function.
}
export default DropdownPage;
//In summary, the DropdownPage component renders the Dropdown component with the specified props. 
//It manages the selection state using the useState hook and passes the handleSelect function as a prop to handle selection changes in the dropdown. 
//The options prop defines the array of options to be displayed in the dropdown.
