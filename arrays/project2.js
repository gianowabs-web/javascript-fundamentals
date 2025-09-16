/*
company product catalog
In this project, you will implement a data structure for a product catalog and
create queries to retrive data.
1. create an array to hold an inventoryof the store items.
2.create three items, each having the prperties of name, model, cost, and 
quality
3. add all three objects to the main array using an array method, and then log
the inventory array to the console.
4. access the qquality element of the third item, and log it to the
 console 
Experiment by adding and accessing more elements within your data 
 strucure.

*/
let inventory =[];
    inventory1={
        name:"Jeep",
        model:"GTFORGHEN",
        cost:2545000,
        quality:"first class"
      }
    inventory2={
        name:"Toyota hilux",
        model:2024,
        cost:900000,
        quality:"casual class"
      }
    inventory3={
        name:"ford",
        model:67025,
        cost:1670000,
        quality:"executive"
     }
inventory=[inventory1,inventory2,inventory3];
console.log(inventory);
let quality =inventory[2].quality;
console.log(quality);


