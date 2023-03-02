const btn_open = document.querySelector(".btn-modal");
const btn_close = document.querySelector(".close-btn");
const front_page = document.querySelector(".hero");
const back_page = document.querySelector(".modal-overlay");

window.onload = function(){
    front_page.style.zIndex = "1";
}
btn_open.addEventListener("click", function(){
    front_page.style.zIndex = "0";
    back_page.style.zIndex = "1";
});

btn_close.addEventListener("click", function(){
    back_page.style.zIndex = "0";
    front_page.style.zIndex = "1";
});

