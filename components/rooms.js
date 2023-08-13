
    let dropDownList = false;
    let roomsVariable = document.getElementById("header_right_line_2_rooms");
    let roomsSubmenu = document.getElementById("header_right_line_2_rooms_submenu");
    
    roomsVariable.addEventListener("mouseover", () => {
        roomsSubmenu.classList.remove("hide");
    })

    roomsVariable.addEventListener("mouseleave", () => {
        setTimeout(() => {
            if(!dropDownList)
                roomsSubmenu.classList.add("hide");
        }, 500)
    })

    roomsSubmenu.addEventListener("mouseover", ()=> {
        dropDownList = true;
    })

    roomsSubmenu.addEventListener("mouseleave", ()=> {
        dropDownList = false;
        roomsSubmenu.classList.add("hide");
    })





let activitiesVariable = document.getElementById("header_right_line_2_activities");
let activitiesSubmenu = document.getElementById("header_right_line_2_activities_submenu");

activitiesVariable.addEventListener("mouseover", () => {
    activitiesSubmenu.classList.remove("hide");
})

activitiesVariable.addEventListener("mouseleave", () => {
    setTimeout(() => {
        if(!dropDownList)
        activitiesSubmenu.classList.add("hide");
    }, 500)
})

activitiesSubmenu.addEventListener("mouseover", ()=> {
    dropDownList = true;
})

activitiesSubmenu.addEventListener("mouseleave", ()=> {
    dropDownList = false;
    activitiesSubmenu.classList.add("hide");
})