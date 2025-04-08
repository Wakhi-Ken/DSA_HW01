let list = [
  5,
  14,
  58,
  -34,
  31,
  -44,
  "as",           // String
  37,
  30,
  0,
  22,
  27,
  23,
  "!as",          // Special characters
  29,
  17,
  18,
  5,
  "-",
  5,
  "-a",          // Special characters
  38,
  25,
  59,
  54,
  49,
  60,
  48,
  30,
  60,
  25,
  34,
  49,
  4.67,         // Decimal number
  "a0",
  22,
  28,
  26,
  47,
  25,
  59,
  16,
  26,
  "5-598",
  56,
  20,
  "2 8",
  58,
  2,
  8,
  63,
  61
];

function OnlyInteger(arr) {
  
  return arr.filter(item => typeof item === "number" && Number.isInteger(item));
}

function noDuplicate(arr) {
 
  return arr.filter((item, index) => arr.indexOf(item) === index);
}


let OnlyIntegers = OnlyInteger(list);


let filtered_list = noDuplicate(OnlyIntegers);


filtered_list.forEach(num => {
  console.log(num);
});

console.log(filtered_list);
