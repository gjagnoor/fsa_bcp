// TYPE CODE BELOW
function styleMePretty() {
  // everything inside of a block should be indented one level inwards (press tab once)
  /* codepen color codes
    * reserved keywords = color yellow 
    * our variable and function names = color blue
    * number = color orange
    * operators = color white
    * strings = color green
  */
  let truth = '';
  function innerBeauty(count) {
    let result = '';
    while(count > 0) {
      count--;
      if(count===2) {
        result += 'Unformatted code';
      } 
    } 
    result += ' is difficult to parse';
    return result;
  } 
  truth += innerBeauty(5); truth += ' for humans if not for machines';
  return truth;
}
