// content.js
// Author:
// Author URI: https://github.com/jungchanSon
// Author Github URI: https://www.github.com/jungchanSon
// Project Repository URI: https://github.com/jungchanSon/
// License: MIT



const outBtn1 = document.querySelector(".out")
const outBtn2 = document.querySelector("#checkOut")

const timeDiv = document.createElement("span")

if(outBtn1 != null) 
    outBtn1.appendChild(timeDiv)
if(outBtn2 != null) 
    outBtn2.appendChild(timeDiv)

setInterval(() => {
    const time = new Date().getHours() + ":" + new Date().getMinutes() + ":" +new Date().getSeconds()+ ":" +new Date().getTime()%1000 ;
    timeDiv.innerHTML = time;
}, 100)
