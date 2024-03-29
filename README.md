
# CPCursor

CPCursor is a versatile npm package designed to empower React developers with the ability to easily implement custom cursor pointers in any React project. With this package, you can effortlessly update styles, customize cursor icons, and explore a range of additional features to enhance user experience.

## Features
1. **Update Styles**: Easily update cursor styles to match the design aesthetics of your project. Customize parameters such as size, color, and fill of the shape to create a unique cursor experience tailored to your application.
2. **Update Icons**: Use any icons from the react-icons library to change the default shape you can with minimal efforts.
3. **Cross-Browser Compatibility**: Ensure a consistent user experience across different browsers and devices with our package's support for cross-browser compatibility. Your custom cursors will function reliably on all major web browsers.

## Installation
To install CPCursor in your project, simply run the following command:
```bash
npm install CPCursor
```
or
```bash
yarn add CPCursor
```

## Usage
### Using the component directly:
```javascript
import { CPCursor } from "CPCursor";

function App() {
  return (
    <>
      {/*----Add the component here----*/}
      <CPCursor />
      <div>
        <h1>We are using the CPCursor package!</h1>
      </div>
    </>
  );
}

export default App;
```

### Updating the cursor icons:
```javascript
import { CPCursor, changeCursor } from "CPCursor";

function App() {
  // Just import any react-icon and pass it to the changeCursor function.
  changeCursor("hand", <react-icons />);
  
  return (
    <>
      {/*----Add the component here----*/}
      <CPCursor />
      <div>
        <h1>We are using the CPCursor package!</h1>
      </div>
    </>
  );
}

export default App;
```

### Customize the icon styles:
```javascript
import { CPCursor, changeCursor, changeCursorStyles } from "CPCursor";

function App() {
  // Just pass an object of key-value style supported properties to the changeCursorStyles function.
  changeCursorStyles({
    iconSize: '20px',
    borderColor: 'red',
    bgColor: 'black'
  });
  
  return (
    <>
      {/*----Add the component here----*/}
      <CPCursor />
      <div>
        <h1>We are using the CPCursor package!</h1>
      </div>
    </>
  );
}

export default App;
```

## Parameters
| Parameters     | Default   | Desc                                |
|----------------|-----------|-------------------------------------|
| iconSize       | 20px      | This is the size of the icon.       |
| borderColor    | Red       | This is the border color of the icon.|
| bgColor        | Black     | This is the background color of the icon.|
| changeCursor   | hand,mouse,input | Function to change the icons.|
| changeCursorStyles | default style | Update the styles of icons.|
| default cursor | hand      | The default cursor icon.            |
| hover actions  | mouse     | Hover action on buttons, links, etc.|
| input action   | input     | Action for input fields.            |

## Contribute
[Want to contribute? Great! Make an Issue!](https://github.com/ibrartalab/cp-cursor/blob/main/src/components/OwnCursor.tsx)

## License
CPCursor is licensed under the MIT License. Feel free to use, modify, and distribute this package in accordance with the terms of the license.

Note: This package is based on TypeScript so we recommend using TypeScript for a better experience.