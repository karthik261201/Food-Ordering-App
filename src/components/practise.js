// -------PRACTISE CODE HERE ACTUAL CODE STARTS BELOW-----------
// Basic way of creating HTML content
// const heading = React.createElement("h1", { id: "heading" }, "Hello World!! from React")

// const parent = React.createElement("div", { id: "parent" }, [
//     React.createElement("div", { id: "child-1" }, [
//         React.createElement("h1", {}, "C1 H1 Tag"),
//         React.createElement("h2", {}, "C1 H2 Tag")
//     ]),
//     React.createElement("div", { id: "child-2" }, [
//         React.createElement("h1", {}, "C2 H1 Tag"),
//         React.createElement("h2", {}, "C2 H2 Tag")
//     ]),
// ])

// console.log(parent)
// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(parent)

// React Element
// const jsxH = <h1 id="heading">Hello World!! from JSX</h1>

// Title Component
// const Title = () => {
//     return <h1 id="heading">Hello World!! from Title Component</h1>
// }

// React Component
// composing 2 components to one is called Component Composition
// const HeadingComponent = () => {
//     return (
//         <div id="container">
//             <Title />
//             <h1>React Functional Component</h1>
//         </div>
//     );
// }

// console.log(jsxH)
// console.log(HeadingComponent)
// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(<HeadingComponent />)

// -------ACTUAL CODE STARTS IN APP.JS-----------