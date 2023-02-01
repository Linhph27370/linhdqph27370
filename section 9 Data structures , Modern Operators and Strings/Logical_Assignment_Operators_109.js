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

const rest1={
    name: 'Capri',
    numGuests:0,
};
const rest2 ={
    name : 'La Piazza',
    owner: 'Giovanni Rossi',
}

//OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

//nullish assigment operator(null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//AND assigment operator
// rest2.owner = rest2.owner && 'ANONYMOUS';
// rest1.owner = rest1.owner && 'ANONYMOUS';

rest1.owner &&= 'ANONYMOUS';
rest2.owner &&= 'ANONYMOUS';

console.log(rest1);
console.log(rest2);