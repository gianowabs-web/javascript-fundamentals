let names=["Moses","Miriam","Peter","James"];

for(let name of names){
    console.log(name);
}

// for it gives you values as long as its an object

let car = {
    model:"Golf",
    make:"Volkswagen",
    year:1999,
    color:"Black",
};
// accessing value in an object using the property like this.
console.log(car["model"]);

let array_keys=Object.keys(car);
console.log(array_keys);

for(let i = 0;i < array_keys.length; i++){
    console.log(array_keys[i], car[array_keys[i]]);
}
for (let prop in car){
    console.log(prop);
}