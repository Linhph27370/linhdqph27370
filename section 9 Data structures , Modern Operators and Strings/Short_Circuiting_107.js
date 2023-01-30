'use strict';
const restaurant ={
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenza, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian','Organic'],
    starterMenu: ['Focaccia','Bruschetta','Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza','Pasta','Risotto'],
    openingHours: {
        thu:{
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 13,
        },
        sat: {
            open: 0,
            close: 21,
        },  
    },
    order: function(starterIndex,mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    oderDeLivery: function({starterIndex =1,
         mainIndex = 0,
         time = '20:20',
         address}){
      console.log(`Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderPasta: function(ing1, ing2 ,ing3){
        console.log(`Here is your declicious past with ${ing1}, ${ing2} and ${ing3}`)
    },
    orderPizza: function(mainIngredient, ...ortherIngredients){
        console.log(mainIngredient);
        console.log(ortherIngredients);
    }
};
console.log("------OR------")
console.log(3 || "jonas");
console.log("" || "jonas")
console.log( null || true)
console.log( 0 || true)
console.log(undefined || null)

// restaurant.numGuests =0;
restaurant.numGuests =23;
const guest1 = restaurant.numGuests? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('------AND------');
console.log(0 && 'jonas');
console.log(7 && 'jonas');

console.log('Hello' && 23 && null && 'jonas');

if (restaurant.orderPizza){
    restaurant.orderPizza('mushrooms','spinach')
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms' , ' spinach')

// const arr = [1, 2, ...[3, 4]];
// const [a, b, ...orthers] = [1, 2, 3, 4, 5];

// const [pizza, ,risotto, ...otherFood]=[
//     ...restaurant.mainMenu,
//     ...restaurant.starterMenu,
// ]
// console.log(pizza, risotto, otherFood);
// console.log(a ,b ,orthers);
// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) Functions
// const add = function (...numbers) {
//     let sum = 0;
//     for(let i = 0; i<numbers.length; i++) sum += numbers[i];
//     console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('pizza','mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('','mushrooms');