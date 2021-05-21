const people = [
  { name: "ahch", year: 1987 },
  { name: "acac", year: 1984 },
  { name: "avavw", year: 1983 },
  { name: "hhe", year: 2010 },
];

const comments = [
  { text: "ahchoah ahchc ahch", id: "1234a" },
  { text: "ac ah chc ah ch", id: "1234b" },
  { text: "aca qwf ahch", id: "1234c" },
  { text: "jmhg bds ahch", id: "1234d" },
  { text: "ewtr vxc ngfg", id: "1234e" },
];

// some: kiem tra it nhat co 1 phan tu thoa man dieu kien => boolean
const isTrue = people.some((person) => person.year < 1900);
console.log(isTrue);

// every: kiem tra tat cac cac phan tu thoa man dieu kien => boolean
const isFalse = people.every((person) => person.name.length > 3);
console.log(isFalse);
