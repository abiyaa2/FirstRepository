console.log("Hello World");

// Calculate the factorial of a number. Write a JavaScript program that calculates the factorial of a number using a do-while loop.

var num = 4;
var i = 1;
var fact = 1;

do {
  fact = fact * i;
  i++;
} while (i <= num);
console.log(`The factorial of ${num} is ${fact}`);

//Ternary Operator
// Use a ternary operator to find the largest of three numbers.
// Write a JavaScript program that takes three numbers as input and finds the largest using a ternary operator.

var a = 150;
var b = 500;
var c = 1100;
var largest = a >= b && a >= c ? a : b >= a && b >= c ? b : c;
console.log(`The largest Number is ${largest}`);

// For reference to use condt.
if (a >= b && a >= c) {
  console.log(a);
} else if (b >= c && b >= a) {
  console.log(b);
} else {
  console.log(c);
}

// Check if a number is prime.
// Write a JavaScript program that checks if a number is prime using a for loop.
const primenumber = (num) =>
{
    let isprime = true;
    if(num>1)
    {
        for(let i=2;i<num;i++)
        {
            if(num % i == 0)
            {
                isprime = false;
                break;
            }
        }
        if(isprime)
        {
            console.log(`The given number ${num} is prime number`);
        
        } 
        else{
            console.log(`The given number ${num} is not a prime number`);
        }
    }else{
        console.log("Not a Valid Input");
    }
};
primenumber(5);
primenumber(10);


// Calculate the average of three numbers.
// Write a JavaScript program that takes three numbers as input [100, 200, 300 ] and calculates their average using a while loop.
// var s = [100,200,300];
// var average;

// for (let k = 0; k < a.length; k++)
//     {
//         s = s + s[k];
//         average = s / s.length;
//         console.log(`The average is ${average}`);
//     }


// var a =[100,200,300];
// var sum=0;
// var average;
// let k=0;
// while(k <= a.length)
// {
//     sum=sum+ a[k];
//     k++;
// }
// average = sum/a.length;


const updateParagraph = () => 
{
    document.getElementById("para1").textContent = "Button Clicked!";
};
// updateParagraph();

let counter=0;
const IncreCounter = () =>
{
    document.getElementById("count").textContent = counter+=1;

};

const Counter = () =>
{
    document.getElementById("count").textContent = "count" ;
};

const addToList = () =>
{
    let textvalue= document.getElementById("textInput").value;
    console.log(textvalue.toUpperCase()); 
    let n = textvalue.toUpperCase();
    let list = document.getElementById("list");
    let html =  `<li>${n}</li>`;
    list.innerHTML += html;

};


// const imgList = ["img1","img2","img3","img4"];

//     for(let i=0;i< imgList.length; i--)
//     {
//         //prev button
//     }
//     for(let i=0 ; i< imgList.length; i++)
//     {
//         //next button
//     }

    // var dm = document.getElementById("darkMode");

    // dm.addEventListener("click", darkMode);
    // const darkMode = () => 
    //     {
    //       darkMode.style.backgroundColor="black";
    //       darkMode.style.color="white";
    //     };
    // darkMode();

    // function darkMode() {
    //     var element = document.body;
    //     element.classList.toggle("darkmode");
    //     darkMode.addEventListener("click",)
    //  }



var x = document.getElementById("drk");
var y = document.getElementById("body");
x.addEventListener("click", darkMode);
function darkMode()
{   
    y.style.backgroundColor="black";
    y.style.color="white";
    // x.style.backgroundColor="black";
    // x.style.color="white";
}




