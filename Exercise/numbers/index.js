
//This folder shows the exercises i will be doing in the project

 /**
  * Exercises One
  * (2a)At a restuarant, you order 1 soup for $10 ,3 burgers for $8 each , and 1 ice-cream for $5.use
  * javascript to calculate the cost of the order.
  * 
  * (2b)You're at a restaurant with 2friends(3 people in total) and make the same order as 2a. calc how much
  * each person pays
  * (2c) calc the total cost of a toaster($18.50) and 2 shirts ($7.50 each)
  * (2d) calc a 10% tax for the total in exercise (2c)
  * (2e) calc a 20% tax for the total in (2c) (remember that 1% = 1/100, so 20/100 = 0.2)
  * 
  */

 //Solution for Exercise One

 //(2a)

 //list of  items 1 soup=$10 , 3 burgers=$8 , 1 ice-cream=$5
 
 let soup = 10;
  
 let burger = 8;

 let iceCream = 5;

 let totalOrder = soup + burger + iceCream
 

 //Total 23
 console.log(totalOrder);



 //(2b)

 let Timi = 10;
  
 let joe = 8;

 let  uche = 5;

 let individualPay = soup + burger + iceCream


//  let result = individualPay / 3  //the number of individual

 //7.666666666666667

//  console.log(result);


 //(2c)

 //list of items  toaster($18.50) and 2 shirts ($7.50 each)

 let toaster = 18.50;

 let shiirt = 2.50;


 let cost = toaster + (shiirt * 2)
//  23.5
//  console.log(cost);



 //(2d)

 //a 10% tax in (2c)


 let tax = cost * 0.1

//  console.log(tax);

 //2.35


 //(2e)

 //a 20% tax in (2c)

 let taxExta = cost * 0.2

 //4.7
//  console.log(taxExta);


