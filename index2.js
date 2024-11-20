// let div=document.querySelector("div");
// console.log(div);

// let id=div.getAttribute("id");
// console.log(id);

// let id1=div.getAttribute("name");
// console.log(id1);

// let para=document.querySelector("p");
// console.log(para.getAttribute("class"));

// let para=document.querySelector("p");
// console.log(para.setAttribute("class","newclass"));


// let div=document.querySelector("div");
// console.log(div);

// div.style.backgroundColor="yellow";
// div.style.fontSize = "35px";

// div.innerText="hello!";
// div.style.visibility="hidden";

// let newbtn = document.createElement("Button");
// console.log(newbtn);
// newbtn.innerText="click me!"
// console.log(newbtn);


// let div=document.querySelector("div");
// console.log(div);

// div.append(newbtn);

// div.prepend(newbtn);
//div.before(newbtn);
// div.after(newbtn);


// let newhead = document.createElement("h1");
// newhead.innerHTML="<i> hi i am new</i>"

// document.querySelector("body").prepend(newhead);

// let para=document.querySelector("p");
// para.remove();

// newhead.remove();

 //let btn1=document.querySelector("#btn1");
// btn1.onclick = (e) => {
// console.log(e);
    // console.log("btn1 was clcked");
    // let a=25;
    // a++;
    // console.log(a);
// } 

// btn1.addEventListener("click", () => {
//     console.log("btn1was clicked - handler1");
// });

// btn1.addEventListener("click", (e) => {
//     console.log("btn1was clicked - handler 2");
// console.log(e);
// });

// btn1.addEventListener("click", () => {
//     console.log("btn1was clicked - handler3");
// });

// const handler3 = () =>{
//     console.log("btn1was clicked - handler-3");
// } ;

// btn1.addEventListener("click", (e) => {
//     console.log("btn1was clicked - handler-4");
// console.log(e);
// });

// btn1.removeEventListener("click",handler3);

//callback function should be same

let btn2=document.querySelector("#btn2");

let currmode = "light" ; //dark

btn2.addEventListener("click", () =>{
    if(currmode === "light"){
        currmode = "dark";
        document.querySelector("body").style.backgroundColor="black";
    }else{
        currmode="light";
        document.querySelector("body").style.backgroundColor="white";

    }
    console.log(currmode)
})









