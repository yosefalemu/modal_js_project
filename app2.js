const btn_open = document.querySelector(".btn-modal");
const btn_close = document.querySelector(".close-btn");
const back_page = document.querySelector(".modal-overlay");

btn_open.addEventListener("click", function(){
    back_page.classList.toggle("show-modal-overlay");
});
btn_close.addEventListener("click", function(){
    back_page.classList.toggle("show-modal-overlay");
});