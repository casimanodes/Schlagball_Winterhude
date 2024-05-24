const trainings = document.getElementById('training');
const monday = document.getElementById('monday');
const friday = document.getElementById('friday');
const sunday = document.getElementById('sunday');

let isTextAdded = false;

trainings.addEventListener('click', function() {
  if (isTextAdded) {
    trainings.style.width = "";
    monday.innerHTML = monday.innerHTML.replace(' Stadtpark', '');
    friday.innerHTML = friday.innerHTML.replace(' Meerweinstraße 26', '');
    sunday.innerHTML = sunday.innerHTML.replace(' Stadtpark', '');
  } else {
    trainings.style.width = "85%";
    monday.innerHTML += ' Stadtpark';
    friday.innerHTML += ' Meerweinstraße 26';
    sunday.innerHTML += ' Stadtpark';
  }
  // Toggle the flag
  isTextAdded = !isTextAdded;
});
