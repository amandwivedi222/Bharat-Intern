function convertCelsiusToFahrenheit() {
    let celsius = document.getElementById("inputCelsius").value;
    let fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("output").innerHTML = fahrenheit;
  }
  
  function convertFahrenheitToCelsius() {
    let fahrenheit = document.getElementById("inputFahrenheit").value;
    let celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("output").innerHTML = celsius;
  }
  