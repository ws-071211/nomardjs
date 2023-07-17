const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function Mousehere(){
    title.innerText = "here";
}

function Mouseclick(){
    title.innerText = "click";
}

function Mouseleave(){
    title.innerText = "leave"
}

title.addEventListener("click",Mouseclick);
title.addEventListener("mouseenter",Mousehere);
title.addEventListener("mouseleave",Mouseleave);