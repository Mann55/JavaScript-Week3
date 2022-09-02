function magician(yourFunc) {
  console.log(
    "I am magician! Watch as I mutate an array of strings to your heart's content!"
  );
  const namesArray = [
    "James",
    "Elamin",
    "Ismael",
    "Sanyia",
    "Chris",
    "Antigoni",
  ];

  const magicOutput = yourFunc(namesArray);

  return magicOutput;
}

function MutateAnArray(array) {
  return array.map((e) => {
    return e.toUpperCase();
  });
}

const result = magician(MutateAnArray);
console.log(result.sort());
