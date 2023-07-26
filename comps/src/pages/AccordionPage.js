//1
//No, the Accordion.js component does not need to import AccordionPage.js in order to use the items prop. 
//The items prop can be passed down directly from the parent component (App.js) to Accordion.js, and Accordion.js can utilize the items prop without explicitly importing AccordionPage.js.
import Accordion from "../components/Accordion";
//In the code snippet you provided, there is a component called AccordionPage that renders an Accordion component. 
//The Accordion component expects an items prop, which is an array of objects containing id, label, and content properties.

//The AccordionPage component defines an array called items with three objects, each representing an item in the accordion. 
//Each object has an id for identification, a label for the item's title, and content for the item's body text.

//The AccordionPage component then renders the Accordion component, passing the items array as the items prop. 
//This allows the Accordion component to access and display the items within its own implementation.

//By using this approach, you can create a reusable Accordion component and pass different sets of items to it from different parent components. 
//This provides flexibility in managing and displaying dynamic content within the accordion.

function AccordionPage(){
   const items =[//the objects in which the content is written 
    {
       id:'ndcdlndlk', 
       label:'Can I use React On A Project',
       content:'You can use on any React Project any time you want..You Can use on any project at any point you want'
    },
    {
       id:'ndcdlndkm', 
       label:'Can I use Javascript On A Project',
       content:'You can use on any Javascript Project any time you want..You Can use on any project at any point you want',
    },
    {   
        id:'ndcdlndpo',
        label:'Can I use CSS on Project',
        content:'You can use on any CSS Project any time you want..You Can use on any project at any pount you want',
    }
   ];
   return <Accordion items={items}/>//items naam ke variable ko as a [prop] bhej re hai accordion.js me
   //items prop ke andar {items} object ger diya hai....ab pehle wale items ko use krenge as a prop next file mein
}
export default AccordionPage;