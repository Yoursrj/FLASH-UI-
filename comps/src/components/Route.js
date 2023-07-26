import { useContext } from "react";
import NavigationContext from "../context/navigation";
//The code begins with importing the useContext hook from the React library and the NavigationContext from the "../context/navigation" file.
//  The useContext hook allows accessing the navigation-related context within a functional component.

//So the route component is going to end up being extremely simple in nature. All it has to do is receive these props.
//It has to figure out what the current path the user is looking at by looking at the navigation contextobject.So it's going to reach up to navigation context.
//It's going to look at current path.It's going to compare it to this path prop if they are equal.Show children otherwise show nothing.All right.
function Route({ path, children }) {//children = content
//The Route component is declared as a functional component. It takes two props: path and children.
//The path prop represents the path that needs to match the current path for the children to be rendered.The children prop represents the content that will be rendered if the paths match.
    const { currentPath } = useContext(NavigationContext);
//The useContext(NavigationContext) hook is used to access the navigation-related context. 
//It returns an object that includes the currentPath value from the context.
    if (path === currentPath)
//Inside the component, an if statement is used to check if the path prop matches the currentPath obtained from the navigation context.
//If the paths match, the component returns the children prop, which represents the content to be rendered.           
    {
//If the path and currentPath do not match, the component returns null, indicating that no content should be rendered.
        return children;
    }
//Essentially, the Route component acts as a conditional rendering component. 
//It compares the path prop with the currentPath from the navigation context and renders the children if there's a match, or nothing (null) if there's no match.
    return null;
}
//The component is then exported as the default export, allowing it to be imported and used in other parts of the application.
export default Route;
//This Route component can be used to conditionally render content based on the current path.
//It is typically used in conjunction with other routing components or logic to determine which components or pages should be displayed based on the URL path.