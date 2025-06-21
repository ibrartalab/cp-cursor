//Function to change cursor
const changeCursor = (cursorName: string, icon: HTMLElement) => {
  let newIcons = { ...cursorIcons };
  if (cursorName in newIcons) {
    newIcons[cursorName] = icon;
    cursorIcons = newIcons;
  }
};