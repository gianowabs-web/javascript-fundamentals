let array_of_array =[];

for(let i =0; i < 3; i++){
    array_of_array.push([]);
    for (let j = 0; j < 7; j++){
        array_of_array[i].push(j);
    }
}
console.log(array_of_array);
console.table(array_of_array);