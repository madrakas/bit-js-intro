const fs = require("fs");
fs.readFile("inp.txt", (err, data) => {
  if (err) throw err;
  solve(data.toString());
});
 
function solve(inp) {
  arr = inp.split(/\r?\n/gm);
  input = arr.map((line) => line.split(":")[1].split("|"));
  input = input.map((number) => [
    number[0]
      .trim()
      .split(" ")
      .filter((x) => x),
    number[1]
      .trim()
      .split(" ")
      .filter((x) => x),
  ]);
  let result = [];
  for (let card = 0; card < input.length; card++) {
    let local = [];
    for (let number = 0; number < input[card][0].length; number++) {
      if (input[card][1].includes(input[card][0][number])) {
        local.push(input[card][0][number]);
      }
    }
    result.push(local);
  }
  result = result.map((el) => {
    return el.map((inEL) => 1);
  });
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length - 1; j++) {
      result[i][j + 1] = result[i][j] * 2;
    }
  }
  len = result.map((el) => [el.reduce((acc, cur) => (acc += 1), 0)]);
  input.map((el, idx) => {
    el.push(Number(len[idx]));
    el.push(1);
  });
  for (let i = 0; i < input.length; i++) {
    if (input[i][2] !== 0) {
      for (let j = i; j < input[i][2] + i; j++) {
        for (let z = 1; z <= input[i][3]; z++) {
          input[j + 1][3] += 1;
        }
      }
    }
  }
  console.table(input);
  console.log(input.reduce((acc, cur) => (acc += Number(cur[3])), 0));
}