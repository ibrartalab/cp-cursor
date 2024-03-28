# own-cursor

own-cursor is a versatile npm package designed to empower React developers with the ability to easily implement custom cursor pointers in any React project. With this package, you can effortlessly update styles, customize cursor icons, and explore a range of additional features to enhance user experience.

## Features

### 1. Update Styles

Easily update cursor styles to match the design aesthetics of your project. Customize parameters such as size, color, and fill of the shape to create a unique cursor experience tailored to your application.

### 2. Update Icons

Use any icons from the react-icons library to change the default shape you can with manimal efforts.

### 3. Cross-Browser Compatibility

Ensure a consistent user experience across different browsers and devices with our package's support for cross-browser compatibility. Your custom cursors will function reliably on all major web browsers.

## Installation

To install Custom Cursor React in your project, simply run the following command:

```bash
npm install own-cursor
```

```bash
yarn add own-cursor
```

## Usage

Using the component directly:

```jsx
import { CPCursor } from "cp-cursor";
```

Add the on top level in your project:

```jsx
import { CPCursor } from "own-cursor";

function App() {
  return (
    <>
      {/*----Add the component here----*/}
      <CPCursor />
      <div>
        <h1>We are using the own-cursor package!</h1>
      </div>
    </>
  );
}

export default App;
```

## Updating the curor icons

Want to use your own cursor icons simply use it:

```JSX
import { CPCursor,changeCursor} from "own-cursor";

function App() {

// Just import any react-icon and pass it to the changeCursor function.
changeCursor("hand",<react-icons />)
  return (
    <>
    {/*----Add the component here----*/}
      <CPCursor />
      <div>
        <h1>We are using the own-cursor package!</h1>
      </div>
    </>
  );
}

export default App;
```

## Customize the icons styles

To customize the default styles:

```JSX
import { CPCursor,changeCursor,changeCursorStyles} from "own-cursor";

function App() {

// Just pass object of key values style supported properties  to the changeCursorStyles function.
changeCursorStyles({
  iconSize:'20px',
  borderColor:'red',
  bgColor:'black'
})
  return (
    <>
    {/*----Add the component here----*/}
      <CPCursor />
      <div>
        <h1>We are using the own-cursor package!</h1>
      </div>
    </>
  );
}

export default App;
```

## Parameters

| Parameters| Default  | Desc|
| :-----: | :-: | :-: |
| iconSize | 20px | This is the size of the of the icon |
| borderColor | Red | This is the border or the stoke color of the icon |
| bgColor | Black | The background or fill color of the icon |
|changeCursor| hand,mouse,input|its a function to change the icons whatever icons you want to use|
|changeCursorStyles|default style|using this you can update the styles|
|default cursor|hand|The default cursor icon|
|hover actions|mouse|hover on somthing,button etc.|
|input action|input|for input fileds|



## Contribute
[Want to contribute? Great! Make an Issue!](https://github.com/ibrartalab/cp-cursor)



## License

own-cursor is licensed under the MIT License. Feel free to use, modify, and distribute this package in accordance with the terms of the license.

Note: This package is based on TypeScript so we recommend to use TypeScript for better expereince.

