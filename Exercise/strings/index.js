//Exercise Two

/**
 * (3a) create  the text "My name is" as a string
 * (3b) create your name as a string (for example:'simon')
 * 
 * (3c) using concatenation, add the 2string from 3a together to create the text 'My name is : '_' (replace _ with your name.)
 * (3d) At a restuarant, you order 1 coffee ($5) and 1 bigel ($3).using math,calc the total cost , and using
 * concat, create the text 'total cost:$_' (replace_with the total you calculated).
 * (3e)Do The same thing as 3d, but use a template string and interpolation.
 * 
 * (3f) display the text from (3e) in a popup using alert(...)
 * 
 */

//(3a)

let text = "My name is"

//(3b)
 let myName = 'Timi'

 //(3c)
 let concat = text + myName;

 //(3d)

 let OneCoffe = 5

 let oneBigel =  3;

 let cost  = oneBigel + OneCoffe

//  let setText = 'total cost: $' +  cost

 //3e

 let interpolation = ` the total cost: ${cost}`

 //f

 alert(interpolation)