
// HEADER SECTION STARTS

import header from "../components/header.js"
let head = document.getElementById("header");
head.innerHTML = header();

import {
    menuVariable_mouseOver, 
    menuVariable_mouseLeave, 
    menuSubmenu_mouseOver, 
    menuSubmenu_mouseLeave } from "../components/activities.js"

let dropDownList = false;
let roomsVariable = document.getElementById("rooms");
let roomsSubmenu = document.querySelector(".rooms_submenu");

roomsVariable.addEventListener("mouseover", () => {
   dropDownList = menuVariable_mouseOver(roomsVariable, roomsSubmenu, dropDownList);
   menuSubmenu_mouseLeave(dropDownList1, activitiesSubmenu);
})
roomsVariable.addEventListener("mouseleave", () => {
    dropDownList = menuVariable_mouseLeave(dropDownList, roomsSubmenu);
})
roomsSubmenu.addEventListener("mouseover", () => {
    dropDownList = menuSubmenu_mouseOver(dropDownList);
})
roomsSubmenu.addEventListener("mouseleave", () => {
    menuSubmenu_mouseLeave(dropDownList, roomsSubmenu);
})

let dropDownList1 = false;
let activitiesVariable = document.getElementById("activities");
let activitiesSubmenu = document.querySelector(".activities_submenu");

activitiesVariable.addEventListener("mouseover", () => {
    dropDownList1 = menuVariable_mouseOver(activitiesVariable, activitiesSubmenu, dropDownList1);
    menuSubmenu_mouseLeave(dropDownList, roomsSubmenu);
})
activitiesVariable.addEventListener("mouseleave", () => {
    menuVariable_mouseLeave(dropDownList1, activitiesSubmenu);
})
activitiesSubmenu.addEventListener("mouseover", () => {
    dropDownList1 = menuSubmenu_mouseOver(dropDownList1);
})
activitiesSubmenu.addEventListener("mouseleave", () => {
    menuSubmenu_mouseLeave(dropDownList1, activitiesSubmenu);
})

let homeVariable = document.querySelector("#header_right_menubar>div:nth-child(1)");

homeVariable.addEventListener("mouseover", () => {
   dropDownList = menuVariable_mouseOver(roomsVariable, roomsSubmenu, dropDownList);
   menuSubmenu_mouseLeave(dropDownList1, activitiesSubmenu);
   menuSubmenu_mouseLeave(dropDownList, roomsSubmenu);
})



let locationVariable = document.querySelector("#header_right_menubar>div:nth-child(4)");

locationVariable.addEventListener("mouseover", () => {
    dropDownList1 = menuVariable_mouseOver(activitiesVariable, activitiesSubmenu, dropDownList1);
    menuSubmenu_mouseLeave(dropDownList, roomsSubmenu);
    menuSubmenu_mouseLeave(dropDownList1, activitiesSubmenu);
})

// HEADER SECTION ENDS

// FOOTER SECTION STARTS

import footer1 from "../components/footer.js"

let footer = document.getElementById("footer");
footer.innerHTML = footer1();


let arr = document.querySelectorAll(".footer_part_1_container_box_2_contact");
console.log(arr);

for(let i=0; i<arr.length; i++){
    arr[i].addEventListener("mouseover", () => {
    let temp = arr[i].querySelector("div:first-child");
    temp.style = "background-color: white";
})

arr[i].addEventListener("mouseleave", () => {
    let temp = arr[i].querySelector("div:first-child");
    temp.style = "background-color: transparent";
})
}