// It's important to maintain Pascal Casing
function Message() {
    const name = "Lebron James";
    // This is JSX: Javascript XML 
    // This is going to get compiled in javascript even though it's written in HTML
    // Inside the {curly braces} we can write any javascript expression
    if (name) {
        return <h1>Hello {name}</h1>;
    } else {
        return <h1>Hello World</h1>;
    }
}

export default Message;

