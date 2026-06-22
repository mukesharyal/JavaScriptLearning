// We need to create an element which will be our root element
// We create a React element using the React.createElement() function
// The arguments it takes are:
//
// 1. Tag Name: The name of the tag for the HTML Element that we'd like to create
// So, for custom elements (components), we can return a React element using the React.createElement() so that React makes an element out of it
//
// 2. Props: These are the additional properties that we pass to our elements
// In case of the standard elements, these correspond to their attributes
// For components, these are passed as the arguments for the functions which can be used in various ways
//
// 3. Children: The various other React elements that are the direct children of this element
// For a lot of children, we can also pass an array which will be spread by React while rendering them
// Something that can be noted is that, for example, when we do React.createElement("h1", {}, "Hello, world!"), then
// the text (or should I say TextNode) is the child of the HTMLElement h1

const App = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, "Hello, World!")
    )
}

const root = document.getElementById("root")
const rootElement = ReactDOM.createRoot(root)
const appRoot = React.createElement(App)
rootElement.render(appRoot)


