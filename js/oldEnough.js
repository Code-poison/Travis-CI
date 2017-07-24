function isOldEnoughToDrink(age) {
  // your code here	
  if(typeof(age) != 'number') return false;
  if(age < 21){
    return false;
  }else{
    return true;
  }
}