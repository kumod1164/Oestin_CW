
async function fetching(){
    
    
    let res = await fetch("http://localhost:3000/rooms?_page=1&_limit=4")
    let result=await res.json();
    // console.log(result);
    
    try{
        // console.log(result);
        appenddata(result);
        // return result;
    }catch(error){
        return error
    }
    
}
fetching();
// console.log("Moin")
// console.log(data)



//Sort by Price


let sp=document.getElementById("sortprice")
sp.addEventListener("change",function(){
    sortcart();
})
async function sortcart(){
    let res;
    if(sp.value=="Low to High"){
        res = await fetch(`http://localhost:3000/rooms?_sort=price&_order=asc&_page=1&_limit=4`)
        
    }else if(sp.value=="High to Low"){
        res = await fetch(`http://localhost:3000/rooms?_sort=price&_order=desc&_page=1&_limit=4`)
    }
    
    
    let result=await res.json();
    // console.log(result);
    
    try{
        // console.log(result);
        appenddata(result);
        return result;
    }catch(error){
        return error
    }
    
}


//filter by View

let sv=document.getElementById("sortview")
sv.addEventListener("change",function(){
    sortview();
})
async function sortview(){
    let res;
    if(sv.value=="Ocean View"){
        res = await fetch(`http://localhost:3000/rooms?view=Ocean`)
        console.log(res)
    }else if(sv.value=="City View"){
        res = await fetch(`http://localhost:3000/rooms?view=City`)
    }
    
    
    let result=await res.json();
    // console.log(result);
    
    try{
        // console.log(result);
        appenddata(result);
        return result;
    }catch(error){
        return error
    }
    
}


//filter by BetType

let fb=document.getElementById("sortbedtype")
fb.addEventListener("change",function(){
    filterbed();
})
async function filterbed(){
    let res;
    if(fb.value=="Single bed"){
        res = await fetch(`http://localhost:3000/rooms?bed=Single`)
        // console.log(res)
    }else if(fb.value=="Double bed"){
        res = await fetch(`http://localhost:3000/rooms?bed=Double`)
    }else if(fb.value=="King bed"){
        res = await fetch(`http://localhost:3000/rooms?bed=King`)
    }
    
    
    let result=await res.json();
    // console.log(result);
    
    try{
        // console.log(result);
        appenddata(result);
        return result;
    }catch(error){
        return error
    }
    
}


//Append

function appenddata(data){
    let roomrow=document.getElementById("roomrow")
    roomrow.innerHTML=null;
    console.log(data)
    data.forEach(function(e){
    
        // console.log("Moin")
        
        // let rooma=document.createElement("a")
        // rooma.setAttribute("href","https://www.tajhotels.com/en-in/taj/taj-mahal-palace-mumbai/rooms-and-suites/?room-name=Luxury%20Grande%20Room%20City%20View");
        

        let room=document.createElement("div")
        room.setAttribute("id","room");

        // rooma.innerHTML=room;
        // rooma.append(room);

        let roomimg=document.createElement("div")
        roomimg.setAttribute("id","roomimg");

        let rimg=document.createElement("img")
        rimg.setAttribute("src",e.image);
        // console.log(e.image)
        roomimg.append(rimg)
        // room.append(roomimg)

        let rdescription=document.createElement("div")
        rdescription.setAttribute("id","rdescription");

        let roomname=document.createElement("div")
        roomname.setAttribute("id","roomname");

        let nh2=document.createElement("h2")
        nh2.innerText=e.name;

        let np =document.createElement("p")
        np.innerText=e.description;

        roomname.append(nh2,np)

        let p=document.createElement("div")
        p.setAttribute("id","price");
        
        let ph2=document.createElement("h2")
        ph2.innerText= e.price;

        let pp =document.createElement("p")
        pp.innerText="Starting Rate/ Per Night";

        p.append(ph2,pp);
        // rdescription.append(roomname)

        let f=document.createElement("div")
        f.setAttribute("id","features");

        let area=document.createElement("div")
        area.setAttribute("id","area");

        let aimg=document.createElement("img")
        aimg.setAttribute("src","https://www.tajhotels.com/content/dam/tajhotels/icons/room-property/area.png");

        let as=document.createElement("span");
        as.innerText=e.area;

        area.append(aimg,as);

        let bt=document.createElement("div")
        bt.setAttribute("id","bedtype");

        let btimg=document.createElement("img")
        btimg.setAttribute("src","https://www.tajhotels.com/content/dam/tajhotels/icons/room-property/bedType.png");

        let bts=document.createElement("span");
        bts.innerText=e.bed;

        let btstype=document.createElement("span");
        btstype.innerText="Bed";

        bt.append(btimg,bts,btstype);

        let v=document.createElement("div")
        v.setAttribute("id","view");

        let vimg=document.createElement("img")
        vimg.setAttribute("src","https://promos.makemytrip.com/Hotels_product/Hotel_SR/Android/drawable-hdpi/view.png");

        let vs=document.createElement("span");
        vs.innerText=e.view;

        let vsview=document.createElement("span");
        vsview.innerText="View";

        v.append(vimg,vs,vsview);

        let w=document.createElement("div")
        w.setAttribute("id","view");

        let wimg=document.createElement("img")
        wimg.setAttribute("src","https://www.tajhotels.com/content/dam/tajhotels/icons/room-property/wifi.png");

        let ws=document.createElement("span");
        ws.innerText="Inclusive Wifi";
        
        // let butt=document.createElement("button");
        // butt.setAttribute("id","detailbutt");
        // butt.innerText="Details"


        w.append(wimg,ws);

        f.append(area,bt,v,w)

        rdescription.append(roomname ,p,f);
        room.append(roomimg,rdescription);
        roomrow.append(room)

        
        

    })

    let rooma=document.querySelectorAll("#room")
    for(let i of rooma){

        i.addEventListener("click",function(){
                // console.log("Moin")
            location.href="../html/Roomdetails.html"
        })

    }

    

    // let pagecartnumbers=data.length;

    // let no_of_pages= Math.ceil(pagecartnumbers/5);

    // for(let i=1;i<=no_of_pages;i++){
    //     let pageno=document.createElement("a")
    //     pageno.s
    // }

}

