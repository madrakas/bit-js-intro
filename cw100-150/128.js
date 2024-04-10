const orderedCount = function (text) {

    if ((typeof(text) !== 'string') || (text.length === 0)) {
        return [];
    }
    
    const symbolsObj = {};
    const result = [];

    const textArr = '' + text.split('').forEach(element => {
        symbolsObj[element] = symbolsObj[element] + 1 || 1;
    });

    text.split('').filter((value, index, self) => self.indexOf(value) === index).forEach(key =>{
        result.push([key, symbolsObj[key]]);
    });
        
    return result;
  }

  console.log(orderedCount("abracadabra"), [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]);
//   console.log(["Code Wars",  [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]]);
//   console.log(["233312", [['2', 2], ['3', 3], ['1', 1 ]]]);