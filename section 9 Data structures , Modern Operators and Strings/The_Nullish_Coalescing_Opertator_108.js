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

restaurant.numGuests = 0;
const guest = restaurant.numGuests || 10;
console.log(guest);

//nullsih: nll and undefined (not 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);