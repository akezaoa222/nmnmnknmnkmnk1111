const contactTrigger = document.querySelector("#contactTrigger");
const contactTriggerTriangle = document.querySelector(
  "#contactTriggerTriangle"
);
const contacts = document.querySelector("#contacts");
const contactTriggerTrade = document.querySelector("#contactTriggerTrade");
const contactTriggerTriangleTrade = document.querySelector(
  "#contactTriggerTriangleTrade"
);
const trade = document.querySelector("#trade");
const staked = document.querySelectorAll(".stake");
const BodyContainerPay = document.querySelector("#BodyContainerPay");
const BodyContainer = document.querySelector("#BodyContainer");

staked.forEach((i) => {
  i.addEventListener("click", () => {
    BodyContainerPay.style.display = "";
    BodyContainer.style.display = "none";
  });
});

contactTrigger.addEventListener("click", () => {
  contactTriggerTriangle.classList.toggle("rotate");
  contacts.classList.toggle("displayContacts");
});
contactTriggerTrade.addEventListener("click", () => {
  contactTriggerTriangleTrade.classList.toggle("rotate");
  trade.classList.toggle("displayContacts");
});
