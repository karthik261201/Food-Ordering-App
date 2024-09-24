// Basic way of creating HTML content
// const heading = React.createElement("h1", { id: "heading" }, "Hello World!! from React")

import React from "react"
import ReactDOM from "react-dom/client"

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child-1" }, [
        React.createElement("h1", {}, "C1 H1 Tag"),
        React.createElement("h2", {}, "C1 H2 Tag")
    ]),
    React.createElement("div", { id: "child-2" }, [
        React.createElement("h1", {}, "C2 H1 Tag"),
        React.createElement("h2", {}, "C2 H2 Tag")
    ]),
])

console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)