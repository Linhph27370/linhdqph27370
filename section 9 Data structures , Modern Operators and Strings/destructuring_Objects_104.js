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
};

restaurant.oderDeLivery({
    time : '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2
});
restaurant.oderDeLivery({
    address: 'Via del Sole, 2221',
    starterIndex: 2,
});
restaurant.oderDeLivery({
    address: 'Via del Sole, 2221',
    starterIndex: 3,
});

const { name, openingHours, categories} = restaurant;
console.log(name,openingHours, categories);

const {name: restaurantName , openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

const {menu = [], starterMenu : starters = []}= restaurant;
console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;
const obj = {a: 23 , b: 7, c:14};
({a,b} = obj);
console.log(a,b);

// nested object 
const{ fri :{open :o, close :c},
} = openingHours;
console.log(o, c);