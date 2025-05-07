document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
  
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const results = document.getElementById("results");
  
    if (!height || height <= 0 || isNaN(height)) {
      results.innerText = "Please enter a valid height in cm.";
      return;
    }
  
    if (!weight || weight <= 0 || isNaN(weight)) {
      results.innerText = "Please enter a valid weight in kg.";
      return;
    }
  
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
  
    let category = "";
    if (bmi < 18.6) {
      category = "Underweight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      category = "Normal range";
    } else {
      category = "Overweight";
    }
  
    results.innerText = `Your BMI is ${bmi} (${category})`;
  });
  