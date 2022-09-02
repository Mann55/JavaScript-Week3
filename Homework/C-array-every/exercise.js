/*
   This program should check if the array `group` contains only students
*/

var students = ["Austine", "Dany", "Swathi", "Daniel"];
var group = ["Austine", "Dany", "Swathi", "Daniel", "Manpreet"];

// complete this statement
const studentsInGroup = group.filter((student) => students.includes(student)); // we can also use some method
var groupIsOnlyStudents = group.length === studentsInGroup.length;

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
