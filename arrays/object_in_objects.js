let company ={
    companyname:"Healty Candy",
    activity:"food manufacturing",
    address:{
        street:"2nd street",
        number:"123",
        zipcode:33116,
        city:"miami",
        state:"Florida"

    },
    yearOfestablishment:2025
};
//accessing and modifying properties of the address, use the two
//approaches
company.address.zipcode=300600;
company["address"]["number"] = "582";
console.log(company);

//array in an object
let company2 ={
    companyname:"Healty Candy",
    activities:["food manufacturing","improving kids health","manufacturing toys"],
    address:{
        street:"2nd street",
        number:"123",
        zipcode:33116,
        city:"miami",
        state:"Florida",

    },
    yearOfestablishment:2025
};

// accessing an array item in an object
let activity = company2.activities[1];
console.log(activity);

//objects in arrays
let addresses = [
    {
        street:"2nd street",
        number:"123",
        zipcode:33116,
        city:"miami",
        state:"Florida",

    },
    {    street:"1st west avenue",
         number:"5",
         zipcode:"75001",
         city:"Addison",
         state:"texas"
    }

];
 //accessing a property in an array in an object
 let streetname = addresses[0].street;
 console.log(streetname);

 //Modify a property in an array in an object.
 addresses[1].zipcode = "67875";
 console.log(addresses);
