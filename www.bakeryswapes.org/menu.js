const menu = document.querySelectorAll(".menu");
const imgRoot = document.querySelector(".imgRoot");
const navWidth = document.querySelector(".bTiWHI");
const lol = document.querySelector(".lol");

lol.style.content = "none";
imgRoot.addEventListener("click", () => {
  menu.forEach((i) => {
    i.classList.toggle("visible");
  });
  if (lol.classList.contains("ACTIVENAV")) {
    lol.classList.remove("ACTIVENAV");
    navWidth.style.width = "0px";
  } else {
    lol.classList.add("ACTIVENAV");
    navWidth.style.width = "268px";
  }
});
