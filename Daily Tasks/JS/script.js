// var num = 10;
// let num1 = 100;
// console.log(num);
// console.log(num1);
// var fname = "Abinaya Annamalai";
// console.log("My name is ", fname);
// const gender = "Female";
// console.log(gender);

// var a = 654;
// var b = 987;
// // var total = a*b;
// console.log(a * b);
// var total1 = a + b;
// console.log(total1);

// var age = 18;
// if (age >= 18) {
//   console.log("Eligible voting");
// } else {
//   console.log("not eligible");
// }

// for (i = 0; i <= 10; i++) {
//   console.log(`The current value is ${i}`);
// }

// const value = -12;
// if (value < 0) {
//   console.log(`Value of ${value} is negative`);
// } else if (value > 0) {
//   console.log(`value of ${value} is positive`);
// } else
// {

// }

// var ap;
// console.log(ap);
// var c=null;
// console.log(c);



// //for of loop:
// var arr = [23, 56, 78, 49, 60, 87, 44, 63, 84];

// for (let num of arr) {
//   if (num >= 50) {
//     console.log(num);
//   }
// }

// var s = "JAVASCRIPT";
// for (let letter of s) {
//   console.log(letter);
// }

// //while loop:
// let j = 1;

// while (j <= 10) {
//   console.log(`series is num is${j}`);
//   j++;
// }

// let l = 1;
// do {
//   console.log(`no is ${l}`);
//   l++;
// } while (l <= 10);

// //switch case:
// let day = 3;
// switch (day) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednesday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
// default:
//     console.log("not valid");
// }

// for (k = 0; k <= 10; k++) {
//   if (k == 5) {
//     break;
//   }

//   console.log(`numbers are ${k}`);
// }

// for (k = 0; k <= 10; k++) {
//   if (k == 5) {
//     continue;
//   }

//   console.log(`numbers are ${k}`);
// }

// // 13th
// // FUNCTIONS

// //-> Funct. decl:

// function getAge(age) // parameter
// {
//   // let age = 80;
//   if(age <= 20)
//   {
//     console.log("Child and Teenage");
//   }
//   else if(age>20 && age<=30 )
//   {
//     console.log("Adult");
//   }
//   else if(age>30 && age<=60)
//   {
//     console.log("elderly")
//   }
//   else{
//     console.log("seniorcitizen");
//   }
// }
// getAge(25);//funct.argument

// //funct. expression:

// const getAge1 = function(age)
// {
//   if(age <= 20)
//     {
//       console.log("Child and Teenage");
//     }
//     else if(age>20 && age<=30 )
//     {
//       console.log("Adult");
//     }
//     else if(age>30 && age<=60)
//     {
//       console.log("elderly")
//     }
//     else{
//       console.log("seniorcitizen");
//     }
//   }
//   getAge1(25);

//   //Arrow Function:

//   const getAge2 = (age) =>
//   {
//     if(age <= 20)
//       {
//         console.log("Child and Teenage");
//       }
//       else if(age>20 && age<=30 )
//       {
//         console.log("Adult");
//       }
//       else if(age>30 && age<=60)
//       {
//         console.log("elderly")
//       }
//       else{
//         console.log("seniorcitizen");
//       }

//   }
// getAge2(90); 

// //DOM - Document Object Model:
// // Structured format 
// //can able to change elements of webpage using JS.

// //methods:

// // -> getElementByID (only Id and single Id for a page)
// const displayText = () =>{
// let abc = document.getElementById ("text");
// console.log(abc);
// };
// displayText();

// // const displayText1 = () =>{
// //   let abcd = document.getElementById ("text") .textContent;
// //   console.log(abcd);
// //   };
// //   displayText1();


// //-> getElementByClass (Only Class and returns array of element, we can use how much cls name we want)

// const displayClass =() =>
// {
//   let cl = document.getElementsByClassName("sampleclass");
//   console.log(cl);
//   for(let element of cl )
//   {
//     console.log(element);
//     console.log(element.textContent);
//   }
  
// };
// displayClass();

// //-> queryselector( can select both class and ID, Returns single element)

// const displayQuery =() =>
// {
//   let cl1 = document.querySelector ("#text");
//   console.log(cl1);
// };
// displayQuery();

// //-> queryselectorAll (return arraay of elements)

// const displayQueryAll =() =>
//   {
//     let cl2 = document.querySelectorAll (".sampleclass");
//     console.log(cl2);
//     for(let element of cl2)
//     {
//       console.log(element);
//     }
//   };
//   displayQueryAll();


// //->getElementsByTagName (can select Tags, return Array of elements)

// const displayTagName = () =>
// {
//   let tag = document.getElementsByTagName ("h1");
//   console.log(tag);
  

//   let tag1 = document.getElementsByTagName ("h2");
//   console.log(tag1);
// };
// displayTagName();

// //update Headname:
// const updateID =() =>
// {
//   document.getElementById("update").textContent = "JavaScript DOM";
// };
// // updateID();

// //update class 
// const updateClass =() => 
// {
//   document.getElementsByClassName("updatecl").textContent = "Function is used to perform a specific task";
// };

//Form Validation using Events.

// const submit = document.getElementById(`submit`);

const isPageLoad= () =>
{
  console.log("Page Loaded");
};


const typeSubmit =(event)=>
  {
    event.preventDefault();
    // console.log("Button Clicked");
  }

let n = document.getElementById(`name`).value;
let pass = document.getElementById(`password`).value;

if(n=="Abinaya" && password == 123)
{
  console.log("Login success");
}
else{
  console.log("login Failed");
};


// };

// document.addEventListener('DOMContentLoaded', () => {
//   const dropdownButton = document.getElementById('dropdownButton');
//   const dropdownMenu = document.getElementById('dropdownMenu');

//   // Toggle the dropdown menu
//   dropdownButton.addEventListener('click', () => {
//       dropdownMenu.classList.toggle('show');
//   });

//   // Close the dropdown menu if the user clicks outside of it
//   document.addEventListener('click', (event) => {
//       if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
//           dropdownMenu.classList.remove('show');
//       }
//   });
// });

// document.addEventListener('DOMContentLoaded', () => {
//   const boxes = document.querySelectorAll('.box');

//   boxes.forEach(box => {
//       box.addEventListener('mouseover', () => {
//           box.style.backgroundColor = '#0056b3';
//           box.style.color = '#ffffff';
//           box.style.transform = 'scale(1.1)';
//           box.style.boxShadow = '0px 8px 16px rgba(0,0,0,0.2)';
//       });

//       box.addEventListener('mouseout', () => {
//           box.style.backgroundColor = '#007bff';
//           box.style.color = 'white';
//           box.style.transform = 'scale(1)';
//           box.style.boxShadow = 'none';
//       });
//   });
// });

