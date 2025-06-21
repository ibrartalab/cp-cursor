# **cp-cursor**

`cp-cursor` is an easy-to-use React package that provides a customizable and interactive custom cursor for your web applications. It allows you to replace the default browser cursor with a custom one that dynamically changes its appearance based on user interactions with different HTML elements like links, buttons, and input fields.

Leveraging `react-icons`, `cp-cursor` makes it simple to integrate a visually engaging cursor experience into your React projects.

## **✨ Features**

* **Customizable Cursor Icons**: Easily change the default mouse, hand, and text input cursor icons using `react-icons`.  
* **Dynamic Icon Switching**: Automatically switches cursor icons when hovering over interactive elements (links, buttons, input fields).  
* **Customizable Styles**: Control the size, border color, and background color of your cursor icons.  
* **Lightweight**: Built with React hooks for optimal performance.  
* **Easy Integration**: Simple to set up and use in any React application.

## **🚀 Installation**

You can install `cp-cursor` using npm or yarn:

```Bash  
npm install cp-cursor react-icons  
\# or  
yarn add cp-cursor react-icons
```
**Note**: `react-icons` is a peer dependency, so make sure to install it alongside `cp-cursor`.

## **📦 Usage**

### **1\. Import and Render the Cursor Component**

To use the custom cursor, simply import the `Cursor` component from `cp-cursor` and render it in your main application component (e.g., `App.tsx` or `Layout.tsx`).

```TypeScript  
// src/App.tsx  
import React from 'react';  
import { Cursor } from 'cp-cursor'; // Import the Cursor component  
import './App.css'; // Your main CSS file

function App() {  
  return (  
    \<div className="App"\>  
      {/\* Your other application components \*/}  
      \<h1\>Welcome to my App\!\</h1\>  
      \<p\>This is some content.\</p\>  
      \<a href="\#"\>A link\</a\>  
      \<button\>A Button\</button\>  
      \<input type="text" placeholder="Type here..." /\>

      \<Cursor /\> {/\* Render the Cursor component \*/}  
    \</div\>  
  );  
}

export default App;
```
### **2\. Customizing Cursor Icons and Styles**

The `useChangeIcon` hook provides functions to dynamically change the cursor icons and their styles.

```TypeScript  
// src/components/MyCustomComponent.tsx (Example usage in a child component)  
import React from 'react';  
import { useChangeIcon } from 'cp-cursor';  
import { FaBeer } from 'react-icons/fa'; // Example: using a different icon

const MyCustomComponent \= () \=\> {  
  const { changeCursor, changeCursorStyles } \= useChangeIcon();

  const handleChangeIcons \= () \=\> {  
    // Change the 'hand' cursor icon to a beer icon  
    changeCursor('hand', \<FaBeer /\>);  
  };

  const handleChangeStyles \= () \=\> {  
    // Change the cursor icon styles  
    changeCursorStyles({  
      iconSize: '30px',  
      borderColor: 'purple',  
      bgColor: 'yellow',  
    });  
  };

  return (  
    \<div\>  
      \<button onClick={handleChangeIcons}\>Change Hand Icon\</button\>  
      \<button onClick={handleChangeStyles}\>Change Cursor Styles\</button\>  
    \</div\>  
  );  
};


export default MyCustomComponent;
```
**Important Notes:**

* The `Cursor` component listens for mouse events on the entire `document`.  
* It dynamically changes the displayed icon based on the `tagName` of the element being hovered over.  
* The `cursor-box` class is crucial for the component's internal logic. Do not remove it.

## **⚙️ API Reference**

### **`Cursor` Component**

The `Cursor` component takes no props. It should be rendered once in your application.

### **`useChangeIcon` Hook**

The `useChangeIcon` hook returns an object with the following functions and state:

