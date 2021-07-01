const calculated = document.querySelector("h2");
const bmiForm = document.querySelector(".bmiForm");

bmiForm.btn__calc.addEventListener("click", () => {
  const height = bmiForm.height.value;
  const weight = bmiForm.weight.value;
  const bmi = (weight / height ** 2) * 10000;

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
