let fahrenheitInput = document.querySelector('#fahrenheitInput');
let celsiusOutput = document.querySelector('#celsiusOutput');
let kelvinOutput = document.querySelector('#kelvinOutput');
document.querySelector('#output').style.visibility = 'hidden';

fahrenheitInput.addEventListener('input', function(e) {
        document.querySelector('#output').style.visibility = 'visible';
        document.querySelector('#output').classList.add('animated', 'fadeIn');
        let fahrenheit = e.target.value;
        celsiusOutput.innerHTML = Math.trunc(((fahrenheit - 32) * 5 / 9));
        kelvinOutput.innerHTML = Math.trunc(((fahrenheit - 32) * 5 / 9 + 273.15));

   if (fahrenheitInput.value === "") {
        document.querySelector('#output').style.visibility = 'hidden';
   } 
})