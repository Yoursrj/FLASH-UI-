import ReactDOM from 'react-dom';//The code imports the ReactDOM package from 'react-dom', which is used for creating portals to render components at different locations in the DOM.
import { useEffect } from 'react';//It also imports the useEffect hook from React, which allows us to perform side effects in functional components.
function Modal({ onClose, children, actionBar }) {//The code defines a functional component called Modal that accepts three props: onClose, children, and actionBar.(coming from modalpage.js)
    useEffect(() => {//It uses the useEffect hook to add and remove the 'overflow-hidden' class to the body element when the component mounts and unmounts.
        document.body.classList.add('overflow-hidden');//taaaki agar contenet zyada ho tab dikkat na aaye or oerflow na kare or aadhi screen me akt na jaaye 
        //Adding the 'overflow-hidden' class ensures that the body element doesn't scroll while the modal is open.
        return () => {
            document.body.classList.remove('overflow-hidden');;//cleanup function
            //The cleanup function returned by the useEffect hook removes the 'overflow-hidden' class when the component unmounts.
        }
    })
    //Here's what we're going to do.Inside of our modal component.We are no longer going to just directly return some plain jsx.
    //Instead, we are going to return a function call to react dom create portal.
    //\\==>This is a function that creates a portal and a portal just tells React to render our HTML at some other location inside the DOM.
    //The first element to create Portal is going to be the jsx.We want to show.
    //So for you and I, it's going to be the jsx that we're currently returning from our modal components.Then the second element or the second argument is going to be a reference to some DOM element that is placed inside of our indexed HTML file.
    //So we can go into our indexed HTML file.We can create a new div with maybe a class name of modal container.
    //And then whatever we, we put in as a first argument right here that JSX is going to be turned into HTML and then placed into that element.And that's it.
    return ReactDOM.createPortal(//The return statement uses ReactDOM.createPortal to create a portal for rendering the modal component.
        //The first argument of createPortal is the JSX element representing the modal's content.
        <div>
            <div onClick={onClose} className="absolute inset-0 bg-gray-300 opacity-80"></div>{/* onClick pe onclose dala hai yaani click krte hue hi band ho jayega */}
           {/*It includes an onClick event listener that triggers the onClose function, allowing users to close the modal by clicking outside of it. */}
            <div className="absolute inset-40 p-10 bg-white">{/* Modal content: A div element positioned in the center of the screen, represented by the 'inset-40' class. */}
              {/* It has a white background and contains the modal's content (passed as children) and the action bar (passed as actionBar). */}
                <div className='flex flex-col justify-between h-full'>
                    {children}{/* content aayega...content kar denge*/}
                    <div className='flex justify-end'>
                        {actionBar}{/* button close karne wala actionBar isse I Accept click krne par band hoga ...button click krte hi band*/}
                    </div>
                </div>
            </div>,
        </div>,
       //The second argument of createPortal is the reference to the DOM element where the modal should be rendered.
       //In this case, it uses document.querySelector('.modal-container') to select the DOM element with the class name 'modal-container'. This element should be present in the index.html file.
       //By rendering the modal inside this container element, the modal will appear as an overlay on top of the rest of the content.
       document.querySelector('.modal-container')//If we take the HTML from our modal component and show it inside of this div, that's that div right there.
        //Its parent is the body element.So as long as we do not position that div with a class name of modal in any way, we are guaranteed
        //that our modal component is never going to have a positioned parent So that means that our modal is always going to be positioned relative to the overall HTML document
        //and thus it is always going to fill up the entire screen
    );
}
export default Modal;

//In summary, the Modal component uses ReactDOM.createPortal to render the modal's content in a portal outside of the component's normal hierarchy. 
//This allows the modal to appear as an overlay on top of the rest of the content.




