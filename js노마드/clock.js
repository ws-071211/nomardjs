const clock = document.querySelector("h2#clock");

function saytime(){
    const date = new Date();
    const hours =   String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
saytime();
setInterval(saytime,1000);