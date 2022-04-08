const navs = document.querySelectorAll(".navs");

const BAKE = document.querySelector(".BAKE");
const OTHERS = document.querySelector(".OTHERS");
const NFT = document.querySelector(".NFT");
const V1 = document.querySelector(".V1");
const ENDED = document.querySelector(".ENDED");

const clear = () => {
  BAKE.style.display = "none";
  OTHERS.style.display = "none";
  NFT.style.display = "none";
  V1.style.display = "none";
  ENDED.style.display = "none";
};

navs.forEach((i) => {
  i.addEventListener("click", () => {
    navs.forEach((elem) => {
      elem.classList.remove("ACTIVENAV");
    });
    i.classList.add("ACTIVENAV");

    clear();
    if (i.classList.contains("bakeNav")) {
      BAKE.style.display = "";
    } else if (i.classList.contains("othersNav")) {
      OTHERS.style.display = "";
    } else if (i.classList.contains("nftNav")) {
      NFT.style.display = "";
    } else if (i.classList.contains("v1Nav")) {
      V1.style.display = "";
    } else {
      ENDED.style.display = "";
    }
  });
});
