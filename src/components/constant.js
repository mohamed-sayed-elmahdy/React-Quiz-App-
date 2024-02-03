export const jsQuizz = {
  questions: [
    {
      question:
        "Which of the following is used in React.js to increase performance?",
      choices: [
        "Virtual DOM",
        "Original DOM",
        "Both A and B",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "Virtual DOM",
    },
    {
      question: "What is ReactJS?",
      choices: [
        "Server-side framework",
        "User Interface framework",
        "both a and b",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "User Interface framework",
    },
    {
      question:
        "Identify the one which is used to pass data to components from outside",
      choices: ["Render with arguments", "setState", "PropTypes", "props"],
      type: "MCQs",
      correctAnswer: "props",
    },
    {
      question: "In which language is React.js written?",
      choices: ["Python", "Java", "C#", "JavaScript"],
      type: "MCQs",
      correctAnswer: "JavaScript",
    },
    {
      question: "What is Babel?",
      choices: [
        "JavaScript interpreter",
        "JavaScript transpiler",
        "JavaScript compiler",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "JavaScript compiler",
    },
    {
      question:
        "If you want to import just the Component from the React library, what syntax do you use?",
      choices: [
        "import React.Component from 'react'",
        "import [ Component ] from 'react'",
        "import Component from 'react'",
        "import { Component } from 'react'",
      ],
      type: "MCQs",
      correctAnswer: "import { Component } from 'react'",
    },
    {
      question:
        "If a function component should always render the same way given the same props, what is a simple performance optimization available for it?",
      choices: [
        "Wrap it in the React.memo higher-order component.",
        "Implement the useReducer Hook",
        "Implement the useMemo Hook.",
        "Implement the shouldComponentUpdate lifecycle method.",
      ],
      type: "MCQs",
      correctAnswer: "Wrap it in the React.memo higher-order component.",
    },
    {
      question:
        "How do you fix the syntax error that results from running this code?",
      choices: [
        "Wrap the object in parentheses.",
        "Call the function from another file.",
        "Add a return statement before the first curly brace.",
        "Replace the object with an array.",
      ],
      type: "MCQs",
      correctAnswer: "Wrap the object in parentheses.",
      code: `const person =(firstName, lastName) =>
      {
        first: firstName,
        last: lastName
      }
      console.log(person("Jill", "Wilson"))`,
    },
    {
      question:
        " If you see the following import in a file, what is being used for state management in the component?",
      choices: [
        "React Hooks",
        "stateful components",
        "math",
        "class components",
      ],
      type: "MCQs",
      correctAnswer: "React Hooks",
      code: `import React, {useState} from 'react';`,
    },
    {
      question:
        "Using object literal enhancement, you can put values back into an object. When you log person to the console, what is the output?",
      choices: [
        "{{name: 'Rachel', age: 31}}",
        "{name: 'Rachel', age: 31}",
        "{person: 'Rachel', person: 31}}",
        "{person: {name: 'Rachel', age: 31}}",
      ],
      type: "MCQs",
      correctAnswer: "{name: 'Rachel', age: 31}",
      code: `const name = 'Rachel';
      const age = 31;
      const person = { name, age };
      console.log(person);`,
    },
    {
      question:
        " What is the testing library most often associated with React?",
      choices: ["Mocha", "Chai", "Sinon", "Jest"],
      type: "MCQs",
      correctAnswer: "Jest",
    },
    {
      question:
        " To get the first item from the array ('cooking') using array destructuring, how do you adjust this line?",
      choices: [
        "const first = ['cooking', 'art', 'history']",
        "const [] = ['cooking', 'art', 'history']",
        "const [, first]['cooking', 'art', 'history']",
        "const [first] = ['cooking', 'art', 'history']",
      ],
      type: "MCQs",
      correctAnswer: "const [first] = ['cooking', 'art', 'history']",
      code: `const topics = ['cooking', 'art', 'history'];`,
    },
    {
      question:
        "How do you handle passing through the component tree without having to pass props down manually at every level?",
      choices: [
        "React Send",
        "React Pinpoint",
        "React Router",
        "React Context",
      ],
      type: "MCQs",
      correctAnswer: "React Context",
    },
    {
      question: " What should the console read when the following code is run?",
      choices: ["Horse", "Cat", "Mouse", "undefined"],
      type: "MCQs",
      correctAnswer: "Cat",
      code: `const [, , animal] = ['Horse', 'Mouse', 'Cat'];
      console.log(animal);`,
    },
    {
      question:
        "What is the name of the tool used to take JSX and turn it into createElement calls?",
      choices: ["JSX Editor", "ReactDOM", "Browser Buddy", "Babel"],
      type: "MCQs",
      correctAnswer: "Babel",
    },
    {
      question:
        "Why might you use useReducer over useState in a React component?",
      choices: [
        "when you want to replace Redux",
        "when you need to manage more complex state in an app",
        "when you want to improve performance",
        "when you want to break your production app",
      ],
      type: "MCQs",
      correctAnswer: "when you need to manage more complex state in an app",
    },
    {
      question:
        "Which props from the props object is available to the component with the following syntax?",
      choices: [
        "any that have not changed",
        "all of them",
        "child props",
        "any that have changed",
      ],
      type: "MCQs",
      correctAnswer: "all of them",
      code: `<Message {...props} />`,
    },
    {
      question:
        "Consider the following code from React Router. What do you call :id in the path prop?",
      choices: [
        "This is a route modal",
        "This is a route parameter",
        "This is a route splitter",
        "This is a route link",
      ],
      type: "MCQs",
      correctAnswer: "This is a route parameter",
      code: `<Route path="/:id" />`,
    },
    {
      question:
        "If you created a component called Dish and rendered it to the DOM, what type of element would be rendered?",
      choices: ["div", "section", "component", "h1"],
      type: "MCQs",
      correctAnswer: "h1",
      code: `function Dish() {
        return <h1>Mac and Cheese</h1>;
      }
      
      ReactDOM.render(<Dish />, document.getElementById('root'));`,
    },
    {
      question:
        "What does this React element look like given the following code? (Alternative: Given the following code, what does this React element look like?)",
      choices: [
        "<h1 props={null}>What's happening?</h1>",
        "<h1>What's happening?</h1>",
        "<h1 id='component'>What's happening?</h1>",
        "<h1 id='element'>What's happening?</h1>",
      ],
      type: "MCQs",
      correctAnswer: "<h1>What's happening?</h1>",
      code: `React.createElement('h1', null, "What's happening?");`,
    },
    {
      question:
        "What property do you need to add to the Suspense component in order to display a spinner or loading state?",
      choices: ["lazy", "loading", "fallback", "spinner"],
      type: "MCQs",
      correctAnswer: "fallback",
      code: `function MyComponent() {
        return (
          <Suspense>
            <div>
              <Message />
            </div>
          </Suspense>
        );
      }`,
    },
    {
      question:
        "How would you describe the message variable wrapped in curly braces below?",
      choices: [
        "a JS function",
        "a JS element",
        "a JS expression",
        "a JSX wrapper",
      ],
      type: "MCQs",
      correctAnswer: "a JS expression",
      code: `const message = 'Hi there';
      const element = <p>{message}</p>;`,
    },
    {
      question: "What can you use to handle code splitting?",
      choices: ["React.memo", "React.split", "React.lazy", "React.fallback"],
      type: "MCQs",
      correctAnswer: "React.lazy",
    },
    {
      question: "When do you use useLayoutEffect?",
      choices: [
        "to optimize for all devices",
        "to complete the update",
        "to change the layout of the screen",
        "when you need the browser to paint before the effect runs",
      ],
      type: "MCQs",
      correctAnswer: "to change the layout of the screen",
    },
    {
      question:
        "What is the difference between the click behaviors of these two buttons (assuming that this.handleClick is bound correctly)?",
      choices: [
        "Button A will not have access to the event object on click of the button.",
        "Button B will not fire the handler this.handleClick successfully.",
        "Button A will not fire the handler this.handleClick successfully.",
        "There is no difference.",
      ],
      type: "MCQs",
      correctAnswer: "There is no difference.",
      code: `A. <button onClick={this.handleClick}>Click Me</button>
B. <button onClick={event => this.handleClick(event)}>Click Me</button>`,
    },
    {
      question:
        "How do you destructure the properties that are sent to the Dish component?",
      choices: [
        "function Dish([name, cookingTime]) { return <h1>{name} {cookingTime}</h1>; }",
        "function Dish({name, cookingTime}) { return <h1>{name} {cookingTime}</h1>; }",
        "function Dish(props) { return <h1>{name} {cookingTime}</h1>; }",
        "function Dish(...props) { return <h1>{name} {cookingTime}</h1>; }",
      ],
      type: "MCQs",
      correctAnswer:
        "function Dish({name, cookingTime}) { return <h1>{name} {cookingTime}</h1>; }",
      code: `function Dish(props) {
        return (
          <h1>
            {props.name} {props.cookingTime}
          </h1>
        );
      }`,
    },
    {
      question: "When might you use React.PureComponent",
      choices: [
        "when you do not want your component to have props",
        "when you have sibling components that need to be compared",
        "when you want a default implementation of shouldComponentUpdate()",
        "when you do not want your component to have state",
      ],
      type: "MCQs",
      correctAnswer:
        "when you want a default implementation of shouldComponentUpdate()",
      code: `Note: Keep in mind that React.memo is another option for optimizing functional components with memoization.`,
    },
    {
      question: "What is the children prop?",
      choices: [
        "a property that adds child components to state",
        "a special property that JSX creates on components that contain both an opening tag and a closing tag, referencing it's contents.",
        "a property that lets you set an array as a property",
        "a property that lets you pass data to child elements",
      ],
      type: "MCQs",
      correctAnswer:
        "a special property that JSX creates on components that contain both an opening tag and a closing tag, referencing it's contents.",
    },
    {
      question:
        "Which attribute is React's replacement for using innerHTML in the browser DOM?",
      choices: [
        "injectHTML",
        "dangerouslySetInnerHTML",
        "weirdSetInnerHTML",
        "strangeHTML",
      ],
      type: "MCQs",
      correctAnswer: "dangerouslySetInnerHTML",
    },
    {
      question: "Which of these terms commonly describe React applications?",
      choices: ["declarative", "integrated", "closed", "imperative"],
      type: "MCQs",
      correctAnswer: "declarative",
    },
    {
      question: "When using webpack, why would you need to use a loader?",
      choices: [
        "to put together physical file folders",
        "to preprocess files",
        "to load external data",
        "to load the website into everyone's phone",
      ],
      type: "MCQs",
      correctAnswer: "to preprocess files",
    },
    {
      question:
        "A representation of a user interface that is kept in memory and is synced with the 'real' DOM is called what?",
      choices: ["virtual DOM", "DOM", "virtual elements", "shadow DOM"],
      type: "MCQs",
      correctAnswer: "virtual DOM",
    },
    {
      question:
        "You have written the following code but nothing is rendering. How do you fix this problem?",
      choices: [
        "Add a render function.",
        "Change the curly braces to parentheses or add a return statement before the h1 tag.",
        "Move the h1 to another component.",
        "Surround the h1 in a div.",
      ],
      type: "MCQs",
      correctAnswer:
        "Change the curly braces to parentheses or add a return statement before the h1 tag.",
      code: `const Heading = () => {
        <h1>Hello!</h1>;
      };`,
    },
    {
      question: "To create a constant in JavaScript, which keyword do you use?",
      choices: ["const", "let", "constant", "var"],
      type: "MCQs",
      correctAnswer: "const",
    },
    {
      question:
        "In which lifecycle method do you make requests for data in a class component?",
      choices: [
        "constructor",
        "componentDidMount",
        "componentWillReceiveProps",
        "varcomponentWillMount",
      ],
      type: "MCQs",
      correctAnswer: "componentDidMount",
    },
    {
      question:
        "React components are composed to create a user interface. How are components composed?",
      choices: [
        "by putting them in the same file",
        "by nesting components",
        "with webpack",
        "with code splitting",
      ],
      type: "MCQs",
      correctAnswer: "by nesting components",
    },
    {
      question:
        "All React components must act like _______ with respect to their props.",
      choices: [
        "monads",
        "pure functions",
        "recursive functions",
        "higher-order functions",
      ],
      type: "MCQs",
      correctAnswer: "pure functions",
    },
    {
      question: "What is [e.target.id] called in this code snippet?",
      choices: [
        "a computed property name",
        "a set value",
        "a dynamic key",
        "a JSX code string",
      ],
      type: "MCQs",
      correctAnswer: "a dynamic key",
      code: `const handleChange = (e) => {
        setState((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
      };`,
    },
    {
      question: "What is the name of this component?",
      choices: [
        "Clock",
        "It does not have a name prop.",
        "React.Component",
        "Component",
      ],
      type: "MCQs",
      correctAnswer: "Clock",
      code: `class Clock extends React.Component {
        render() {
          return <h1>Look at the time: {time}</h1>;
        }
      }`,
    },
    {
      question: "What is sent to an Array.map() function?",
      choices: [
        "a callback function that is called once for each element in the array",
        "the name of another array to iterate over",
        "the number of times you want to call the function",
        "a string describing what the function should do",
      ],
      type: "MCQs",
      correctAnswer:
        "a callback function that is called once for each element in the array",
    },
    {
      question:
        "Why is it a good idea to pass a function to setState instead of an object?",
      choices: [
        "It provides better encapsulation.",
        "It makes sure that the object is not mutated.",
        "It automatically updates a component.",
        "setState is asynchronous and might result in out of sync values.",
      ],
      type: "MCQs",
      correctAnswer:
        "setState is asynchronous and might result in out of sync values.",
    },
    {
      question:
        "What package contains the render() function that renders a React element tree to the DOM?",
      choices: ["React", "ReactDOM", "Render", "DOM"],
      type: "MCQs",
      correctAnswer: "ReactDOM",
    },
    {
      question:
        "How do you set a default value for an uncontrolled form field?",
      choices: [
        "Use the value property.",
        "Use the defaultValue property.",
        "Use the default property.",
        "It assigns one automatically.",
      ],
      type: "MCQs",
      correctAnswer: "Use the defaultValue property.",
    },
    {
      question:
        "What do you need to change about this code to get this code to run?",
      choices: [
        "Add quotes around the return value",
        "Remove this",
        "Remove the render method",
        "Capitalize clock",
      ],
      type: "MCQs",
      correctAnswer: "Capitalize clock",
      code: `const clock = (props) => {
        return <h1>Look at the time: {props.time}</h1>;
      };`,
    },
    {
      question: "Which Hook could be used to update the document's title?",
      choices: [
        "useEffect(function updateTitle() { document.title = name + ' ' + lastname; });",
        "useEffect(() => { title = name + ' ' + lastname; });",
        "useEffect(function updateTitle() { name + ' ' + lastname; });",
        "useEffect(function updateTitle() { title = name + ' ' + lastname; });",
      ],
      type: "MCQs",
      correctAnswer:
        "useEffect(function updateTitle() { document.title = name + ' ' + lastname; });",
    },
    {
      question:
        "Which function from React can you use to wrap Component imports to load them lazily?",
      choices: ["fallback", "split", "lazy", "memo"],
      type: "MCQs",
      correctAnswer: "lazy",
    },
    {
      question:
        "How do you invoke setDone only when component mounts, using hooks?",
      choices: [
        "useEffect(() => { setDone(true); });",
        "useEffect(() => { setDone(true); }, []);",
        "useEffect(() => { setDone(true); }, [setDone]);",
        "useEffect(() => { setDone(true); }, [done, setDone]);",
      ],
      type: "MCQs",
      correctAnswer: "useEffect(() => { setDone(true); }, []);",
      code: `function MyComponent(props) {
        const [done, setDone] = useState(false);
      
        return <h1>Done: {done}</h1>;
      }`,
    },
    {
      question:
        "Currently, handleClick is being called instead of passed as a reference. How do you fix this?",
      choices: [
        "<button onClick={this.handleClick.bind(handleClick)}>Click this</button>",
        "<button onClick={handleClick()}>Click this</button>",
        "<button onClick={this.handleClick}>Click this</button>",
        "<button onclick={this.handleClick}>Click this</button>",
      ],
      type: "MCQs",
      correctAnswer: "<button onClick={this.handleClick}>Click this</button>",
      code: `<button onClick={this.handleClick()}>Click this</button>`,
    },
    {
      question: "Which answer best describes a function component?",
      choices: [
        "A function component is the same as a class component.",
        "A function component accepts a single props object and returns a React element.",
        "A function component is the only way to create a component.",
        "A function component is required to create a React component.",
      ],
      type: "MCQs",
      correctAnswer:
        "A function component accepts a single props object and returns a React element.",
    },
    {
      question: "Which library does the fetch() function come from?",
      choices: [
        "FetchJS",
        "ReactDOM",
        "No library. fetch() is supported by most browsers.",
        "React",
      ],
      type: "MCQs",
      correctAnswer: "No library. fetch() is supported by most browsers.",
    },
    {
      question:
        "What will happen when this useEffect Hook is executed, assuming name is not already equal to John?",
      choices: [
        "It will cause an error immediately.",
        "It will execute the code inside the function, but only after waiting to ensure that no other component is accessing the name variable.",
        "It will update the value of name once and not run again until name is changed from the outside.",
        "It will cause an infinite loop.",
      ],
      type: "MCQs",
      correctAnswer:
        "It will update the value of name once and not run again until name is changed from the outside.",
      code: `useEffect(() => {
        setName('John');
      }, [name]);`,
    },
    {
      question: "Which choice will not cause a React component to rerender?",
      choices: [
        "if the component calls this.setState(...)",
        "the value of one of the component's props changes",
        "if the component calls this.forceUpdate()",
        "one of the component's siblings rerenders",
      ],
      type: "MCQs",
      correctAnswer: "one of the component's siblings rerenders",
    },
    {
      question:
        "React does not render two sibling elements unless they are wrapped in a fragment. Below is one way to render a fragment. What is the shorthand for this?",
      choices: [
        `<...>
        <h1>Our Staff</h1>
        <p>Our staff is available 9-5 to answer your questions</p>
      </...>`,
        `<//>
        <h1>Our Staff</h1>
        <p>Our staff is available 9-5 to answer your questions</p>
      <///>`,
        `<>
      <h1>Our Staff</h1>
      <p>Our staff is available 9-5 to answer your questions</p>
    </>`,
        `<Frag>
        <h1>Our Staff</h1>
        <p>Our staff is available 9-5 to answer your questions</p>
      </Frag>`,
      ],
      type: "MCQs",
      correctAnswer: `<>
      <h1>Our Staff</h1>
      <p>Our staff is available 9-5 to answer your questions</p>
    </>`,
      code: `<React.Fragment>
      <h1>Our Staff</h1>
      <p>Our staff is available 9-5 to answer your questions</p>
    </React.Fragment>`,
    },
    {
      question:
        "If you wanted to display the count state value in the component, what do you need to add to the curly braces in the h1?",
      choices: ["this.state.count", "count", "state", "state.count"],
      type: "MCQs",
      correctAnswer: "this.state.count",
      code: `class Ticker extends React.component {
        constructor(props) {
          super(props);
          this.state = { count: 0 };
        }
        render() {
          return <h1>{}</h1>;
        }
      }`,
    },
    {
      question:
        "Per the following code, when is the Hello component assigned to greeting?",
      choices: [
        "never",
        "when isLoggedIn is true",
        "when a user logs in",
        "when the Hello function is called",
      ],
      type: "MCQs",
      correctAnswer: "when isLoggedIn is true",
      code: `const greeting = isLoggedIn ? <Hello /> : null;
      `,
    },
    {
      question: "In the following code block, what type is orderNumber?",
      choices: ["string", "boolean", "object", "number"],
      type: "MCQs",
      correctAnswer: "string",
      code: `ReactDOM.render(<Message orderNumber="16" />, document.getElementById('root'));`,
    },
    {
      question:
        "You have added a style property to the h1 but there is an unexpected token error when it runs. How do you fix this?",
      choices: [
        "const element = <h1 style='backgroundColor: 'blue''}>Hi</h1>;",
        "const element = <h1 style={{backgroundColor: 'blue'}}>Hi</h1>;",
        "objectconst element = <h1 style={blue}>Hi</h1>;",
        "const element = <h1 style='blue'>Hi</h1>;",
      ],
      type: "MCQs",
      correctAnswer:
        "const element = <h1 style={{backgroundColor: 'blue'}}>Hi</h1>;",
      code: `const element = <h1 style={ backgroundColor: "blue" }>Hi</h1>;
      `,
    },
    {
      question:
        "Which function is used to update state variables in a React class component?",
      choices: ["replaceState", "refreshState", "updateState", "setState"],
      type: "MCQs",
      correctAnswer: "setState",
    },
    {
      question:
        "Consider the following component. What is the default color for the star?",
      choices: ["black", "red", "grey", "white"],
      type: "MCQs",
      correctAnswer: "grey",
      code: `const Star = ({ selected = false }) => <Icon color={selected ? 'red' : 'grey'} />;`,
    },
    {
      question:
        "What is the difference between the click behaviors of these two buttons(assuming that this.handleClick is not bound correctly)",
      choices: [
        "Button A will not have access to the event object on click of the button",
        "Button A will not fire the handler this.handleClick successfully",
        "There is no difference",
        "Button B will not fire the handler this.handleClick successfully",
      ],
      type: "MCQs",
      correctAnswer:
        "Button A will not fire the handler this.handleClick successfully",
      code: `A. <button onClick=this.handleClick>Click Me</button>
             B. <button onClick={event => this.handleClick(event)}>Click Me</button>`,
    },
    {
      question:
        "Give the code below, what does the second argument that is sent to the render function describe?",
      choices: [
        "where the React element should be added to the DOM",
        "where to call the function",
        "where the root component is",
        "where to create a new JavaScript file",
      ],
      type: "MCQs",
      correctAnswer: "where the React element should be added to the DOM",
      code: `ReactDOM.render(
        <h1>Hi<h1>,
          document.getElementById('root')
      )`,
    },
    {
      question:
        "Why should you use React Router's Link component instead of a basic <a> tag in React?",
      choices: [
        "The link component allows the user to use the browser's Back button.",
        "There is no difference--the Link component is just another name for the <a> tag.",
        "The <a> tag will cause an error when used in React.",
        "The <a> tag triggers a full page reload, while the Link component does not.",
      ],
      type: "MCQs",
      correctAnswer:
        "The <a> tag triggers a full page reload, while the Link component does not.",
    },
    {
      question:
        "What is the first argument, x, that is sent to the createElement function?",
      choices: [
        "the element that should be created",
        "the order in which this element should be placed on the page",
        "the properties of the element",
        "data that should be displayed in the element",
      ],
      type: "MCQs",
      correctAnswer: "the element that should be created",
      code: `React.createElement(x, y, z);`,
    },
    {
      question:
        "Which class-based lifecycle method would be called at the same time as this effect Hook?",
      choices: [
        "componentWillUnmount",
        "componentDidMount",
        "render",
        "componentDidUpdate",
      ],
      type: "MCQs",
      correctAnswer: "componentDidMount",
      code: `useEffect(() => {
        // do things
      }, []);`,
    },
    {
      question: "When using a portal, what is the first argument?",
      choices: [
        "the current state",
        "the element to render",
        "the App component",
        "the page",
      ],
      type: "MCQs",
      correctAnswer: "the element to render",
      code: `ReactDOM.createPortal(x, y);`,
    },
    {
      question: "When using a portal, what is the second argument?",
      choices: [
        "the App component",
        "the page",
        "the current state",
        "the DOM element that exists outside of the parent component",
      ],
      type: "MCQs",
      correctAnswer:
        "the DOM element that exists outside of the parent component",
      code: `ReactDOM.createPortal(x, y);`,
    },
    {
      question: "What is setCount?",
      choices: [
        "the initial state value",
        "a variable",
        "a state object",
        "a function to update the state",
      ],
      type: "MCQs",
      correctAnswer: "a function to update the state",
      code: `const [count, setCount] = useState(0);`,
    },
    {
      question: "What is the use of map function below?",
      choices: [
        "gives a map of all the entries in database",
        "returns a heading tag for every entry in the database containing it's data",
        "returns one heading tag for all the entries in database",
        "checks which entry in the database is suitable for heading tag",
      ],
      type: "MCQs",
      correctAnswer:
        "returns a heading tag for every entry in the database containing it's data",
      code: `const database = [{ data: 1 }, { data: 2 }, { data: 3 }];
      database.map((user) => <h1>{user.data}</h1>);`,
    },
    {
      question: "Describe what is happening in this code?",
      choices: [
        "It is creating a new object that contains the same name property as the props object.",
        "It is assigning the value of the props object's firstName property to a constant called name.",
        "It is retrieving the value of props.name.firstName.",
        "It is assigning the value of the props object's name property to a constant called firstName.",
      ],
      type: "MCQs",
      correctAnswer:
        "It is assigning the value of the props object's name property to a constant called firstName.",
      code: `const { name: firstName } = props;`,
    },
    {
      question: "What is wrong with this code?",
      choices: [
        "React components cannot be defined using functions.",
        "React does not allow components to return more than one element.",
        "The component needs to use the return keyword.",
        "String literals must be surrounded by quotes.",
      ],
      type: "MCQs",
      correctAnswer:
        "React does not allow components to return more than one element.",
      code: `const MyComponent = ({ names }) => (
        <h1>Hello</h1>
        <p>Hello again</p>
      );`,
    },
    {
      question: "What is this pattern called?",
      choices: [
        "object destructuring",
        "array destructuring",
        "spread operating",
        "code pushing",
      ],
      type: "MCQs",
      correctAnswer: "array destructuring",
      code: `const [count, setCount] = useState(0);`,
    },

    {
      question:
        "What is the first file loaded by the browser in a basic React project?",
      choices: [
        "src/App.js",
        "src/index.js",
        "public/manifest.json",
        "public/index.html",
      ],
      type: "MCQs",
      correctAnswer: "public/index.html",
    },
    {
      question:
        "In this component, how do you display whether the user was logged in or not?",
      choices: [
        "The user is loggedIn ? logged in : not logged in.",
        "Write a function to check the login status.",
        "The user is {isLoggedIn = 'no'}.",
        "The user is {isLoggedIn ? 'logged in.' : 'not logged in'}.",
      ],
      type: "MCQs",
      correctAnswer:
        "The user is {isLoggedIn ? 'logged in.' : 'not logged in'}.",
      code: `render() {
        const isLoggedIn = this.state.isLoggedIn;
        return (
          <div>
            The user is:
          </div>
        );
      }`,
    },
    {
      question:
        "You are rendering a list with React when this warning appears in the console: 'Warning: Each child in a list should have a unique 'key' prop.' How do you fix this issue?",
      choices: [
        "Add a key prop with the same value to each item in the list",
        "Clear the console warnings",
        "Use the UseId hook to generate a unique key for each element in the list",
        "When iterating over the list items, add a unique property to each list item.",
      ],
      type: "MCQs",
      correctAnswer:
        "When iterating over the list items, add a unique property to each list item.",
    },
    {
      question:
        "How would you generate the boilerplate code for a new app that you are building to collect underpants?",
      choices: [
        "npm create-react-app collect-underpants",
        "npx start-app collect-underpants",
        "react new collect-underpants",
        "npx create-react-app collect-underpants",
      ],
      type: "MCQs",
      correctAnswer: "npx create-react-app collect-underpants",
    },
    {
      question:
        "Add the code that will fire the photon torpedoes when the button is clicked.",
      choices: [
        "<button onClick={firePhotonTorpedoes()}>Pew Pew</button>",
        "<button onClick={firePhotonTorpedoes}>Pew Pew</button>",
        "<button onClick={this.firePhotonTorpedoes()}>Pew Pew</button>",
        "<button onClick={this.firePhotonTorpedoes}>Pew Pew</button>",
      ],
      type: "MCQs",
      correctAnswer:
        "<button onClick={this.firePhotonTorpedoes}>Pew Pew</button>",
      code: `class StarTrekkin extends React.Component {
          firePhotonTorpedoes(e) {
            console.log('pew pew');
          }
          render() {
            return; // Missing code
          }
        }`,
    },
    {
      question:
        "What is the browser extension called that React developers use to debug applications?",
      choices: [
        "React Developer Tools",
        "React Tooling Add-on",
        "React Codewatch",
        "React Debug",
      ],
      type: "MCQs",
      correctAnswer: "React Developer Tools",
    },
    {
      question: "Which tool is not part of Create React App?",
      choices: ["React", "jQuery", "webpack", "ReactDOM"],
      type: "MCQs",
      correctAnswer: "jQuery",
    },
    {
      question:
        "What is the JavaScript syntax extension that is commonly used to create React elements?",
      choices: ["HTML", "JavaScriptX", "JSX", "React JavaScript"],
      type: "MCQs",
      correctAnswer: "JSX",
    },
    {
      question:
        "How might you check property types without using Flow or TypeScript?",
      choices: [
        "Check Manually.",
        "Use prop-helper.",
        "use prop-types.",
        "user checker-types.",
      ],
      type: "MCQs",
      correctAnswer: "use prop-types.",
    },
    {
      question:
        "What value of button will allow you to pass the name of the person to be hugged?",
      choices: [
        "<button onClick={(name) => this.hug(name)}>Hug Button</button>;",
        "<button onClick={this.hug(e, name)}>Hug Button</button>;",
        "<button onClick={(e) => hug(name, e)}>Hug Button</button>;",
        "<button onClick={() => this.hug(name)}>Hug Button</button>;",
      ],
      type: "MCQs",
      correctAnswer:
        "<button onClick={() => this.hug(name)}>Hug Button</button>;",
      code: `class Huggable extends React.Component {
          hug(id) {
            console.log("hugging " + id);
          }
          render() {
            let name = "kitten";
            let button = // Missing code
            return button;
          }
        }`,
    },
    {
      question:
        "What value of button will allow you to pass the name of the person to be hugged?",
      choices: [
        "<button onClick={(name) => this.hug(name)}>Hug Button</button>;",
        "<button onClick={this.hug(e, name)}>Hug Button</button>;",
        "<button onClick={(e) => hug(name, e)}>Hug Button</button>;",
        "<button onClick={() => this.hug(name)}>Hug Button</button>;",
      ],
      type: "MCQs",
      correctAnswer:
        "<button onClick={() => this.hug(name)}>Hug Button</button>;",
      code: `class Huggable extends React.Component {
          hug(id) {
            console.log("hugging " + id);
          }
          render() {
            let name = "kitten";
            let button = // Missing code
            return button;
          }
        }`,
    },
    {
      question: "What syntax do you use to create a component in React?",
      choices: [
        "a generator",
        "a function or a class",
        "a service worker",
        "a tag",
      ],
      type: "MCQs",
      correctAnswer: "a function or a class",
    },
    {
      question:
        "You want to disable a button so that it does not emit any events onClick. Which prop do you use to acomplish this?",
      choices: ["onBlur", "onPress", "defaultValue", "disabled"],
      type: "MCQs",
      correctAnswer: "disabled",
    },
    {
      question:
        "In this function, which is the best way to describe the Dish component?",
      choices: [
        "child component",
        "parent component",
        "nested component",
        "sibling component",
      ],
      type: "MCQs",
      correctAnswer: "parent component",
      code: `function Dish() {
          return (
            <>
              <Ingredient />
              <Ingredient />
            </>
          );
        }`,
    },
    {
      question: " When does the componentDidMount function fire?",
      choices: [
        "right after the component is added to the DOM",
        "before the component is added to the DOM",
        "right after the component is updated",
        "right after an API call",
      ],
      type: "MCQs",
      correctAnswer: "right after the component is added to the DOM",
    },
    {
      question: "What might you use webpack for in React development?",
      choices: [
        "to fetch remote dependencies used by your app",
        "to split your app into smaller chunks that can be more easily loaded by the browser",
        "to format your code so that it is more readable",
        "to ensure your app is not vulnerable to code injection",
      ],
      type: "MCQs",
      correctAnswer:
        "to split your app into smaller chunks that can be more easily loaded by the browser",
    },
    {
      question:
        "When using the React Developer Tools Chrome extension, what does it mean if the React icon is red?",
      choices: [
        "You are using the development build of React.",
        "You are using the production build of React.",
        "You are using the production build of React.",
        "You are using Create React App.",
      ],
      type: "MCQs",
      correctAnswer: "You are using the development build of React.",
    },
    {
      question:
        "How would you modify the constructor to fix this error: 'ReferenceError: Must call super constructor in derived class before accessing 'this'...'?",
      choices: [
        "render(props);",
        "super(props);",
        "super(this);",
        "this.super();",
      ],
      type: "MCQs",
      correctAnswer: "super(props);",
      code: `class TransIsBeautiful extends React.Component {
          constructor(props){
          // Missing line
          console.log(this) ;
          }
          ...
        }`,
    },
    {
      question: "Which language can you not use with React?",
      choices: ["Swift", "JSX", "Javascipt", "TypeScript"],
      type: "MCQs",
      correctAnswer: "Swift",
    },
    {
      question: "What would be the result of running this code?",
      choices: ["null", "3", "0", "undefined"],
      type: "MCQs",
      correctAnswer: "3",
      code: `function add(x = 1, y = 2) {
          return x + y;
        }
        
        add();`,
    },
    {
      question: "Why might you use a React.ref?",
      choices: [
        "to refer to another JS file",
        "to bind the function",
        "to call a function",
        "to directly access the DOM node",
      ],
      type: "MCQs",
      correctAnswer: "to directly access the DOM node",
    },
    {
      question: "What pattern is being used in this code block?",
      choices: [
        "function defaults",
        "array destructuring",
        "PRPL pattern",
        "destructuring assignment",
      ],
      type: "MCQs",
      correctAnswer: "destructuring assignment",
      code: `const { tree, lake } = nature;
        `,
    },
    {
      question:
        " This code is part of an app that collects Pokemon. The useState hook below is a piece of state holding onto the names of the Pokemon collected so far. How would you access the collected Pokemon in state?",
      choices: [
        "props.pokeDex",
        "this.props.pokeDex",
        "setPokeDex()",
        "pokeDex",
      ],
      type: "MCQs",
      correctAnswer: "pokeDex",
      code: `const PokeDex = (props) => {
          const [pokeDex, setPokeDex] = useState([]);
          /// ...
        };
        `,
    },
    {
      question:
        "What is the name of the compiler used to transform JSX into JavaScript?",
      choices: ["Babel", "JSX Editor", "Browser Buddy", "ReactDOM"],
      type: "MCQs",
      correctAnswer: "Babel",
    },
    {
      question:
        "Which hook is used to prevent a function from being recreated on every component render?",
      choices: ["useCallback", "useMemo", "useRef", "useTransition"],
      type: "MCQs",
      correctAnswer: "useCallback",
    },
    {
      question:
        "Choose the method which should be overridden to stop the component from updating?",
      choices: [
        "componentDidMount",
        "componentDidUpdate",
        "willComponentUpdate",
        "shouldComponentUpdate",
      ],
      type: "MCQs",
      correctAnswer: "shouldComponentUpdate",
    },
    {
      question: "What is the functionality of a “webpack” command?",
      choices: [
        "Runs react local development server",
        "Transfers all JS files to down into one file",
        "A module builder",
        "All of the above",
      ],
      type: "MCQs",
      correctAnswer: "All of the above",
    },
    {
      question: "Choose the method which is not a part of ReactDOM?",
      choices: [
        "ReactDOM.createPortal()",
        "ReactDOM.hydrate()",
        "ReactDOM.destroy()",
        "ReactDOM.findDOMnode()",
      ],
      type: "MCQs",
      correctAnswer: "ReactDOM.destroy()",
    },
    {
      question: "In react, the key should be?",
      choices: [
        "Unique among his siblings",
        "Unique in DOM",
        "Does not requires to be unique",
        "all of the above",
      ],
      type: "MCQs",
      correctAnswer: "Unique among his siblings",
    },
    {
      question:
        "Among The following options, choose the one which helps react for keeping their data uni-directional?",
      choices: ["DOM", "flux", "JSX", "Props"],
      type: "MCQs",
      correctAnswer: "flux",
    },
    {
      question:
        "What is the pattern that is used in the Context.Consumer below?",
      choices: [
        "higher-order component",
        "wish component",
        "Render Props",
        "setup Componet",
      ],
      type: "MCQs",
      correctAnswer: "Render Props",
      code: `<Context.Consumer> {(isLoggedIn)=>{isLoggedIn ? "Online" : "Offline"}} </Context.Consumer>`,
    },
    {
      question:
        "In React.js which one of the following is used to create a class for Inheritance ?",
      choices: ["Create", "Extends", "Inherits", "Delete"],
      type: "MCQs",
      correctAnswer: "Extends",
    },
    {
      question: "What is the use of super(props) in React.js?",
      choices: [
        "To call the constructor of the parent class",
        "To initialize this.props in the constructor",
        "Both of the above",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "Both of the above",
    },
    {
      question: "What is Redux in React.js?",
      choices: [
        "A state container for JavaScript apps",
        "A tool for building UI components",
        "Both of the above",
        "None of the above",
      ],
      type: "MCQs",
      correctAnswer: "A state container for JavaScript apps",
    },
    {
      question:
        "What is the purpose of the virtual DOM in React.js, and how does it improve performance in web applications?",
      choices: [
        "The virtual DOM is used to store user authentication data securely.",
        "The virtual DOM is a backup copy of the actual DOM, created for debugging purposes.",
        "The virtual DOM is a lightweight representation of the actual DOM, and it helps improve performance by minimizing direct manipulation of the real DOM.",
        "The virtual DOM is a database used to store component states.",
      ],
      type: "MCQs",
      correctAnswer:
        "The virtual DOM is a lightweight representation of the actual DOM, and it helps improve performance by minimizing direct manipulation of the real DOM.",
    },
    {
      question:
        "You run the following code and get this error message: 'invalid hook call.' what is wrong with the code?",
      choices: [
        "The useState call needs to be called inside of the PokeButton component.",
        "The react package is likely not installed correctly.",
        "useState is not imported correctly. Import useState directly instead of importing react",
        "PokeButton is a pure function and therefore cannot have any local state.",
      ],
      type: "MCQs",
      correctAnswer:
        "The useState call needs to be called inside of the PokeButton component.",
      code: `import React from 'react';

      const [poked, setPoked] = React.useState(false);
      
      function PokeButton() {
        return <button onClick={() => setPoked(true)}>{poked ? 'You have left a poke.' : 'Poke'}</button>;
      }`,
    },
    {
      question:
        "A colleague comes to you for help on a react component. They say that the poke button renders correctly, however when the button is clicked, this error is shown: 'setPoked is not defined'. What is wrong with their code?",
      choices: [
        "onClick prop should be onclick.",
        "The click handler passed to the onClick prop is inlined. Move this handler into a variable outside of JSX.",
        "They use object destructructing instead of array destructructing. Wrap the poked and setPoked values in an array.",
        "poked and setPoked are not destructured in the correct order.",
      ],
      type: "MCQs",
      correctAnswer:
        "They use object destructructing instead of array destructructing. Wrap the poked and setPoked values in an array.",
      code: `function PokeButton() {
        const { poked, setPoked } = useState(false);
        return <button onclick={() => setPoked(true)}>{poked ? 'You have left a poke.' : 'Poke'}</button>;
      }`,
    },
    {
      question:
        "This component is loaded dynamically. What should you replace XXXX with to complete the code?",
      choices: ["Component", "Fragment", "Suspense", "Lazy"],
      type: "MCQs",
      correctAnswer: "Suspense",
      code: `const OtherComponent = React.lazy(() => import('./OtherComponent.js'));

      function MyComponent() {
        return (
          <XXXX fallback={<spinner />}>
            <OtherComponent />
          </XXXX>
        );
      }`,
    },
    {
      question:
        "Elements in lists in React should have ______ that are ______ .",
      choices: [
        "keys ; unique",
        "keys ; indexes",
        "keys ; indexes",
        "values ; not-null",
      ],
      type: "MCQs",
      correctAnswer: "keys ; unique",
    },
    {
      question:
        "You want to perform a network operation as the result of a change to a component's state named userInput. what would you replace XXXX with?",
      choices: ["[userInput]", "userInput", "undefined", "[ ]"],
      type: "MCQs",
      correctAnswer: "[userInput]",
      code: `useEffect(callNetworkFunc, XXXX);`,
    },
    {
      question: "What is the difference between state and props in React?",
      choices: [
        "Props are set by the parent component, state is set by the child component",
        "Props are passed to a component, state is managed within the component",
        "Props can be updated, state cannot be updated",
        "There is no difference - props and state are the same",
      ],
      type: "MCQs",
      correctAnswer:
        "Props are passed to a component, state is managed within the component",
    },
    {
      question: "What is the primary function of React Router?",
      choices: [
        "React Router is used for fetching data from APIs.",
        "React Router is used to create animations in React applications.",
        "React Router is used for managing state in React components.",
        "React Router is used for adding navigation and routing to React applications, allowing users to navigate between different views or pages.",
      ],
      type: "MCQs",
      correctAnswer:
        "React Router is used for adding navigation and routing to React applications, allowing users to navigate between different views or pages.",
    },
    {
      question: "When should you use Redux in a React application?",
      choices: [
        "Redux is always required in React applications.",
        "Redux is always required in React applications.",
        "Redux is used for creating user interfaces but not for state management.",
        "Redux is typically used when you have complex state management needs, such as sharing state between multiple components or handling deeply nested state.",
      ],
      type: "MCQs",
      correctAnswer:
        "Redux is typically used when you have complex state management needs, such as sharing state between multiple components or handling deeply nested state.",
    },
    {
      question: "What is the use of React hooks?",
      choices: [
        "To optimize React apps for mobile devices",
        "To add visual effects to React components.",
        "To allow using state and lifecycle methods in function components",
        "To integrate with external UI libraries like Bootstrap",
      ],
      type: "MCQs",
      correctAnswer:
        "To allow using state and lifecycle methods in function components",
    },
    {
      question:
        "How can you pass data through a React component tree without having to pass props down manually at every level?",
      choices: [
        "By using React context",
        "By using redux",
        "By using react router",
        "By using react lifecycle methods",
      ],
      type: "MCQs",
      correctAnswer: "By using React context",
    },
  ],
};
