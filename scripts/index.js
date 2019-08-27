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
  }
}
