import Modal from "../components/Modal";
import Button from "../components/Button";
//The code imports the Modal and Button components from their respective files.
import { useState } from "react";//It also imports the useState hook from React, which allows us to manage state in functional components.
//bbaaki components me ex:= accordion.js(children) ne apne parent AccordionPage.js ko prop bheja
//or bola ki lo use krlo and parent ne liya usse or as a content use kiya jo screen p show hoga <Accordion items={items}/> krke

//isme Parent(ModalPage.js) me changes hore h..wo bhejre hai hum children (Modal) me.js mein
//kuki sirf kuch action krne pe changes nhi honge..automatically bhi ho skte h
function ModalPage() {
//The code defines a functional component called ModalPage.
//It initializes a state variable showModal using the useState hook and sets its initial value to false.
    const [showModal, setShowModal] = useState(false);
    //It also defines a state update function setShowModal to update the value of showModal.

    //So here's possibly a better option.think that our parent component should display the button.
    //And it should also own this piece of state called Show Modal or something like that.
    const handleClick = () => {//The code defines a function handleClick that is called when a button is clicked.
        setShowModal(true);//It sets the value of showModal to true, indicating that the modal should be displayed.
        }
    
    //So now the parent component can decide when the model should be displayed on the screen.
    //If show model is true, we will show this component.If it's false, we will not show that component.
    const handleClose = ()=>{//The code defines a function handleClose that is called when the user wants to close the modal.
        setShowModal(false);
    //It sets the value of showModal to false, indicating that the modal should be hidden.
    };
    
    //koi button click kro jisse ye function chale or band ho jaaaye pop-up
    //And now that parent can control that piece of state based upon user clicking on the button or any otherkind of operation.
   //Once again, maybe after a user is at a page for a certain number of seconds, we will show the model automatically.
    const actionBar = <div>{/*The code defines a JSX element called actionBar which represents the action bar for the modal. */}
    <Button primary onClick ={handleClose}> I Accept</Button>{/*It contains a Button component with the label "I Accept" and a click event handler handleClose. */}
   </div>//actionbar wale variable mein...dala hai ye function jisse close ho jayega modal

    //The code defines a JSX element called modal which represents the modal component.
    const modal =  <Modal onClose={handleClose} actionBar={actionBar}>{/*//ye onclose or actionbar as a prop jare h modal.js me  */}
    {/* onclose or actionbar use honge modal.js mein jab close button pe click krenge to close krne ke liyte modal ko showmodal false krke 
    It includes the Modal component and passes two props to it: onClose and actionBar. 
    The onClose prop is set to the handleClose function, which will be called when the modal is closed.
    The actionBar prop is set to the actionBar JSX element, which will be displayed as the modal's action bar.*/}
    <p>
        Here is an important agreement for you to accept
    </p>
    </Modal>
    return <div className="relative">{/*The code returns a JSX element representing the ModalPage component.The component is wrapped in a div with the CSS class "relative" for styling purposes.*/}
        <Button onClick={handleClick} primary>Open Modal </Button>{/* handleclick click krne par show krdo true kardo modal ko show krdo...OPEN MODAL wala button hai ye...App.js me isiliye dala hai kyuki click hoga 
        It contains a Button component with the label "Open Modal" and a click event handler handleClick.*/}
        {showModal &&  modal}{/* showModal true hoga or modal bhi true ho jayega jisse modal show hoga(modal component ko render krra h kyuki)..or jaate jaate uspe click hote hi showmodal ko wo false krdega jisse aage modal show na ho
        The {showModal && modal} expression checks if showModal is true. If it is, the modal component is rendered.*/}
        {/* And then say show modal and modal.So if Show modal is true, display that component.
        If show modal is false, we display nothing. */}
    </div>
}

export default ModalPage;