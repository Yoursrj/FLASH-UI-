import Button from "../components/Button";
import '../index.css';
import {GoBell,GoCloudDownload,GoDatabase} from 'react-icons/go'
//These lines import the Button component from the "../components/Button" file. 
//It also imports the "react-icons/go" package, which provides the GoBell, GoCloudDownload, and GoDatabase icons for use in the buttons.
// Additionally, it imports the "../index.css" file, which likely contains custom styles for the ButtonPage component.
function ButtonPage(){
    const handleClick=()=>{
        console.log('click');       
    };
//This declares the ButtonPage function component. It defines a handleClick function that logs "click" to the console when the button is clicked.
    return <div>
        <div>
          <Button secondary rounded outline className="mb-5" onClick={handleClick} >
           <GoBell/>{/*ye chldren prop  jo pass kiya uski wajah se aaya */}
            Click me</Button>   {/*success rounded outline are a type of prop */}
        </div>
        {/*The first <Button> element has the secondary, rounded, outline props set, along with a custom className prop of "mb-5".
         It also has an onClick prop that references the handleClick function. Inside the button, it renders the <GoBell /> icon and the text "Click me". */}
        <div>
            <Button danger outline >
                <GoCloudDownload/>
                Buy Now</Button>
        </div>
        {/*The second <Button> element has the danger and outline props set. 
        It renders the <GoCloudDownload /> icon and the text "Buy Now". */}
        <div>
            <Button warning>
            <GoDatabase/>    
            See Deal</Button>
        </div>
        {/*The third <Button> element has the warning prop set.
         It renders the <GoDatabase /> icon and the text "See Deal". */}
        <div>
            <Button secondary outline> Hide Ads </Button>
        </div>
        {/*The fourth <Button> element has the secondary and outline props set. It renders the text "Hide Ads". */}
        <div>
            <Button primary rounded>Something</Button>
        </div>
        {/*The fifth <Button> element has the primary and rounded props set. It renders the text "Something". */}
    </div>
}

export default ButtonPage;
//This exports the ButtonPage component as the default export of the module, allowing it to be imported and used in other files.

//Overall, the ButtonPage component renders a series of <Button> elements with different props and content, 
//demonstrating the usage of the Button component and how different variations can be achieved by passing different props.


//The line `return <button {...rest} className={classes}>{children}</button>;` in the `Button` component is crucial for rendering the button element with the desired functionality and styling. Here's how each part of the line is helpful:

// 1. `{...rest}`: The spread operator `{...rest}` spreads any additional props passed to the `Button` component and applies them to the `<button>` element. 
//This allows for flexibility and customization by allowing users of the component to pass any additional props they want, such as `id`, `style`, or other custom attributes. It ensures that any additional props passed to the `Button` component are correctly applied to the rendered `<button>` element.

// 2. `className={classes}`: The `className` prop is used to assign CSS classes to the `<button>` element. In this case, the `classes` variable contains a string of CSS classes based on the provided props. 
//It includes classes for styling the button based on the prop values, such as primary, secondary, success, warning, danger, outline, and rounded. 
//By assigning the `classes` variable to the `className` prop, the appropriate CSS classes are applied to the rendered `<button>` element, ensuring that the button appears as intended based on the provided props.

// 3. `{children}`: The `children` prop represents the content placed between the opening and closing tags of the `<Button>` component when it is used. It allows for dynamic and flexible content rendering within the button. 
//In the `Button` component, the `children` prop is rendered inside the `<button>` element. This ensures that any content passed as children to the `<Button>` component is correctly rendered inside the `<button>` element, allowing for customizable button labels, icons, or other elements.

// By combining these elements, the line `return <button {...rest} className={classes}>{children}</button>;` ensures that the `<button>` element is rendered with the correct props, including any additional props spread via `{...rest}`, appropriate CSS classes assigned via `className={classes}`,
// and the desired content rendered via `{children}`.
// This allows for a versatile and customizable `<Button>` component that can be used and styled in different ways based on the provided props and content.