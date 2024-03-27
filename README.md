# own-cursor
own-cursor  is a versatile npm package designed to empower React developers with the ability to easily implement custom cursor pointers in any React project. With this package, you can effortlessly update styles, customize cursor icons, and explore a range of additional features to enhance user experience.

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
Import the OwnPointers component from the package:

```jsx
import { OwnPointers } from 'custom-cursor-react';
```

How to use it in your project:

```jsx
import { OwnPointers,iconStyles,cursorIcons } from "own-cursor";

function App() {

  return (
    <>
    //Just include this component in your app componnet
      <OwnPointers />
      <div>
        <h1>We are using the own-cursor package!</h1>
      </div>
    </>
  );
}

export default App;
```

## License
own-cursor is licensed under the MIT License. Feel free to use, modify, and distribute this package in accordance with the terms of the license.