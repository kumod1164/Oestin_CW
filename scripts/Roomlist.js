
async function fetching(){
    
    
    let res = await fetch("http://localhost:3000/rooms")
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
let d =fetching();
// console.log("Moin")
// console.log(data)


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

        bt.append(btimg,bts);

        let v=document.createElement("div")
        v.setAttribute("id","view");

        let vimg=document.createElement("img")
        vimg.setAttribute("src","https://promos.makemytrip.com/Hotels_product/Hotel_SR/Android/drawable-hdpi/view.png");

        let vs=document.createElement("span");
        vs.innerText=e.view;

        v.append(vimg,vs);

        let w=document.createElement("div")
        w.setAttribute("id","view");

        let wimg=document.createElement("img")
        wimg.setAttribute("src","https://www.tajhotels.com/content/dam/tajhotels/icons/room-property/wifi.png");

        let ws=document.createElement("span");
        ws.innerText="Inclusive Wifi";

        w.append(wimg,ws);

        f.append(area,bt,v,w)

        rdescription.append(roomname ,p,f);
        room.append(roomimg,rdescription);
        roomrow.append(room)

    })

    let rooma=document.getElementById("room")
    rooma.addEventListener("click",function(){
        // console.log("Moin")
        location.href="https://www.tajhotels.com/en-in/taj/taj-mahal-palace-mumbai/rooms-and-suites/?room-name=Luxury%20Grande%20Room%20City%20View"
    })


}
