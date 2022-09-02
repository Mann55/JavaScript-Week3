const MessyArray = [
  100,
  "iSMael",
  55,
  45,
  "sANyiA",
  66,
  "JaMEs",
  "eLAmIn",
  23,
  "IsMael",
  67,
  19,
  "ElaMIN",
];

/*
function cleaningUp(array) {
  return array
    .filter((string) => typeof string == "string")
    .map((e) => `${e.toUpperCase()}!`)
    .sort()
    .reverse();
}

console.log(cleaningUp(MessyArray));
*/

function cleaningUp(array) {
  return array
    .filter((string) => typeof string == "string")
    .map((e) => `${e.toUpperCase()}!`)
    .sort()
    .reverse();
}

console.log(cleaningUp(MessyArray));
