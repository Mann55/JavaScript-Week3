const names = ["Daniel", "James", "Irina", "Mozafar", "Ashleigh"];

function checkMyName(name) {
  return names.includes(name) ? "Found me !" : "Haven't found me !";
}

console.log(checkMyName("Manpreet"));
