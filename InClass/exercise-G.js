const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919, 2020, 2021];

function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

function whoCanDrive(year) {
  const age = calculateAge(year);
  if (age >= 17) {
    return true;
  } else {
    return false;
  }
}

const result = birthYears.filter(whoCanDrive);
console.log(
  `These are the birth years of people who can drive: ${result.join(", ")}`
);
