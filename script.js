const calculated = document.querySelector("h2");
const bmiForm = document.querySelector(".bmiForm");
const bmiList = document.querySelector(".bmi-list");

//const bmiArray = [{ name: "TomTest", bmi: "25", text: "nice" }];

bmiForm.btn__calc.addEventListener("click", () => {
  const name = bmiForm.name.value;
  const height = bmiForm.height.value;
  const weight = bmiForm.weight.value;
  const bmi = (weight / height ** 2) * 10000;

  const bmiObject = {
    name,
    bmi,
    text: "Miau",
  };

  const bmiListNew = document.createElement("li");
  bmiListNew.textContent = `${bmiObject.name} ${bmiObject.bmi.toFixed(2)} ${
    bmiObject.text
  }`;
  //console.log(bmiElementName);
  bmiList.append(bmiListNew);

  calculated.textContent = `Your BMI is ${bmi.toFixed(2)}`;

  if (bmi < 18.5 || bmi >= 30) {
    console.log(calculated.textContent);
    calculated.style.color = "red";
  } else if (bmi >= 18.5 && bmi < 25) {
    console.log(calculated.textContent);
    calculated.style.color = "green";
  } else {
    //(bmi >= 25 && bmi < 30)
    console.log(calculated.textContent);
    calculated.style.color = "orange";
  }

  console.log(`${height}, ${weight}, ${bmi}`);
});

// below 18.5 = red
// between 18.5 and 25 (not inclusive) = green
// between 25 and 30 (not inclusive) = orange
// from 30 on = red

/*
for (let i = 0; i < bmiObject.length; i++) {
  const bmiObjElement = bmiObject[i];
  const bmiElementName = bmiObjElement.name;
  const bmiElementValue = bmiObjElement.bmi;
  const bmiElementtext = bmiObjElement.text;

  const bmiListNew = document.createElement("li");
  bmiListNew.textContent = `${bmiElementName} ${bmiElementValue} ${bmiElementtext}`;
  console.log(bmiElementName);
  bmiList.append(bmiListNew);
}
*/
