import { createContext, useEffect, useState } from "react";
//In this snippet, we import the required dependencies from the React library. These dependencies are createContext, useEffect, and useState. 
//We need these hooks and functions to create and manage the navigation context.

const NavigationContext = createContext();//createContext isiliye rakha hai kyuki navigation ko saare use krenge navigation...accordion,,dropdown , button etc.
//Here, we create a new context called NavigationContext using the createContext function. This context will be used to share the navigation state and functions across different components.

function NavigationProvider({ children }) {
    //This code defines a functional component called NavigationProvider. 
    //It receives a prop called children, which represents the child components that will be wrapped by this provider.
    //The code snippet you provided is the return statement of the NavigationProvider component. It is crucial because it establishes the context for the child components by providing them with the necessary values and functions through the NavigationContext.Provider.
    //<NavigationContext.Provider value={{ currentPath, navigate }}>: This line creates an instance of the NavigationContext.Provider component. 
    //It acts as the provider for the navigation context and makes the values currentPath and navigate available to the descendant components that consume this context.
    //{children}: This line renders the child components or content that was passed to the NavigationProvider component as the children prop. By including {children} within the NavigationContext.Provider, all child components will have access to the navigation context provided by the provider.
    //So, the importance of this code snippet lies in establishing the context for the child components and passing the relevant values and functions to them. It ensures that the child components can access and utilize the navigation context without the need for explicit prop drilling. 
    //This way, the child components can consume the currentPath value and invoke the navigate function as needed to handle navigation-related functionality.

    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    //Using the useState hook, we initialize a state variable currentPath to hold the current path. We set its initial value using window.location.pathname, which represents the current URL path. 
    //This state will be updated as the user navigates through the application.
    
    //currentPath me wo path jisme currently hum hai...at present jiska hisaan window.location.pathname se aayega...
    //setCurrentpath uska helper variable hai jo use aage render karega
    useEffect(() => {//The useEffect hook is used in this code to handle side effects related to the navigation functionality.
        // Specifically, it is used to listen for the popstate event, which occurs when the user navigates using the browser's forward or back buttons.
        //The useEffect hook is used to handle path changes and update the currentPath state accordingly.
        // It sets up an event listener for the 'popstate' event, which is triggered when the user navigates using the forward or back buttons. The handler function is called whenever this event occurs, and it updates the currentPath state based on the new URL path.
        //The cleanup function returned by useEffect removes the event listener when the component is unmounted.
        const handler = () => {
            setCurrentPath(window.location.pathname)//jab bhi popstate event fire hoa tab tab jo cuurentPath hai usko update krdena jo path pe hum abhi hai
        }
        window.addEventListener('popstate', handler)
        //When the popstate event is triggered (such as when the user navigates using the forward or back buttons), the handler function will be called.

       //Inside the handler function, window.location.pathname is used to retrieve the current URL path. 
       //.location is a built-in object that represents the current URL, and pathname is a property of that object that specifically represents the path portion of the URL.
    //The setCurrentPath function, which is a setter function provided by the useState hook, is called with the window.location.pathname value as its argument. 
    //This updates the currentPath state variable with the new URL path.
    //In summary, the purpose of the handler function is to capture the current URL path when the popstate event occurs and update the currentPath state variable with that value. 
    //By doing so, it ensures that the currentPath state remains in sync with the actual URL path, enabling components that consume this state to react and update accordingly.

        //jab bhi hum pushstate se bananyenge koi piece of function tab hum popstate ko use krenge seamlesslyy pushstate se banaye gaye hue pages ke beech me move krne ke liye
        //or handler isiliye kyuki baar baar popstate krne ke baad curent page ka path rakhna hai

        return () => {//ye ek normal cleanup function hai ..agar humara NavigationProvider kaaam nahi karta to hum ye use kr skte hai cleanup k liye
            window.removeEventListener('popstate', handler)
            //Returns a copy of the information that was provided to pushState() or replaceState().
            // If the history entry being activated was created by a call to history.pushState() or was affected by a call to history.replaceState(), the popstate event's state property contains a copy of the history entry's state object.

        }
    }, []);
      


    const navigate = (to) => {//The navigate function is responsible for updating the URL path and the currentPath state when the user clicks on a navigation element. 
        window.history.pushState({}, '', to);//It uses the pushState method of the window.history object to update the URL path without reloading the page. 
        setCurrentPath(to);    //The to parameter represents the new path to navigate to. Finally, it also updates the currentPath state with the new path.
    }
    
    return <NavigationContext.Provider value={{ currentPath, navigate }}>{/*currentPath or navigate bhejenge props bhejenge aage ke kaam ke liye */}
        {children}{/*children as a prop jata hai navigation se matlab sara content agar navigation ka kahi jana hai to wo chidren prop se jata hai*/}
    </NavigationContext.Provider>
    //<NavigationContext.Provider value={{ currentPath, navigate }}>: This line creates an instance of the NavigationContext.Provider component.
    // It acts as the provider for the navigation context and makes the values currentPath and navigate available to the descendant components that consume this context.

// {children}: This line renders the child components or content that was passed to the NavigationProvider component as the children prop. By including {children} within the NavigationContext.
//Provider, all child components will have access to the navigation context provided by the provider.

// So, the importance of this code snippet lies in establishing the context for the child components and passing the relevant values and functions to them. 
//It ensures that the child components can access and utilize the navigation context without the need for explicit prop drilling.
// This way, the child components can consume the currentPath value and invoke the navigate function as needed to handle navigation-related functionality.
}
export { NavigationProvider };
export default NavigationContext;