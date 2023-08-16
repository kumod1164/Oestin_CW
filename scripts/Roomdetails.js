import header from"../components/header.js"

document.getElementById("header").innerHTML=header();

import footer from"../components/footer.js"

document.getElementById("footer").innerHTML=footer();



// const parentcontainer=document.getElementById("aboutproperty");
// parentcontainer.addEventListener("click",event=>{
//     const current =event.target
//     const isReadMoreBtn=current.className.includes("apreadmore")
//     if(!isReadMoreBtn) return ;
//     const currentText= event.target.parentNode.querySelector("apspan")

//     currentText.classList.toggle("apspan--show");
//     current.textContent=current.textContent.includes("Read more") ? "Read Less..." : "Read More..."
// })


let apspan=document.getElementById("apspan");
// apspan.style.display="none";
let apbtn=document.getElementById("apreadmore")

apbtn.addEventListener("click",function(){
    // if(apbtn.textContent=="Read More..."){
    //     console.log(apbtn.innerText)
    //     apspan.innr="Inline";
    //     apbtn.innerText="Read Less..."
    // }else{
        
    // }


    if(apbtn.innerText=="Read More..."){
    apspan.innerText=`Private bathrooms with separate bathtubs and showers feature deep soaking bathtubs and designer toiletries. Conveniences include phones, as well as safes and desks.Attractions: Distances are displayed to the nearest 0.1 mile and kilometer.`;

    apbtn.innerText="Read Less..."
}else{
    apspan.innerText=null;
    apbtn.innerText="Read More..."
}

})


const swiper = new Swiper('.swiper', {
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },
    loop: true,
  
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


let prodData=JSON.parse(localStorage.getItem("prodData"))

let {area,bed,description,image,name,price,view}=prodData;

// document.querySelector("#rdimg1 >img").src=image;
document.getElementById("firstimg").src=image

document.querySelector("#pricetext >h2").innerText= price;

document.querySelector("#roomdetailname").innerText= name;

document.querySelector("#roomdetaildescri >p").innerText=description;

document.querySelector("#area >span").innerText=area;

document.querySelector("#bedtype >span").innerText=bed;

document.querySelector("#view >span").innerText=view;

let cart=[];
let bookbtn=document.getElementById("pricebox")
bookbtn.addEventListener("click",function(){
    cart.push(prodData);
    localStorage.setItem("cart",JSON.stringify(cart))
    window.href="#";
    // console.log(cart)
})

