// YOUR CODE BELOW
function bacteriaTime (currentNum, targetNum) {
    /*
     * if targetnum < currentNum return string 'targetNum must be larger than currentNum' else 
       * declare variable numMins and assign it to 0
       * initiate a while loop and check if currentNum < targetNum, if true
          * add 20 to numMins 
          * update currentNum to the new number (double it)
       * return numMins
    */
    if (targetNum < currentNum) {
      return 'targetNum must be larger than currentNum';
    } else {
      let numMins = 0;
      while (currentNum < targetNum) {
        numMins += 20;
        currentNum = currentNum * 2; // currentNum *= 2; 
      }
      return numMins;
    }
}