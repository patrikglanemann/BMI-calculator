const calculated = document.querySelector("h2");
const bmiForm = document.querySelector(".bmiForm");

bmiForm.addEventListener("click", () => {
  const height = bmiForm.height.value;
  const weight = bmiForm.weight.value;
  const bmi = (weight / height ** 2) * 10000;
  if (bmi >= 30 || bmi <= 18.5) {
    calculated.textContent = `Your BMI is ${bmi}`;
    console.log(calculated.textContent);
    calculated.style.color = "red";
  } else if (bmi < 30 && bmi > 25) {
    calculated.textContent = `Your BMI is ${bmi}`;
    console.log(calculated.textContent);
    calculated.style.color = "orange";
  } //bmi >= 25 && bmi > 18.5
  else if (bmi >= 25 && bmi > 18.5) {
    calculated.textContent = `Your BMI is ${bmi}`;
    console.log(calculated.textContent);
    calculated.style.color = "green";
  }

  console.log(`${height}, ${weight}, ${bmi}`);
});

// below 18.5 = red
// between 18.5 and 25 (not inclusive) = green
// between 25 and 30 (not inclusive) = orange
// from 30 on = red
