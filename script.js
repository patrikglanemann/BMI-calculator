const bmiForm = document.querySelector(".bmiForm");
const bmiList = document.querySelector(".bmi-list");

bmiForm.btn__calc.addEventListener("click", () => {
  const height = bmiForm.height.value;
  const weight = bmiForm.weight.value;
  const bmi = (weight / height ** 2) * 10000;

  const bmiListElement = document.createElement("li");
  bmiListElement.classList.add("bmi-list__item");

  const nameField = document.createElement("p");
  nameField.textContent = bmiForm.name.value;

  const bmiField = document.createElement("p");
  bmiField.textContent = bmi.toFixed(2);

  const descriptionField = document.createElement("p");
  //descriptionField.textContent = bmiCheck();
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

  const buttonField = document.createElement("button");
  buttonField.classList.add("btn-remove");
  buttonField.textContent = "Delete";
  buttonField.addEventListener("click", () => {
    bmiListElement.remove();
  });

  bmiListElement.append(nameField);
  bmiListElement.append(bmiField);
  bmiListElement.append(descriptionField);
  bmiListElement.append(buttonField);

  bmiList.append(bmiListElement);
});

// This data would come from somewhere else (database, localStorage, or an external API)
const data = [
  {
    name: "Strawberrys",
    isBought: true,
  },
  {
    name: "Eggs",
    isBought: false,
  },
  {
    name: "Bananas",
    isBought: false,
  },
];

const form = document.querySelector("form");
const olElement = document.querySelector("ol");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const itemName = form.item.value;
  const liElement = createShoppingListItem(itemName);
  // HTMLElement.append to add an element as a last child of the element
  olElement.append(liElement);

  form.reset();
});

function createShoppingListItem(name, isBought = false) {
  // create an HTMLElement dynamically
  const liElement = createElement("li");
  liElement.textContent = name;
  liElement.classList.add("shopping-list__item");
  if (isBought) {
    liElement.classList.add("shopping-list__item--completed");
  }
  // Delete Button
  const deleteButton = createElement("button");
  deleteButton.textContent = "X";
  deleteButton.classList.add("btn", "btn--delete");
  deleteButton.addEventListener("click", () => {
    // HTMLElement.remove() to remove elements from the DOM
    liElement.remove();
  });

  // Complete Button
  const completeButton = createElement("button");
  completeButton.textContent = "Done";
  completeButton.classList.add("btn", "btn--complete");
  completeButton.addEventListener("click", () => {
    liElement.classList.toggle("shopping-list__item--completed");
  });

  // Compose the li appending the buttons to it
  liElement.append(deleteButton);
  liElement.append(completeButton);

  return liElement;
}

function createElement(type, textContent, classes) {
  return document.createElement(type);
}
