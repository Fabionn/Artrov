document.addEventListener("DOMContentLoaded", function(){
   // add padding top to show content behind navbar
   navbar_height = document.querySelector('.navbar.fixed-top').offsetHeight;
   document.body.style.paddingTop = navbar_height + 'px';
});

if (window.matchMedia("(max-width: 768px)").matches) {
   footer_cols = document.querySelector("footer").querySelectorAll(".d-flex")
   footer_cols.forEach(c => {
      c.classList.remove("flex-column")
      c.classList.add("flex-row")
      c.classList.add("my-3")
   })
}

if (window.matchMedia("(min-width: 768px)").matches) {
   footer_cols = document.querySelector("footer").querySelectorAll(".d-flex")
   footer_cols.forEach(c => {
      c.classList.remove("flex-row")
      c.classList.remove("my-3")
      c.classList.add("flex-column")
   })
}