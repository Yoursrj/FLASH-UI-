//We're going to create a new custom component called sortable table.Sortable table is going to have a ton of logic inside of it dedicated to just sorting our data, showing header cells that are going to be clickable.
//And whenever a user clicks on one of those header cells, it's going to sort our data Internally.
//Sortable table is going to use the table component.So we're going to reuse the exact same table component exactly as it is right now inside the table .js file.
//We're going to use that component from inside of this new sortable table.So the only thing sortable table does is add in some kind of fancy process.
//It adds in some additional sorting functionality.And it's going to do this.Using the following technique.
import Table from "./Table";
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import { useState } from "react";

//Sortable table really is not a component around displaying fancy content on the screen.
//Instead, all sortable table really does is modify some props that are going to go down to the table component and add in a click event handler here or there and implement the actual sorting logic.
//So in particular, here's what sortable table is going to do.Sortable table is going to receive the config array of objects.
//It's going to look at each object inside of that array and it's going to check to see if each of those objects has a sort value function.
//If an object does have that sort value function, then we're going to assume this column should be sortable. Some columns inside of our application are going to be sortable and some aren't.
//So score and name are sortable, but color isn't.So if a column is sortable because it has that sort value function, then here's where the magic occurs.

function SortableTable(props) {
    const [sortOrder, setSortOrder] = useState(null);//sortOrder keeps track of then sortOrder whether null , ascending , descending
    const [sortBy, setSortBy] = useState(null);//this state to keep track of which column we are sorting by that is null,Name,Score

    const { config, data } = props;
    //We're going to receive the config prop and we're going to take a look at all the objects inside there.
    //We're going to find the objects that have a sort value property.If they have a stored value property, we're going to assume that means that this column should be sortable.
    //So we want to add in a custom header function to describe exactly how that columns header cell should be rendered.


      //handleClick IF-ELSE
    //I'm going to say if setsortorder.Then I want to update sort order to be ascending.
    //Otherwise if sort order is ascending.I'm going to set sort order to descending.
    //And then otherwise if short order.As descending, I'm going to revert it back to. No.So that handles that cycle.
    //The next thing we need to do is update the sort five piece of state.So setSortBy is going to keep track of what column we are currently sorting by.
    //It's going to be the label essentially that's coming into this argument or the argument that's coming into this function.
    //So if we are changing to a sort order of ascending, that means we need to know which column we are sorting by.
    //So I will do setsortby and update it to the label.If we are changing to dissenting, we also need to know which column we are sorting by.
    //So I'll do setsortby with label. And then if we are currently going from a sort order of descending to a order of null, it doesn't really matter which column the user just clicked on because we're trying to revert back to our initial state,
    //so to speak.So in this case, when we are going back to a null sort order, we're also going to change set sortby to be null as well to indicate right now no sorting should exist whatsoever and it doesn't really
    //matter what column the user just clicked on because we're just going to go back to no so

    const handleClick = (label) => {

        if (sortBy && label !== sortBy) {
            setSortOrder('asc');
            setSortBy(label);
            return;
        }

        if (sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label);
        }
        else if (sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
        }
        else if (sortOrder === 'desc') {
            setSortOrder(null);
            setSortBy(null);
        }
//So the sort order piece of state is what's going to help us keep track of what the next click is going to do.
//It is what's going to help us realize that we're going to go from unsorted to ascending to descending and then back to unsorted.
//It is also going to help us keep track of the fact that we want to show, say, just an up arrow or both up and down arrows or just the down arrow.
    }
  
    const updatedConfig = config.map((column) => {
        //I'm going to put down a new variable called updated config.I'm going to map over all those config objects.
        //I'm going to receive each object one at a time.I'm going to call them column.
        //So column is going to be one of those config objects that we had defined back inside of table page.Then inside of here, I'm going to say if there is not so if not column sort value.
        //So this column is not supposed to be sortable.Great.I don't care about this object, so just immediately return it.
        if (!column.sortValue) {
            //But if it does have a sortValue property, then I want to return a brand new object that has all the same properties, all the same keys and values as this column object, but it's also going to have
            //a header function, a header function to customize the header that gets displayed.
            return column;
        }
        return {//I'm going to return.A new object.That's going to have all the keys and values of the existing column object.
            ...column,
            //But now it's also going to have a header function as well.And remember, this header function is going to return a.
            //And this is what is going to be used to display some content right there.
            header: () => (//header customize ho jayega isse ..changes honge isse header mein jisme label hai...header is sortablew agera likh ke aa jayega
                <th className="cursor-pointer hover:bg-gray-100" onClick={() => handleClick(column.label)}>
                    {/* All we really have to do now, like you would be kind of surprised at how little work we have to do from here.
                All we really have to do is watch for click events on that header.Whenever a user clicks on it, we need to simply sort our data and pass the result down into table.
               That's pretty much it.There's going to be a couple of extra steps here.Showing the actual icons is going to be just a little bit of work.
               Those little up and down icons to indicate the current sort direction.Believe it or not, that's going be a little bit of work.
               But as far as the basic functionality of sorting data, we are shockingly close, believe it or not.So not a lot to go here. */}
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}IS SORTABLE {/* So for right now, I'm going to try to print out.column.label.So column.label.
                        And then I'm going to add in is sortable.So when we eventually display this on screen, the columns that are sortable should say name is sortable.
                        Score is sortable, but color should not be sortable.So this is going to be evidence that we can kind of customize these headers and detect which ones should be sortable and which ones shouldn't. */}
                    </div>
                     {/*  ***handleClick===>**|| So now whenever a user clicks on a we're going to run, handle, click and we're passing in the column's label.
                 So if I save this and go back over to the browser now, I should be able to click on Name is Sortable and I'll see name.
                 I should be able to click on color and see nothing happen because that column is not sortable.So I don't want to watch for click events on it.
                And then if I click on Score Sortable, I will see score.So I can click on both those and I see the appropriate console logs. || 
                And whenever this arrow function gets called, I'm going to invoke handle click.
                And to pass in the label of the column that was just clicked on.When I call a handle click, I'm going to take that column argument right there that we are receiving inside of our mapping function.
                And I'm going to pass in column dot label like so.So now whenever a user clicks on a we're going to run, handle, click and we're passing in the columns label.
               So if I save this and go back over to the browser now, I should be able to click on Name is Sortable and I'll see name(in console as name is sortable and name will come in console...and similarly score will come inside column).
               I should be able to click on color and see nothing happen because that column is not sortable.So I don't want to watch for click events on it.
               And then if I click on Score Sortable, I will see score.So I can click on both those and I see the appropriate console logs.*/}
                </th>
            ),    
        }        
    });
    //only sort data if sortOder and sortBy are not null
    //make a copy of 'data' prop
    //find the correct sortValue function and use it for sorting
    let sortedData = data;
    if (sortOrder && sortBy) {//So the first thing we need to do is we need to make sure we only sort data if sorts order And sortBy.Are not null.
        //So if those things are null, that means that we should not be doing any sorting.It means we should display our data in an unsorted order.
       //So we need to take a look at those two pieces of state and we're only going to do any sorting if those things aren't null.
       //If they are not null, the next thing we need to do is make a copy of the.Data prop.
    //So we didn't really go into great detail on this, but you might have noticed.Back over here, inside of that little sample file we had put together when we were talking about sorting objects.
    //Whenever you call the sort function on an array in JavaScript, it modifies the array that you call it on. And that's a huge, big deal inside of React.
        const { sortValue } = config.find(column => column.label === sortBy)//So that is our function that we are using for doing this sorting operation.And then finally.
        // Once we find that sort of value function now, we can actually do the sorts.So I'm going to update the sorted data variable.
        //I'm going to have it be.And this is where we're going to take care of making that copy.
        // So I'm going to make a copy of the data prop by writing out a new array with dot, dot, dot data.So that's going to make a new array and copy all the elements from data into it.
        //So now we can freely modify this array as much as we want, and we are not modifying a prop. So I'm going to do my sort operation on this.
        sortedData = [...data].sort((a, b) => {//So we're going to create a new array and we're going to copy all the items from the data prop array into our brand new array, and then we can safely sort our new array because we're not modifying a prop anymore.
            //  And the actual sorting code is going to be pretty much identical to what we had written out as we were talking about sorting objects previously.
             // So we're going to receive A and B(in parameters of .sort mainly 'color ' and 'score').I'm going to create value and I'm going to produce value by calling that sort value function and putting in argument a.
            const valueA = sortValue(a);
            const valueB = sortValue(b);
            //So remember a right here that is one of our data objects.It's one of the fruit objects.
            //So we're going to pass the fruit object into sort value and hopefully get out just the fruits name or its score or whatever else.
             //And we'll do the same thing for the B argument as well.Then we're going to take a count or factor in whether or not we should reverse these sort order by doing something basically identical to what we have right there.
             //So I'm going to declare a new variable called reverse order.And that's going to be the result of sort order.That's our piece of state.
            const reverseOrder = sortOrder === 'asc' ? 1 : -1;
               //And I'm going to say, is this thing equal to ASC?
            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder;
                //Localecompare.nd again don't forget for the third time let's local there's an E on there and I'll put in value B and then multiply the result by reverse order.
                //Otherwise, I'm going to assume this is a number and I will return.What is it? Parentheses.
            } else {
                //Value A minus.Value B.Again, don't forget the parentheses.Otherwise the order of operations will not be correct.
                //I'm going to multiply that by reverse order.
                return (valueA - valueB) * reverseOrder;
            }
        })
    }
    return <div>
        {sortOrder}-{sortBy}
        {/* So the table component uses these new config objects we have put together.So at table down here, I'm going to pass down a config prop and it's going to be the updated config.
        ...props right here that has a config property.But because we are listing out the config prop later on inside this element, the config property that is present inside of props will be overwritten.
        So there's two sets of config.We are overwriting the previous one by adding in config right there after dot dot props.
        Okay, let's save this.Now, if I go back over exactly what we want.Exactly what we want.
        So we see name as sortable.Color is not going to be sortable score is Sortable.
        So this is a huge and very, very good step.This is evidence that we can kind of inject or insert this additional component inside of our component */}
        <Table {...props} data={sortedData} config={updatedConfig} />
        
        {/*So now the last step sorted data is now the sorted version of our data array.
So last thing we have to do, at long last, we're going to take sorted data and we're going to pass it off into our table component and we're going to tell the table component. Use this as your data.
So we'll say data is sorted data.So now the table is going to render itself using the sorted version of our data array.
Okay, so let's save this.Here's the moment of truth.
 
hierarchy that's going to read in some props, massage them a little bit in some way, and then pass those props on to another component. So fantastic progress. */}
    </div>
}
//We're going to assume that. Yep. We are currently sorting by this column that we are trying to get the icons for. So now we need to take a look at sort order.
// If sort order. Oops. If sort order is null, then I'm going to return. Show both icons. Because right now we are not doing any sorting whatsoever. So we're going to fall into this case right here. 
//We want to show both icons. Otherwise if sorts order is ASC. We are in ascending order. We're going to show. Up icon. And finally, if sort order is descending. 
//I'll return show down icon. Okay, That should be it.(gochevrondown...gochevronup etc)
function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>
    }
    if (sortOrder === null) {
        return <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>
    } else if (sortOrder === 'asc') {
        return <div>
            <GoArrowSmallDown />
        </div>
    }

}

export default SortableTable;


