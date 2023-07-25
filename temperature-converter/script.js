function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    const unitSelect = document.getElementById("unitSelect").value;
    const convertedTemperaturesContainer = document.getElementById("convertedTemperatures");
  
    if (isNaN(temperatureInput)) {
      alert("Please enter a valid number for the temperature.");
      return;
    }
  
    let convertedTemperatures = "";
  
    if (unitSelect === "celsius") {
      const fahrenheit = ((temperatureInput * 9/5) + 32).toFixed(2);
      const kelvin = (temperatureInput + 273.15).toFixed(2);
      convertedTemperatures = `${fahrenheit} °F / ${kelvin} K`;
    } else if (unitSelect === "fahrenheit") {
      const celsius = ((temperatureInput - 32) * 5/9).toFixed(2);
      const kelvin = ((temperatureInput - 32) * 5/9 + 273.15).toFixed(2);
      convertedTemperatures = `${celsius} °C / ${kelvin} K`;
    } else if (unitSelect === "kelvin") {
      const celsius = (temperatureInput - 273.15).toFixed(2);
      const fahrenheit = ((temperatureInput - 273.15) * 9/5 + 32).toFixed(2);
      convertedTemperatures = `${celsius} °C / ${fahrenheit} °F`;
    }
  
    convertedTemperaturesContainer.innerHTML = `Results : ${convertedTemperatures}`;
  }
  