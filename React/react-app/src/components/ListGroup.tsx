import { Fragment } from "react";
import { MouseEvent } from "react";
import { useState } from "react";

function ListGroup() {
    let items = [
        "Mercedes",
        "BMW",
        "Ford",
        "McLaren",
        "Honda",
        "Audi",
        "Volvo",
        "Renault",
        "Alfa Romeo",
    ];
    // This doesn't work because this variable is local to this function component
    // To solve this issue, we need to tell React this data or state might change over time 
    let selectedIndex = -1;
    // So we employ the React built in useState() function
    // This allows you to add state to functional components and manage state within functional components without needing to use class components
    // It returns an array with two elements: the current state value and a function to update that state
    const [currIndex, setIndex] = useState(-1);


    const getMessage = () => {
    // return items.length === 0 ? <p>No item found</p> : null;
    // The following is a more concise way returning
    // If items.length is zero, it will return 'No item found'
    // If items.length is not zero, the expression will be false, and nothing will be rendered on the screen
    return items.length === 0 && <p>No item found</p>;
    };

    // For onclick function, by including event in the arguments and printing out event, we can see different properites  of the click, like click positions, clicked objects, etc
    // In the function parameter, we add a colon to specify the type of variable event
    // This is because event is not specified in the scope we are working in, if not specified and bind with MouseEvent, an error will occur
    const handleClick = (event: MouseEvent) => console.log(event);

    // By adding empty brackets to wrap around the HTML elements you are telling React to wrap the children around with Fragment
    return (
    <>
        <h1>List</h1>
        {getMessage()}
        <ul className="list-group">
        {items.map((item, index) => (
            <li
            className={(currIndex === index) ? "list-group-item active" : "list-group-item"}
            key={item}
            onClick={() => setIndex(index)}
            >
            {item}
            </li>
        ))}
        </ul>
    </>
    );
}

export default ListGroup;