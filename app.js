const scottBtn = document.querySelector(".scott-btn");
const swansonBtn = document.querySelector(".swanson-btn");
const scottPic = document.querySelector(".scott-pic");
const textResult = document.getElementById("textId");
const swansonPic = document.querySelector(".swanson-pic");

//IIFE.
(function () {
  // Custom event for Michael Scott.
  scottBtn.addEventListener("click", (event) => {
    scottPic.classList.remove("hidden");
    const scottEvent = new CustomEvent("scottEvent", { detail: scottBtn });
    document.dispatchEvent(scottEvent);
  });

  //Event listerners for custom events.
  document.addEventListener("scottEvent", (event) => {
    scottBtn.classList.add("blue");
    swansonPic.classList.add("hidden");
    swansonBtn.classList.remove("blue");
  });

  document.addEventListener("scottEvent", (event) => {
    textResult.innerText = "That has sort of an oak-y afterbirth.";
  });

  //Ron Swanson cutsom event.
  swansonBtn.addEventListener("click", (event) => {
    swansonPic.classList.remove("hidden");
    const swansonEvent = new CustomEvent("swansonEvent", {
      detail: swansonBtn,
    });
    document.dispatchEvent(swansonEvent);
  });

  //Event listerners for custom events.
  document.addEventListener("swansonEvent", (event) => {
    swansonBtn.classList.add("blue");
    scottPic.classList.add("hidden");
    scottBtn.classList.remove("blue");
  });

  document.addEventListener("swansonEvent", (event) => {
    textResult.innerText =
      "Dear frozen yogurt, you are the celery of desserts. Be ice cream, or be nothing.";
  });
})();
