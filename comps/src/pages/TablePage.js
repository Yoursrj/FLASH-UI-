//import Table from "../components/Table";
//tablepage ko show karne ke liye tablepage.js use karenge ...jo bhi tablepage.js me likhenge wo show hoga screen pe '/tablepage ' wale path me
import SortableTable from "../components/SortableTable";
//sortableTable ko import krenge kyuki sortabletable se
function TablePage(){
    //konsa color use karna hai tablesort krna h...name,color,score aa jayega ek ek variable mwin...chaahe to tum or saare parameters add kr skte hai data mein
    const data =[//rows ke liye
        //yhi obhect map kirdenge sortabletable.js mein or inse ek ek cheez nikal ke sort krenge individual elements k basis pe
        {name:'orange',color:'bg-orange-500',score:5},
        {name:'Apple',color:'bg-red-500',score:3},
        {name:'Banana',color:'bg-yellow-500',score:1},
        {name:'Lime',color:'bg-green-500',score:4}
    ];
    const config = [//|| column or uske cells ke liye ||As a quick reminder inside of our table page component, we are creating an array of config objects.
// These || config objects describe the different columns we want to have inside of our table.|| And right now they all have two different properties.
//They have label and render.Label is being used to decide what text to put inside the header and render is a function that is being used to decide what values to put inside of every cell inside that column.
//So this is all stuff that is already happening inside of our project.  There's one little small deficiency inside of our project right now inside the table, and that is that these header cells are always represented using a plain text element that shows a columns label directly
//inside of it.And that's it.
     {label:'Name',//label : name 
     //And so you're probably immediately curious, do we really need both functions?And the answer is, in my opinion, absolutely yes.
    //Because eventually, if we are trying to customize how the score is displayed on the screen, this function might not just return, just the score, nothing else.
    //If we want to display the score really large with full text, we might wrap this thing with say, an <h1/> element.Or something similar.
    //And so now we can no longer use the result of this render function as sorting criteria.So even though right now, yes, render and search value look very, very similar, eventually for a more complicated table, it's extremely possible that eventually they will return very different kinds of data.
     render:(fruit)=>fruit.name,//fruit name ko render krenge fruit.name 
     sortValue:(fruit)=>fruit.name,//So we're going to add in another optional property to the config objects called sortValue.This is the get sort value function we've been talking about.
     //I'm just giving it a slightly different name here.Simpler one called sort value.
     //So this is going to be an optional function.And it's going to describe how to extract values from every object inside of our data array.
    //Whenever this column right here is clicked.So we're going to add in another optional property to the config objects called sort value.This is the get sort value function we've been talking about.
    //I'm just giving it a slightly different name here.Simpler one called sort value.
    //So this is going to be an optional function.And it's going to describe how to extract values from every object inside of our data array.Whenever this column right here is clicked.
    },
     {label:'Color',
      render:(fruit)=><div className={ `p-3 m-2 ${fruit.color}`}/>
    },
     {label:'Score',
     render:(fruit)=>fruit.score,
     //header:() => <th className="bg-red-500">Score</th>
     sortValue:(fruit)=>fruit.score//sortValue se pata chalega/...ki kis basis pe value sort hogi..
     //Here's the part that I think is a little bit unexpected Back inside of table page, here's our array of config objects
    //And we just went through this process of adding in support for this header property right here.I'm saying this is the goal
    //I do not want table page to define this header property anymore Instead, if I want to mark this column as being sortable, all I should have to do is add in a function of something like sort value
   //And this is going to describe how to take an object out of our data array and extract a property that we can sort on ..So like fruit score
   //Because this object now has a sort value property As soon as sortable table sees that object Sortable table
   //So inside sortable table.We are going to add in a header property.That's going to return a tape that shows the test score.
   //And whenever a user clicks on this thing.We're going to run some logic that is going to do our actual sorting.
  //So this property right here, this is going to be added on to this object inside of sortable table.
    },
    {
        label:'Score Squared',
        render:(fruit)=>fruit.score ** 2,
    }
    ];
    const keyFn = (fruit) =>{// keyFn use krenge ek eky jo har jagah use kreneg
        return fruit.name;//return krenge fruit.name 
    }
    return <div>
        <SortableTable data={data} config={config} keyFn={keyFn}/>{/* Ye tablepage.js jaha table ka skeleton banara hai or apne sorted table tak data bhjra hai Sortable table ko jisme data or config bhejre hai jo aara hai table.js se or yaha pe chanegs hore hai or fir yahi se process hokar jara hain sortableTable.js se*/}
    </div>
}

export default TablePage;