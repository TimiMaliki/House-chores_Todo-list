/**
 * (7a) create a function called 'greet' that displays the message 'Hello' in the
 * console-call/ tun this function a few using greet();
 *
 */

//solution

//from (7b)

// function greet(name){
//    console.log(`hello ${name}`);
// };

//  greet('Timi');

/**
 * (7b) continue from (7a) , add a parameter called 'name' to the 'greet' function and display the
 * message: 'Hello${name}!'
 *
 */

/**
 * (7c) try calling greet() without a name ( it will display 'Hello undefined!'),
 * it will display 'Hi there!' instead. modify the function so if 'name' is undefined, it will display
 * 'hi there' instead
 * hint: use an if-statement.since undefined 'hi there! instead.
 * hint: use an if-statement.since undefined is a falsy value, you can use:if(!name){...}
 * to check if 'name' is defined
 */

//undefined!
function greet(name) {
  console.log(`hello ${name}`);

  if (!name) {
    console.log("hello hi there");
  }
}

greet();

/**
 * (7d) create a function 'convertToFahrenheit(celsius)' that takes a number in degrees celsius and returns
 * a number in degrees fahrenheit.
 *  ** formula:fahrenheit =(celsius*9/5) + 32;
 * **convertToFahrenheit(25) => 77
 */

//solution

function convertToFahrenheit(celsius) {
  return(celsius * 9) / 5 + 32;

}

// convertToFahrenheit(25);

/**
 * (7e) create a function convertToCelsius(fahrenheit) that takes anumber in fahrenheit and returns anumber in degree celsius
 * **formula: celsius =(fahrenheit-32) * 5/9
 * **convertToCelsius(86) => 30
 */

//solution

function convertToCelsius(fahrenheit) {
 return  (fahrenheit - 32) * 5 / 9;
}

// convertToCelsius(86);

/**
 * (7f) create a function "convertTemperature(degree,unit)" that takes a number and a unit ('c','f'),
 * and convert it into the other unit.
 *
 * **convertTemperature(25,'c') => '77f'
 * ** convertTemperature(86,'f') => '30c'
 */
         
//solution
 
function convertTemperature(degree, unit){

    if(unit === 'C'){
            const result =  convertToFahrenheit(degree);

          return  `${result}F`
    }else if(unit === 'F'){
             const result = convertToCelsius(degree)
        return     `${result}C`
    }
}

console.log(convertTemperature(25 ,'C'));
console.log(convertTemperature(86 ,'F'));