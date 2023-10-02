const redButton = document.getElementById('redButton');
const greenButton = document.getElementById('greenButton');
const blueButton = document.getElementById('blueButton');

redButton.addEventListener('click', function() {
  document.body.style.backgroundColor = 'red';
});

greenButton.addEventListener('click', function() {
  document.body.style.backgroundColor = 'green';
});

blueButton.addEventListener('click', function() {
  document.body.style.backgroundColor = 'blue';
});