// // //1.ways to print in java script 

// // console.log("hello world");
// // alert("me");
// // document.write("this is document write");


// // //2.console api java script

// // console.log("hello world", 4 + 5, "another log");
// // console.warn("this is my warnng");
// // console.error("by mistake error");
// // console.assert(4 == 6);

// // //3.javascript varibles

// // //what sre varibles == container to store data values

// // var number1 = 34;
// // var number2 = 56;
// // console.log(number1+number2);

// // //4. data types in javascript

// // var num1=455;
// // var num2=56.87;

// // console.log(num1);
// // console.log(num2);

// // var str1="this is string";
// // var str2='this is also a string';

// // console.log(str1,str2);

// // //objects
// // var marks ={
// //     ravi:34,
// //     kiran:87,
// //     harry:99.99
// // }
// // console.log(marks)

// // //boolean

// // var a= true;
// // var b= false;

// // console.log(a);
// // console.log(b);


// // var und;
// // console.log(und);

// // var n= null;
// // console.log(n);

//  //at a very high level there are two types of data a types
// //  1.premitive 
// //  2.reference

// //  1datattype(undefined,null,number,string,boolean,symbol )

// var arr = [1,2,3,"aabb",4,5];
// console.log(arr);

// var city={
//     pune:12,
//     mumbai:1,
//     pcmc:14
// }

// console.log(city);

//  var a=36;
//  var b=56;

//  console.log("addition is ",a+b);
//  console.log("addition is ",a*b);
//  console.log("addition is ",a/b);
//  console.log("addition is ",a-b);

//  var c=b; 

//  c += 2;
//  console.log(c);

// var a = 10;
// var b = 20;
// console.log(a == b);
// console.log(a == b);
// console.log(a <= b);
// console.log(a >= b);

// console.log(true && true);
// console.log(true && false);

// console.log(true || true);
// console.log(true && false);

// console.log(!true);

// function avg(a,b){
//     return (a+b)/2;
// }

// c = avg(14, 6) 
// console.log(c);


// conditinals in java script 

//else{
//     var age=33;
// //  if(age>32){
// //     console.log("you are a kids father now");
// //  }
//     //     console.log("ha bache hi ho tum")
//     //  }
    

//  var age=33;
//  if(age>32){
//     console.log("you are a kids father now");
//  }
//  else if(age>22){
//     console.log("bache nhi ho bde hue ho");
//  }
//  else if(age>18){
//     console.log("abhi bache nhi ho tum")
//  }
//  else{
//     console.log("ha bache hi ho tum")
//  }





// function rasna(age){
//     if(age>2){
//         return "you can drink";
//     }
//     else{
//         return "you cannot";
//     }
// }
// var age=1
// a = rasna(age) 
// console.log(a);


//loops in javascript

//for loop

//var arr=[1,2,3,4,5,6];

// console.log(arr);
// for(var i=0; i<arr.length;i++){
//     console.log(arr[i])
// }


//for each loop

// arr.forEach(function(element) {
//     console.log(element)
// })

//while loop

// let j=0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

//do while

// let j=0;

// do{
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length);

//break & continue

// for(var i=0; i<arr.length; i++){
//     if(arr[i]==2){
//         continue;
//     }
//     console.log(arr[i]);
// }

// for(var i=0; i<arr.length; i++){
//     if(arr[i]==2){
//         break;
//     }
//     console.log(arr[i]);
// }

//methods of array

// let my = ["fan","camera" ,1 ,23 ,null ,true];
// console.log(my);
// console.log("array length : "+my.length);
// my.pop();
// console.log(my);
// my.push("saurabh");
// console.log(my);
// my.shift();
// console.log(my);

//methods of string

// let mystring="saurabh is nomadic person";
// console.log(mystring.length);
// console.log(mystring.indexOf("saurabh"));
// console.log(mystring.slice(0,3));
// d = mystring.replace("nomadic", "good");
// d = mystring.replace("nomadic", "good"); 
// console.log(d,mystring);

//dates injavascript

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime()); 
// console.log(myDate.getDay());
// console.log(myDate.getMinutes);
// console.log(myDate.getHours); 

//DOM manipulation

// let m=document.getElementById('click');
// console.log(m);

// let m1=document.getElementsByClassName('container');
// console.log(m1);

// //m1[0].style.background = "yellow";
// m1[0].classList.add("bg-primary")

// m1[1].classList.add("text")

//alert("me");

//document.body.style.background = 'green';

// let a = document.getElementsByClassName("container");
// console.log(a);
// console.dir(a);

// let b = document.getElementsByTagName("p");
// console.log(b);

// let ele=document.querySelectorAll("p");
// console.log(ele);

// let ele1=document.querySelectorAll(".container");
// console.log(ele1);

// let ele3=document.querySelector("#click");
// console.log(ele3);

// let div = document.querySelector("div");
// console.dir(div);


//div.innerHTML
//div.innerText


// arrow functions 

//  function sum(a,b){
//     return a+b;
//  }

//  s=sum(13,15);
//  console.log(s);

Su  


 











 