| Parameters | Default | Description |
| :---- | :---- | :---- |
| `iconSize` | `20px` | This is the size of the icon. |
| `borderColor` | `red` | This is the border color of the icon. |
| `bgColor` | `black` | This is the background color of the icon. |
| `changeCursor` | `hand`, `mouse`, `input` | Function to change the icons. |
| `changeCursorStyles` | default style | Update the styles of icons. |
| `default cursor` | `mouse` | The default cursor icon displayed. |
| `hover actions` | `hand` | Cursor icon when hovering over buttons, links (`A`, `BUTTON`). |
| `input action` | `input` | Cursor icon for input fields (`INPUT`). |

Export to Sheets

#### **Functions**

* `changeCursor(cursorName: 'hand' | 'mouse' | 'input', icon: React.ReactElement | React.ReactNode)`:

  * **Description**: Allows you to replace the default icon for a specific cursor type.  
  * **Parameters**:  
    * `cursorName`: A string literal `'hand'`, `'mouse'`, or `'input'`, specifying which cursor icon to change.  
    * `icon`: A `React.ReactElement` or `React.ReactNode` (ideally a `react-icons` component) that will replace the default icon.  
  * **Example**: `changeCursor('hand', <GiHighFive />)`  
* `changeCursorStyles(iconStyles: IconStyles)`:

  * **Description**: Allows you to customize the visual styles of all cursor icons.  
  * **Parameters**:  
    * `iconStyles`: An object of type `IconStyles` with the following properties: `iconSize`, `borderColor`, and `bgColor`. These directly correspond to the parameters detailed in the table above.  
  * **Example**: `changeCursorStyles({ iconSize: '25px', borderColor: 'blue', bgColor: 'lightgray' })`

#### **State**

* `cursorIcons: CursorIconTypes`:  
  * **Description**: An object containing the current React elements for each cursor type (`hand`, `mouse`, `input`). This is primarily for internal use but can be accessed if needed.

### **Default Behavior**

The `Cursor` component automatically manages which icon is displayed based on the element under the cursor:

* **Default Cursor**: When not hovering over specific interactive elements, the `mouse` icon is displayed.  
* **Hover Actions**: When the cursor hovers over `<A>` (links) or `<BUTTON>` elements, the `hand` icon is displayed.  
* **Input Action**: When the cursor hovers over an `<INPUT>` element, the `input` icon is displayed.

### **Types**

```TypeScript  
// From types/index.ts (as inferred from your code)

/\*\*  
 \* @description  
 \* Position interface  
 \* Defines the x and y coordinates for the cursor's position.  
 \*/  
export interface Position {  
  x: number;  
  y: number;  
}

/\*\*  
 \* @description  
 \* IconVisibility interface  
 \* Defines the CSS display values for visible and hidden icon states.  
 \*/  
export interface IconVisibility {  
  visible: string;  
  hidden: string;  
}

/\*\*  
 \* @description  
 \* IconStyles interface  
 \* Defines the styling properties for cursor icons.  
 \*/  
export interface IconStyles {  
  iconSize: string;  
  borderColor: string;  
  bgColor: string;  
}

/\*\*  
 \* @description  
 \* CursorIconTypes interface  
 \* Defines the structure for different cursor icons as React elements.  
 \*/  
export interface CursorIconTypes {  
  hand: React.ReactElement;  
  mouse: React.ReactElement;  
  input: React.ReactElement;  
}
```
## **🤝 Contributing**

Contributions are welcome\! If you find a bug, have a feature request, or want to improve the code, please feel free to:

1. Fork the repository.  
2. Create a new branch (`git checkout -b feature/your-feature-name`).  
3. Make your changes.  
4. Commit your changes (`git commit -m 'feat: Add new feature'`).  
5. Push to the branch (`git push origin feature/your-feature-name`).  
6. Open a Pull Request.

## **📄 License**

This project is licensed under the GPL 3.0 License \- see the [LICENSE](https://www.google.com/search?q=LICENSE) file for details.

## **🙏 Acknowledgements**

* Built with React  
* Uses `react-icons` for customizable icons

