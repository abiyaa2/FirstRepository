console.log("Hello");

const addToList = () =>
    {
        let textvalue= document.getElementById("textInput").value;
        console.log(textvalue.toUpperCase()); 
        let n = textvalue.toUpperCase();
        let list = document.getElementById("list");
        let html =  `<li>${n}</li>`;
        list.innerHTML += html;
    
    };

//addEventListerner (click)
let btn = document.getElementById("btn");
btn.addEventListener("click", addToList);
//removeEventListener
btn.removeEventListener("click",addToList);

//EventListerners Methods:
let p1=document.getElementById("div1");
let p2=document.getElementById("div2");

p1.addEventListener("click",colorChange);
function colorChange()
{
    p2.style.backgroundColor="yellow";
};

// mouseover
p1.addEventListener("mouseover",colorChange);
function colorChange()
{
    p2.style.backgroundColor="yellow";
};

p1.addEventListener("mouseover",mouseEnter);
p1.addEventListener("mouseout",mouseLeave);
function mouseEnter()
{
    p2.style.backgroundColor="yellow";
    // p2.textContent="Hello!"
};
function mouseLeave()
{
    p2.style.backgroundColor="aqua";
};
let btn1 =document.getElementById("s");
btn.addEventListener("mouseout",mouseOut); 
function mouseOut()
{
    btn1.textContent += "MouseOut";
    console.log("MouseOut");
};

//TimeOut and Interval
setTimeout(()=>{
    alert("Hi");
    console.log("Abinaya");
},2000);
 

setInterval(()=>{
console.log("Inso");
}, 3000);


let count=0;
let counterElement = document.getElementById("counter");
let CountInterval = setInterval(() => {
  count = count+1;
  counterElement.textContent= `Number :${count}`;
}, 3000);

const stopCounter =()=>
    {
        clearInterval(CountInterval);
    }; 


let stopC = document.getElementById("stop");
stopC.addEventListener("click",stopCounter); 

//Clock

// let hh = document.getElementById("hours");
// let mm = document.getElementById("minutes");
// let ss = document.getElementById("seconds");
// let ap = document.getElementById("ampm");


// // let dateTime = new Date();
// function displayTime()
// {
//  let dateTime = new Date();
//  let hr= dateTime.getHours();
//  let min = dateTime.getMinutes();
//  let sec= dateTime.getSeconds();
//  hh.innerHTML = hr;
//  mm.innerHTML = min;
//  ss.innerHTML = sec;
//  if(hr>12)
//  {
//     ap.innerHTML= "PM";
//  }
//  else{
//     ap.innerHTML = "AM";
//  }

// };
// setInterval(() => {
//     displayTime();
// }, 1000);