const { readFileSync } = require("fs");

const input = readFileSync("input.txt", "utf-8");

const lines = input.split("\n").map((line) => line.split("   ").map(Number));

let right = [];
let left = [];
let distance = 0;
for (const line of lines) {
  right.push(line[0]);
  left.push(line[1]);
}

right = right.sort((a, b) => a - b);
left = left.sort((a, b) => a - b);

for (let i = 0; i < right.length; i++) {
  distance += Math.abs(left[i] - right[i]);
}
console.log(`distance: ${distance}`);

let similarity = 0;

for (let i = 0; i < right.length; i++) {
  const leftItem = left[i];
  const numberOfRightItemsInLeftArray = right.filter(
    (item) => item === leftItem,
  ).length;
  similarity += leftItem * numberOfRightItemsInLeftArray;
}

console.log(`similarity: ${similarity}`);
