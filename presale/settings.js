const dialogBtn = document.querySelector("#open-settings-dialog-button");
const modal = document.querySelector(".sc-hmzhuo");

dialogBtn.addEventListener("click", () => {
  modal.classList.toggle("modals");
});
