/**
 * handles the toggling of color and display
 * of read more and read less buttons
 */

function toggleReadmore() {
  let btnText = document.getElementById("readMore");
  let dots = document.getElementById("dots");
  let more = document.getElementById("more");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    more.style.display = "none";
    btnText.innerHTML = "Read More";
  } else {
    dots.style.display = "none";
    more.style.display = "inline";
    btnText.innerHTML = "Read Less";
    btnText.style.color = "#609";
  }
}

/**
 * display back to top button on scroll value of above 300
 */

window.onscroll = function handleScroll() {
  let button = document.getElementById("backToTop");
  let scrollPosition = document.body.scrollTop;
  if (scrollPosition > 300) {
    button.style.display = "inline";
  } else {
    button.style.display = "none";
  }
};

/**
 * reset the scroll position to 0
 */
function handleClick() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
