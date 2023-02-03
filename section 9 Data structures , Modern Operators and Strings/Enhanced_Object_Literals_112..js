'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const hours = {
    [weekdays[3]]:{
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 13,
    },
    [`day-${2+4}`]: {
        open: 0,
        close: 21,
    },  
};

const restaurant ={
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenza, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian','Organic'],
    starterMenu: ['Focaccia','Bruschetta','Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza','Pasta','Risotto'],
    // openingHours : openingHours,

    //ES^ enhanced object literals
    hours,

    order(starterIndex,mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    oderDeLivery : function({starterIndex =1,
         mainIndex = 0,
         time = '20:20',
         address}){
      console.log(`Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderPasta(ing1, ing2 ,ing3){
        console.log(`Here is your declicious past with ${ing1}, ${ing2} and ${ing3}`)
    },
    orderPizza(mainIngredient, ...ortherIngredients){
        console.log(mainIngredient);
        console.log(ortherIngredients);
    }
};