import className from 'classnames';
//This line imports the classnames library, which is used to conditionally apply CSS classes based on certain conditions.
function Button({
children,
primary,
secondary,  
success,
warning,
danger,
outline,
rounded,
...rest
//This is the functional component declaration for the Button component.
//It accepts several props: children (the content inside the button), primary, secondary, success, warning, danger, outline, and rounded.
//The ...rest is a JavaScript feature called the "rest parameter," which allows you to gather the remaining props into a single object.
}){
    const classes = className(rest.className,'flex items-center px-3 py-1.5 border',{
        'border-blue-500 bg-blue-500 text-white':primary,
        'border-gray-500 bg-gray-500 text-white':secondary,
        'border-green-500 bg-green-500 text-white':success,
        'border-yellow-500 bg-yellow-500 text-white':warning,
        'border-red-500 bg-red-500 text-white':danger,
        'rounded-full':rounded,
        'bg-white':outline,
        'text-blue-500':outline && primary,
        'text-gray-500':outline && secondary,
        'text-green-500':outline && success,
        'text-yelow-500':outline && warning,
        'text-red-500':outline && danger,        
    });
    //This block of code defines the classes variable, which holds the computed class names based on the provided props. It uses the className function from the classnames library. 
    //The first argument is rest.className, which includes any additional classes passed to the component. The second argument is a static set of classes: 'flex items-center px-3 py-1.5 border'. 
    //The third argument is an object that maps class names to conditions. If a prop (e.g., primary) is truthy, the corresponding class name (e.g., 'border-blue-500 bg-blue-500 text-white') will be included in the classes string.
    return <button {...rest} className={classes}>{children}</button>;
    //This line returns a <button> element with the provided props spread using {...rest}. It also applies the computed classes to the className attribute of the <button> element.
    // The children prop, which represents the content inside the button, is rendered between the opening and closing tags of the <button>.

//Finally, the Button component is exported as the default export of the module.
//Overall, this component allows you to create a button with different styles (primary, secondary, success, warning, danger), outline variations, and rounded corners by conditionally applying CSS classes based on the provided props. 
//The classnames library simplifies the process of handling multiple class names and conditions.
}

export default Button;