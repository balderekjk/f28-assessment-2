///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
  {
    name: 'pizza',
    price: 9.99,
  },
  {
    name: 'pasta',
    price: 8.99,
  },
  {
    name: 'salad',
    price: 7.99,
  },
];

//CODE HERE

// initial value defaults to first value in the list!
const summedPrice = cart.reduce((a, c) => (c.price += a), 0);
// console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => {
  return cartTotal * (1 + tax) - couponValue;
};
// console.log(calcFinalPrice(summedPrice, 2, 0.1));

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
	// need to know food to make and price
	foodOrdered: array of objects
		// name (string) and price (num) within
	// need to know phone to contact update
	phoneNum: string
	// name needed for security
	name: string
	// any coupons used, factor into total
	couponAmount: num
	// as in dine-in reservation, pick-up, delivery?
	arrangement: string
	// time the arrangement will be ready
	time: string
	

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
  foodOrdered: {
    name: 'original ramen',
    price: '$7.99',
  },
  phoneNum: '808-293-4901',
  name: 'Derek Bal',
  couponAmount: 0,
  arrangement: 'pick-up',
  time: '7:00PM',
};
