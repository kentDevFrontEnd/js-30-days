const root = document.querySelector("#root");

const inventors = [
  { firstname: "kent", lastname: "bui", year: 1887, passed: 1908 },
  { firstname: "acja", lastname: "bjajci", year: 1907, passed: 1988 },
  { firstname: "kent", lastname: "bui", year: 1897, passed: 1988 },
  { firstname: "kent", lastname: "bui", year: 1888, passed: 1908 },
  { firstname: "kent", lastname: "bui", year: 1857, passed: 1958 },
  { firstname: "kent", lastname: "bui", year: 1877, passed: 1938 },
  { firstname: "kent", lastname: "bui", year: 1887, passed: 1934 },
];

const people = ["cajjcj", "jajc", "ahcahch", "cajcj", "ahchoha", "cjajc"];

function show(arr) {
  let content = [];
  arr.map((item) =>
    content.push(
      `<div>name: ${item.firstname} ${item.lastname}</div>
    <div>year: ${item.year} </div>
    <div>passed: ${item.passed}</div>`
    )
  );

  console.log(content);
  root.innerHTML = content.join("");
}

// 1] filter inventors was born in the 1897's
let wasBornArr = inventors.filter((item) => item.year === 1897);

show(wasBornArr);

// 2] map =>

// 3] sort
let ageInventors = inventors.map((item) => {
  return {
    firstname: item.firstname,
    lastname: item.lastname,
    age: item.passed - item.year,
  };
});
ageInventors.sort((a, b) => b.age - a.age);
console.log(ageInventors);

let years = ageInventors.reduce((acc, cur) => acc + cur.age, 0);
console.log(years);

// reduce
const data = ["car", "truck", "car", "bike", "truck", "bike", "moto", "car"];

let result = data.reduce((acc, item) => {
  if (!acc[item]) {
    acc[item] = 0;
  }

  acc[item]++;
  return acc;
}, {});

console.log(result);
