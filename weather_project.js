let a=document.getElementById("gt1");
a.setAttribute("onclick","getthing()");
function getthing(){
    var d=prompt('Please Enter your City Name');
    const ar=document.getElementById("ar1");
    const bg=document.getElementById("area1");
    bg.style.height="620px";
    const zameen=document.getElementById("area3");
    const bigha=document.getElementById("sta1");
    const fut=document.getElementById("gt1");
    zameen.removeChild(fut);
    zameen.removeChild(bigha);
    
    let city=document.createElement("textnode");
    ar.appendChild(city);
    city.setAttribute("id","n1");
    
    let weth=fetch(`https://goweather.herokuapp.com/weather/${d}`);
    weth.then((value)=>{
        return value.json();
    }).then((value1)=>{
       console.log(value1);
       let tab="<h2>Here is the result: </h2>";
       tab=tab+"<p><h2>"+value1.description+"<br></h2></p>";
       let c1=document.getElementById("n1");
       c1.innerHTML=tab;
       c1.style.color="Orange";
       c1.style.fontVariant="small-caps";
       c1.style.position="relative";
       c1.style.top="0px";
       c1.style.left="-120px";
       ar.appendChild(c1);
       console.log(c1);
       let grd=document.createElement("div");
       let container=document.createElement("div");
       container.setAttribute("id","cont");
       grd.appendChild(container);
       console.log(container);
       let ilaka=document.getElementById("area2");
       ilaka.appendChild(grd);
       grd.style.position="relative";
       grd.style.top="180px";
       grd.style.left="-60px";
       zameen.appendChild(grd);
       let a1=document.createElement("div");
       a1.setAttribute("class","box box1");
       let b1=document.createElement("div");
       b1.setAttribute("class","box box2");
       let d1=document.createElement("div");
       d1.setAttribute("class","box box3");
       container.appendChild(a1);
       container.appendChild(b1);
       container.appendChild(d1);
       let tab1="";
       const d=new Date();
       const e1=d.getDate();
       var mon1 = d.toLocaleString('default', { month: 'long' });
       tab1=tab1+"<h4>Today<br>Date: "+mon1+" "+e1+"<br>Temperature: "+value1.forecast[0].temperature+"<br> Wind: "+
               value1.forecast[0].wind+"</h4>";
       const t1=document.getElementsByClassName("box");
       t1[0].innerHTML=tab1;
       const x=new Date("May 8");
       const e2=d.getDate()+1;
       let tab2="";
       tab2=tab2+"<h4>Tomorrow<br> Date: "+mon1+" "+e2+"<br>Temperature: "+value1.forecast[1].temperature+"<br> Wind: "+value1.forecast[1].wind+"</h4>";
       t1[1].innerHTML=tab2;
       const y=new Date("May 9");
       const e3=d.getDate()+2;
       let tab3="";
       tab3=tab3+"<h4>Day After Tomorrow<br> Date: "+mon1+" "+e3+"<br>Temperature: "+value1.forecast[2].temperature+"<br> Wind: "+value1.forecast[2].wind+"</h4>";
       t1[2].innerHTML=tab3;
       const bo=document.getElementsByClassName("box");
       container.style.display="flex";
       container.style.justifyContent="space-evenly";
       container.style.gap="5px";
    
        a1.style.display="inline-block";
        a1.style.border="solid black: 5px";
        a1.backgroundColor="Orange";
        a1.fontVariant="small-caps";
        b1.style.display="inline-block";
        b1.style.border="solid black: 5px";
        b1.backgroundColor="Orange";
        b1.fontVariant="small-caps";
        d1.style.display="inline-block";
        d1.style.border="solid black: 5px";
        d1.backgroundColor="Orange";
        d1.fontVariant="small-caps";
    
    
       console.log(a1);
       console.log(b1);
       console.log(d1);

    }).catch((error)=>{
         const er=document.createElement("div");
         ar.appendChild(er);
         console.log(er);
         er.setAttribute("id","er1");
         const er2=document.getElementById("er1");
         let tab_e="";
         tab_e=tab_e+"<h2>"+error+"!!!<br><b>Try Again</b> after some time</h2>";
         er2.innerHTML=tab_e;
         er2.style.color="Red";
         er2.style.backgroundColor="Black";
         er.style.position="relative";
         er.style.position="100px";
         er.style.width="650px"
         bg.style.height="500px";
         er.style.borderRadius="20px";




    })
}



    
    
