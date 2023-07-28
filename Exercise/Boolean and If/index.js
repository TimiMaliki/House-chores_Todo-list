/**
 * (6a) create a variable called "Hour" and save the current hour of the day ( use 24hours format and save it as a number 0 and 23)
 * **if hour is between 6 and 12, display "Good afternoon!" in the console.
 * **Otherwise, display 'Good night' in the console
 */

//Solution

// from question (6b)
//  const hour = 16
const hour = 18;

//from (6c)

let name = "Timi";

if (hour > 12 && hour > 13) {
  console.log(`Good morning ${name}`);
} else if (hour > 15 && hour < 23) {
  console.log(`sleep tight ${name}`);
} else {
  console.log(`Good Night ${name}`);
}

/**
 * (6b)
 * Continuing from (6a) , try changing the value in the "hour" valuable to make it display different message
 */

/**
 * (6c)
 * continuing from (6a), create a variable called "name" and save your name inside (as a string).update the
 * if the statement to your display your name in each message. for e.g "Goodmorning ${name}"
 */

/**
 * (6d)
 * imagine an amusement park that has a discount for children (6y/o) and younger or seniors (65 y/o).
 * **create a variable 'age' and save a person's age inside
 *  ** create an if statement that checks if the person qualifies for a discount.if they do, display
 * "discount" in the console.
 * Note: try to use the || operator in your solution in the console.
 *  **try changing the 'age' variable to display different messages
 */

//  const age = 24;
const age = 50;

//from (6e)
//* ** try changing the value of isHoliday to display different message
//const isHoliday = true
const isHoliday = false;

//**try changing the 'age' variable to display different messages
//((age > 6 || age < 65)) will execute first before the other condition
if ((age > 6 || age < 65) && !isHoliday) {
  console.log("discount");
}

/**
 * (6e)
 * continuing from exercise 6d , let's say the discount is only available if it is not a holiday. create a variable
 * const isHoliday = true;
 * **update the code so that in order to get a discount, people must meet the age requirement and it is also not a holiday
 * **Note && has a higher priority than || so you may need to use the brackets to control which code get done
 * ** try changing the value of isHoliday to display different message
 */

/**
 * (6f)
 * generate a random number with Math.random() save in a variable
 */

//solution

const rando = Math.random();

//from  (6h)
let result = ''

//from  (6i)
let guess = 'head'

/**
 * (6g)
 * create an if statement and check:
 *  ** if the number is less than 0.5, the display 'head' in the console else display 'tail' in the console
 */

// if (rando < 0.5) {
//   result = 'head';
// //   guess = result
// //   console.log('you win');
// }else{
//     result = 'tail'
//     // guess = result
//     // console.log('you lose');
// }

/**
 * (6h)
 * instead of display "heads" or "tails" in the console, save the result in a variable calle "result".
 *
 */

/**
 * (6i)
 * lets say we're trying to guess the result create a variable called 'guess and save your guess ('head or tail).
 * * if your guess matches the result, display 'you win' else 'you lose'
 */


// if(guess === result){
//    console.log('winner');
// }else{
//     console.log('loser');
// }


/**
 * (6j)
 * (challenge) instead of using if statements in the previous exercise, try switching them in the to ternary operators
 * condition ? A:B
 */



let viwResult = rando < 0.5 ? 'head' : 'tail';

console.log(viwResult);


