let zoomINbtn = document.querySelector(".zoom-in-btn");
let zoomOutbtn = document.querySelector(".zoom-out-btn");
let img = document.querySelector("#image");

function zoomIn() {
    img.width += 100;
}


function zoomOut() {
    if (img.width > 100) {
        img.width -= 100;
    }
}

zoomINbtn.addEventListener("click", zoomIn);
zoomOutbtn.addEventListener("click", zoomOut);