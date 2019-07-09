// window.onscroll = function() {myFunction()};

// let navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// let sticky = navbar.offsetTop;

const myFunction = ((sticky) => {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
});

export { myFunction }