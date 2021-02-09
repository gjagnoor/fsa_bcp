let properties = ["name", "age", "color", "owns", "mom"];
let pusheen = {
  name: "Pusheen",
  age: 7,
  color: "gray and tabby",
  owns: ["florida", "ny"],
  mom: {
    name: "alyssa"
  },
  siblings: {
    sister: "stormy",
    brother: "pip"
  }
}

console.log(Object.keys(pusheen));
console.log(Object.values(pusheen));
console.log(Object.entries(pusheen));
let entries = Object.entries(pusheen);
console.log(Object.fromEntries(entries));

console.log(pusheen.mom);
console.log(pusheen.siblings);
