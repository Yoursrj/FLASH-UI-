//Inside of our current project, we have a table component. It receives an array of objects called data that we want to render out on the screen.
// data ko table ki form me show krne ke liye table.js ka use krenge  baaki iska kuch kaam nhi h sorting sortable.js krega 
import { Fragment } from "react";
//So at the top of my file, I'm going to replace Echo with fragment.And I'm going to import that from React.
//So you can think of this as being like an extremely simple component that we're going to use anytime that we need to provide a key prop or something like that, but we don't actually want to have anything show up in the DOM.
//So I'm going to replace Echo right here with Fragment. And fragment.
//And now if I save this and go back over and refresh again, So again, fragment is like a very, very simple custom component that we can use.
//Just we can assign things like a key prop or group, different child elements together, stuff like that, without having to make our own kind of custom components.
//Okay, so this looks good. We've now got a good solution. Now that we are no longer getting these key errors, we can start to investigate why being able to customize
//these header cells is so important.
function Table({ data , config ,keyFn}) {
    //We also pass down an array of objects called config.Each object inside of here describes how to display a different column inside the table.
   //The table component very critically doesn't really care anything about this array of objects.All it knows is give me an array of objects.
   //I will render it as a table.That's it.
    const renderedHeaders= config.map((column)=>{
        if(column.header){
            return <Fragment key={column.label}>{column.header()}</Fragment>
        }
        return <th key={column.label}>{column.label}</th>
    })
    const renderedRows = data.map((rowData)=>{//data.map yaani jho objcts hai data mein unhe use krenge iss system se ...pehle data.map ka use krenge jab data aayega tab roes bnenege
        //jab cells aaayenge tab config ko map krenege...or data ke mapping ke andar hi config ki mapping hogi because cells jo hjai wo rows ke andar hi aate hai 
        const renderedCells =  config.map((column) =>{//
      return <td key={column.label}> {column.render(rowData)} </td>
        });
        // <tr className="border-b" key={fruit.name}>
        //     <td className="p-3">{config[0].render(fruit)}</td>
        //     <td className="p-3">
        //     {config[1].render(fruit)}
        //     </td>
        //     <td className="p-3">{config[2].render(fruit)}</td>
        // </tr>
        return(
            <tr className="p-2" key={keyFn(rowData)}>
            {renderedCells}    
             </tr>
        )
    });
   //So the first quick reminder is that our table page component is passing down a prop into sortable table alled data.
   //That is the array of objects that we want to sort.So we need to take the data array and sort it based upon the current value of sort, order and sort by.
   //That's going to give us a sorted version of our data, which we're then going to pass down into the table component so it gets displayed on the screen.   
    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                     {renderedHeaders}
                </tr>
            </thead>
            <tbody>{renderedRows}</tbody>
        </table>
    );
}
export default Table;