// FizzBuzz - main.js

var loopList =  document.getElementById('loop_output');

for (var i = 1; i <= 100; i++) {

  loopList.innerHTML += '<li>';

  if (i % 3 == 0 && i % 5 == 0) {
    loopList.innerHTML += 'FizzBuzz';
  } else if (i % 3 == 0) {
    loopList.innerHTML += 'Fizz';
  } else if (i % 5 == 0) {
    loopList.innerHTML +=  'Buzz';
  } else {
    loopList.innerHTML += i;
  }

  loopList.innerHTML += '</li>';
}
