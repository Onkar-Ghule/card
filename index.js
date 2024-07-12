let container = document.querySelector('.container');
let div = document.createElement("div");
div.className = "card";
container.appendChild(div);
let div1 = document.createElement("div");
div1.className = "upper";
div.appendChild(div1);
let image = document.createElement("img");
image.src = "image.jpeg"; // Replace with your actual image path
image.alt = "not load";
div1.appendChild(image);
let lower=document.createElement("div")
lower.className="lower";
div.appendChild(lower);
let h1=document.createElement("h1")
h1.innerText="prem shanai";
lower.appendChild(h1);
let h3=document.createElement("h3")
h3.innerText="web developer";
lower.appendChild(h3);
for(let i=0;i<5;i++)
{
    let i=document.createElement("i")
    i.className="ri-star-fill"
    lower.appendChild(i);
}
let button=document.createElement("div");
button.className="buttons"
lower.appendChild(button)
let button1=document.createElement("button")
button1.innerText="About Me"
button.appendChild(button1)
let button2=document.createElement("button")
button2.innerText="hire me"
button.appendChild(button2)