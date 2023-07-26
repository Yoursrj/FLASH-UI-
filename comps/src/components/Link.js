//Now, remember, the entire goal of the link function is to make sure that clicking on an anchor elementdoes not trigger a total page refresh.
//And we are going to stop that normal behavior by calling events Prevent default inside the click event
//link jayega sidebar mein
import { useContext } from "react";
import NavigationContext from "../context/navigation";
import classNames from "classnames";
//The code begins with importing necessary dependencies from React and other modules. useContext is imported from the React library, which allows us to access the context within a functional component.
//NavigationContext is imported from a custom context file, likely defining the navigation-related context.
//classNames is imported from a module, possibly used for dynamically generating CSS class names.

function Link({ to, children }) {
    //The Link function is declared, which takes two props: to and children. to represents the path that will be navigated to when the link is clicked, and children represents the content of the link.
    //To is going to be the path that we're going to navigate to whenever a user clicks on this thing.
//Children is going to be some text that we want to show inside of the anchor element.
//Link function zaruri hai kyuki hume pata rehna chahiye ki hume kaha se kaha jana hai -- "where to"???
    const { navigate , currentPath,activeClassName} = useContext(NavigationContext);
//useContext(NavigationContext) is called to access the navigation-related context. It returns an object that includes the navigate function, currentPath, and activeClassName. 
//These values will be used in the component.
    const classes = classNames('text-blue-500','mb-3',currentPath===to && activeClassName  );
//classNames function is used to generate the CSS classes based on the condition currentPath === to && activeClassName.
//If the currentPath matches the to prop, the activeClassName will be added to the generated class names. This allows applying different styles to the active link.
    const handleClick = (event) => {//The handleClick function is defined, which is called when the link is clicked. It takes an event object as a parameter.
        if (event.metaKey || event.ctrlKey) {//The function checks if the metaKey or ctrlKey is pressed during the click event. 
            //If either of them is pressed, indicating the user wants to open the link in a new tab or window, the function returns early and doesn't perform any further actions.
            return;
        }
        //Now, remember, the entire goal of the link function is to make sure that clicking on an anchor elementdoes not trigger a total page refresh.
        //And we are going to stop that normal behavior by calling events Prevent default inside the click event
        event.preventDefault();//f neither metaKey nor ctrlKey is pressed, the default behavior of the click event is prevented using event.preventDefault().
        // This stops the normal page refresh that would occur when clicking on an anchor element.
        navigate(to);//Finally, the navigate function from the context is called with the to prop, triggering a programmatic navigation to the specified path.
    };
    return <a className={classes} href={to} onClick={handleClick}>{children}</a>
   //The component returns an anchor (<a>) element with the following attributes:
// className is set to the generated class names based on the currentPath and activeClassName comparison.
// href is set to the to prop, which represents the path the link should navigate to.
// onClick is set to the handleClick function, which will be called when the link is clicked.
// The children prop is used to define the content inside the anchor element, representing the visible text of the link.
// This component acts as a wrapper around the anchor element, providing additional functionality to control navigation and apply different styles based on the active link.


//So instead of doing the normal navigation, I want to programmatically navigate to some other route,some other path.
//And you might recall that just a moment ago we created a function to allow us developers to programmaticallynavigate around the application.
//It was the navigate function inside of our navigation provider.So we need to reach into context and we need to get access to this navigate function.
//Then whenever a user clicks on our link, we're going to stop the normal navigation and we will programmatically navigate to wherever we had wanted a user to go to.


}

export default Link;