const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

function canDrive(getBirthYear) {
  const age = calculateAge(getBirthYear);
  if (age >= 17) {
    console.log(`Born in ${getBirthYear} can drive`);
  } else {
    console.log(`Born in ${getBirthYear} can drive in ${age} years`);
  }
}

//birthYears.map(canDrive);
birthYears.forEach(canDrive);
