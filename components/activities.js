
let menuVariable_mouseOver = (menuVariable, menuSubmenu, dropDownList) => {
        menuSubmenu.classList.remove("hide");
        return true;
}

let menuVariable_mouseLeave = (dropDownList, menuSubmenu) => {
    let temp = setTimeout(() => {
        if(dropDownList)
            menuSubmenu.classList.add("hide");
    }, 500)
    return false;
}

let menuSubmenu_mouseOver = () => {
    return true;
}

let menuSubmenu_mouseLeave = (dropDownList, menuSubmenu) => {
    dropDownList = false;
    menuSubmenu.classList.add("hide");
}

export {
    menuVariable_mouseOver, 
    menuVariable_mouseLeave, 
    menuSubmenu_mouseOver, 
    menuSubmenu_mouseLeave
};