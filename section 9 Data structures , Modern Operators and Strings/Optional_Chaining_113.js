'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]:{
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 13,
    },
    [weekdays[5]]: {
        open: 0,
        close: 13,
    },

    // [`day-${2+4}`]: {
    //     open: 0,
    //     close: 21,
    // },  
};

const restaurant ={
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenza, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian','Organic'],
    starterMenu: ['Focaccia','Bruschetta','Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza','Pasta','Risotto'],
    // openingHours : openingHours,

    //ES^ enhanced object literals
    openingHours,

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

if(restaurant.openingHours && restaurant.openingHours.mon) 
console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

// With option
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);    

//Example 

const days =['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for(const day of days){
    // console.log(day);
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day} , we open at ${open}`)
}

//Methods
console.log(restaurant.order?.(0, 1)?? 'Method does is not exist');
console.log(restaurant.orderRisoto?.(0, 1)?? 'Method does is not exist');

//Array
const users = [{name: 'Jonas', email: 'hello@jonas.io'}];
//const users =[];
console.log(users[0]?.name ?? 'User arry empty');

if(users.length>0) console.log(users[0].name);
else console.log('user arry empty');