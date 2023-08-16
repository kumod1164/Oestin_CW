
// HEADER SECTION STARTS

import header from "../components/header.js"
let head = document.getElementById("header");
head.innerHTML = header();




// import scroll from "../components/headerScroll.js"
// window.onscroll = () => { windowScroll() };

// function windowScroll(){

//     if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
//         console.log("SCROLLED");
//         let head = document.getElementById("header");
//         head.innerHTML = "";
//         // console.log(scroll())
//         head.style.position = "fixed"
//         head.innerHTML = scroll();

//         let shape = document.getElementById("shape");
//         shape.style.borderTop = "50px solid #B5876D";
//         shape.style.borderLeft = "50px solid #B5876D";
//         shape.style.borderRadius = "50px solid transparent";
//         shape.style.borderBottom = "0px solid transparent";

//         let tempHead = document.getElementById("head");
//         tempHead.style.justifyContent = "space-around";
//         tempHead.style.backgroundColor = "rgba(51, 50, 50, 0.8)"

//         let left = document.getElementById("header_left");
//         left.style.width = "auto";
//         left.style.padding = "0";
//         left.style.marginLeft = "-10%"

//         let image = document.querySelector("#header_left img");
//         image.style.width = "150px"
//     }
//     else{
//         head.style.position = "relative"
//         head.innerHTML = "";
//         head.innerHTML = header();

//         let shape = document.getElementById("shape");
//         shape.style.borderTop = "110px solid #B5876D";
//         shape.style.borderLeft = "110px solid #B5876D";
//         shape.style.borderRadius = "110px solid transparent";
//         shape.style.borderBottom = "0px solid transparent";

//         let tempHead = document.getElementById("head");
//         tempHead.style.justifyContent = "space-between";
//         tempHead.style.backgroundColor = "rgba(51, 50, 50, 0.5)"

//         let left = document.getElementById("header_left");
//         left.style.width = "30%";
//         left.style.padding = "2%";
//         left.style.marginLeft = "0"
//     }
// }

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