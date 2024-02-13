console.clear();
function dashatize(num) {
    const ods = '13579';
    if ((''+ num).length === 1) {
        return ('' + num);
    }

    let result = (''+ num).replace(/-/g, ' ').split('').map(a => ods.includes(a) ? ' ' + a + ' ' : a).join('');
    result = result.replace(/  /g, ' ').trim();
    result = result.replace(/ /g, '-');
    return result;
  }


  console.log(dashatize(274), "2-7-4");
  console.log(dashatize(5311), "5-3-1-1");
  console.log(dashatize(86320), "86-3-20");
  console.log(dashatize(974302), "9-7-4-3-02");
  console.log(dashatize(0), "0");
  console.log(dashatize(-1), "1");
  console.log(dashatize(-28369), "28-3-6-9");