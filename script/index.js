

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

