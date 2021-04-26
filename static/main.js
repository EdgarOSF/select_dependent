const carForm = document.querySelector("#car-form");
const carsDataBox = document.querySelector("#cars-data-box");
const carsInput = document.querySelector("#cars");
const modelsDataBox = document.querySelector("#models-data-box");
const modelInput = document.querySelector("#models");
const modelBox = document.querySelector("#model-text");

const btnBox = document.querySelector("#btn-box");
const alertBox = document.querySelector("#alert-box");

const carText = document.querySelector("#car-text");
const modelText = document.querySelector("#model-text");

const csrf = document.getElementsByName("csrfmiddlewaretoken");

$.ajax({
  type: "GET",
  url: "/cars-json/",
  success: function (response) {
    console.log(response);
    const carsData = response.data;
    carsData.map((item) => {
      const option = document.createElement("div");
      option.textContent = item.name;
      option.setAttribute("class", "item");
      option.setAttribute("data-value", item.name);
      carsDataBox.appendChild(option);
    });
  },
  error: function (error) {
    console.log(error);
  },
});

carsInput.addEventListener("change", (e) => {
  console.log(e.target.value);
  const selectedCar = e.target.value;

  alertBox.innerHTML = "";
  modelsDataBox.innerHTML = "";
  modelBox.textContent = "Choose a model";
  modelBox.classList.add("default");

  $.ajax({
    type: "GET",
    url: `/models-json/${selectedCar}/`,
    success: function (response) {
      console.log(response);
      const modelsData = response.data;
      modelsData.map((item) => {
        const option = document.createElement("div");
        option.textContent = item.name;
        option.setAttribute("class", "item");
        option.setAttribute("data-value", item.model);
        modelsDataBox.appendChild(option);
      });

      modelInput.addEventListener("change", (e) => {
        btnBox.classList.remove("not-visible");
      });
    },
    error: function (error) {
      console.log(error);
    },
  });
});

carForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("sumited");

  $.ajax({
    type: "POST",
    url: "/create-order/",
    data: {
      csrfmiddlewaretoken: csrf[0].value,
      car: carText.textContent,
      model: modelText.textContent,
    },
    success: function (response) {
      console.log(response);
      alertBox.innerHTML = `<div class="ui positive message">                              
                              <div class="header">
                                You are eligible for a reward
                              </div>
                              <p>Saved correctly</p>
                            </div>`;
    },
    error: function (error) {
      console.log(error);
      alertBox.innerHTML = `<div class="ui negative message">                              
                              <div class="header">
                                You are eligible for a reward
                              </div>
                              <p>Something goes wrong</p>
                            </div>`;
    },
  });
});
