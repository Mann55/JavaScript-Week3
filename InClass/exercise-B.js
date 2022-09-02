const peopleFromOurClass = ["Lakhvir", "Manpreet", "Angad", "Alba"];

const peopleFromAnotherClass = ["Dani", "Lucky", "Honey", "Ali"];

const totalPeople = peopleFromOurClass.concat(peopleFromAnotherClass);

console.log(totalPeople.sort());

/*
function peopleInTheArray(name, arrayOfNames) {
  if (arrayOfNames.includes(name)) {
    return `${name} is at the class with ${arrayOfNames}`;
  } else {
    return `${name} is not at the class with ${arrayOfNames}`;
  }
}

console.log(peopleInTheArray("Manpreet", totalPeople));
*/

/* Same process with  anonymous function*/
/*
const peopleInTheArrayList = function (name, array) {
  if (array.includes(name)) {
    let modified_array = array.slice();
    modified_array.splice(array.indexOf(name), 1);
    const other_people = modified_array.join(", ");

    return `${name} is at the class with ${other_people}`;
  } else {
    return `${name} is not at the class with ${array.join(", ")}`;
  }
};

console.log(peopleInTheArrayList("Manpreet", totalPeople));
*/

/* With arrow function*/
const peopleInTheArrayList = (name, array) => {
  if (array.includes(name)) {
    let modified_array = array.slice();
    modified_array.splice(array.indexOf(name), 1);
    const other_people = modified_array.join(", ");
    return `${name} is at the class with ${other_people}`;
  } else {
    return `${name} is not at the class with ${array.join(", ")}`;
  }
};

console.log(peopleInTheArrayList("Mann", totalPeople));
