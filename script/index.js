

// SLIDER SECTION

let slider = document.querySelector("#slider>img");

console.log(slider)
console.log(slider.alt)

let temp = document.createElement("img");
temp.setAttribute("src", "./images/slider_image_1.jpg");
temp.setAttribute("alt", "slider_image_1")

let temp1 = document.createElement("img");
temp1.setAttribute("src", "./images/slider_image_2.jpg");
temp1.setAttribute("alt", "slider_image_2")

console.log(temp1);


let btn = document.querySelectorAll(".nav_btn");
for(let i=0; i<btn.length; i++){
    btn[i].addEventListener("click", () => {
        let slider = document.querySelector("#slider>img");
    
        if(slider.alt == "slider_image_1"){
            slider.setAttribute("src", "./images/slider_image_2.jpg")
            slider.setAttribute("alt", "slider_image_2")
        }
        else if(slider.alt == "slider_image_2"){
            slider.setAttribute("src", "./images/slider_image_1.jpg")
            slider.setAttribute("alt", "slider_image_1")
        }
    })
}

// Slider Function End

// SERVICES SECTION STARTS

let arr = document.querySelectorAll("#about_services>div>div:nth-child(2)>div:first-child>div");
console.log(arr);

for(let i=0; i<arr.length; i++){
    arr[i].addEventListener("click", () => {
        console.log("Working");
        console.log(arr[i]);
        arr[i].style.background = "#b5876d";
        arr[i].style.color = "white";
        let temp = arr[i].childNodes[1].innerHTML
        console.log(temp)
        
    })
}

// SERVICES SECTION ENDS