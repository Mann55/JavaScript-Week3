// Create a function that takes a birthYear, and returns the age of someone
const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

/*
function getAgeFromArrays(ageArray) {
  return ageArray.map(calculateAge);
}
*/

const getAgeFromArrays = birthYears.map(calculateAge);

console.log(getAgeFromArrays);
