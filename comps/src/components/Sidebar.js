//So the side bar component is going to show a list of links to some of the different pages inside ofour application.
//So we should have links to dropdown accordion button and eventually some other features we're goingto add in in a little bit.
//Now, one thing I want to point out is that we want to show the dropdown page whenever a user is at

import Link from "./Link";
//The code begins by importing the Link component from the ./Link file. The Link component is likely a custom component that provides navigation functionality using React Router or a similar routing library.
//We don't really have an ID property here that we can use, but you'll notice that the labels are probably going to be unique and consistent so we can use the label as the key prop.
////And then, of course, we also have to provide a to prop, and to is going to be where we're goingto navigate to whenever user clicks on this link.
//So that's why I added in the path property to these objects.So too is linked path.
///App.js ko milega to from sidebar.js se/
function Sidebar() {//The Sidebar component is defined as a functional component.
//An array of links is declared, where each link object has a label and path. These objects represent the different pages or features within the application that will be displayed as links in the sidebar.    
    const links = [
    { label: 'Dropdown', path: '/' },
    {label:'Accordion' , path :'/accordion'},
    {label :'Buttons', path : '/buttons'},
    {label:'Modal',path:'/modal'},
    {label:'Table',path:'/table'},
    {label:'Counter',path:'/counter'},
    {label:'Counter2',path:'/counter2'}
    ];

    const renderedLinks = links.map((link)=>{//The renderedLinks variable is created by mapping over the links array. For each link object, a Link component is rendered. 
        
        return <Link key={link.label} to={link.path} activeClassName="font-bold border l-4 border-blue-500 pl-2 ">{link.label}</Link>
    //The key prop is set to the label value, which is assumed to be unique and consistent. The to prop is set to the path value of the link object.
    //The activeClassName prop is set to a string of Tailwind CSS utility classes that define the styling for the active link.
    })


//Finally, the renderedLinks array is rendered within the div element.
//The Sidebar component is exported as the default export, allowing it to be imported and used in other parts of the application.
    return (

        <div className="sticky top=0 overflow-y-scroll flex flex-col">
          {renderedLinks}
        </div>
    )
}
//Please note that this code assumes the Link component provides the necessary functionality for navigation and applies the activeClassName when the link matches the current path. 
//The specific implementation of the Link component may vary based on the routing library being used.

export default Sidebar;
//how was link.js helpful in sidebar.js

//The Link component imported from Link.js in the Sidebar.js file is used to render the individual links in the sidebar. Here's how it is helpful:

//Dynamic Navigation:
// The Link component is responsible for rendering anchor (<a>) elements with appropriate href and onClick attributes. 
//It allows users to navigate to different pages within the application when they click on the links.

//Active Link Styling:
// The Link component utilizes the activeClassName prop to apply specific styling to the active link. 
//When the current path matches the to prop of a link, the activeClassName is added to the className attribute of the anchor element. This allows for visually highlighting the active link in the sidebar.

//Reusable Code: 
//By separating the navigation logic into the Link component, it can be reused in multiple places throughout the application. 
//Instead of duplicating the navigation code and styling logic for each link, the Link component encapsulates this functionality, making it easier to maintain and modify.

//Consistency: 
//The usage of the Link component ensures a consistent approach to navigation and active link styling throughout the application. 
//It abstracts away the implementation details and provides a standardized way to handle navigation and active link behavior.

//By importing and using the Link component in the Sidebar component, you can create a list of links with appropriate navigation functionality and apply active link styling as needed. 
//This improves code organization, maintainability, and promotes consistent user experience across the application.
