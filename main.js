"use strict";

//Constant & Variabels
const buttons = document.querySelectorAll(".button");
const containers = document.querySelectorAll(".content-container");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const currBut = this.dataset.id;

    //active classes removed from all buttons before adding to clciked button
    buttons.forEach((button) => {
      button.classList.remove("active");
    });

    //adding active class to clciked button
    this.classList.add("active");

    //active classes removed from all container before adding to clciked button
    containers.forEach((container, i) => {
      container.classList.remove("container-active-tab");
    });

    //adding active class to selected content container
    document
      .querySelector(`.container_0${+currBut}`)
      .classList.add("container-active-tab");
  });
});
