let pets = ["cat", "dog", "rat"];

// Create a for loop that changes each string in the array so that they are
// plural.

for (i in pets) {
  pets[i] = pets[i] + "s";
}

console.log(pets);
