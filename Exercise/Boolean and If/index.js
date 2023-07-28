/**
 * (6a) create a variable called "Hour" and save the current hour of the day ( use 24hours format and save it as a number 0 and 23)
 * **if hour is between 6 and 12, display "Good afternoon!" in the console.
 * **Otherwise, display 'Good night' in the console
 */

 //Solution

 // from question (6b)
const hour = 18



 if(hour > 12 && hour < 18 ){
    console.log('Good Afternoon!');
 }else if(hour > 15 && hour < 23){
    console.log('sleep tight');
 }
 else{
    console.log('Good Night');
 }


 /**
  * (6b)
  * Continuing from (6a) , try changing the value in the "hour" valuable to make it display different message
  */