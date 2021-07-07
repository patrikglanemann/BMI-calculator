const bmiForm = document.querySelector(".bmiForm");
const bmiList = document.querySelector(".bmi-list");

bmiForm.btn__calc.addEventListener("click", () => {
  const height = bmiForm.height.value;
  const weight = bmiForm.weight.value;
  const bmi = (weight / height ** 2) * 10000;

  //Create li item
  const bmiListElement = document.createElement("li");
  bmiListElement.classList.add("bmi-list__item");

  //Create output field for the name
  const nameField = document.createElement("p");
  nameField.textContent = bmiForm.name.value;

  //Create output field for the BMI value
  const bmiField = document.createElement("p");
  bmiField.textContent = bmi.toFixed(2);

  //Create output field for descriptive BMI in text form
  //and chane tex content and colour accordingly
  const descriptionField = document.createElement("p");
  if (bmi < 18.5) {
    descriptionField.textContent = "under-weight";
    descriptionField.style.color = "red";
  } else if (bmi >= 18.5 && bmi < 25) {
    descriptionField.textContent = "normal";
    descriptionField.style.color = "green";
  } else if (bmi >= 25 && bmi < 30) {
    descriptionField.textContent = "over-weight";
    descriptionField.style.color = "orange";
  } else {
    //bmi >= 30
    descriptionField.textContent = "obese";
    descriptionField.style.color = "red";
  }

  //Create remove button with event listener
  const buttonField = document.createElement("button");
  buttonField.classList.add("btn-remove");
  buttonField.textContent = "Delete";
  buttonField.addEventListener("click", () => {
    bmiListElement.remove();
  });

  //Put everything together
  bmiListElement.append(nameField);
  bmiListElement.append(bmiField);
  bmiListElement.append(descriptionField);
  bmiListElement.append(buttonField);

  bmiList.append(bmiListElement);
});
