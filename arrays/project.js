/*
Manipulating an array
take the following array
const thelist['Laurence', 'svekis',true, 35, null,undefined,{test:'one',
 score:55},['one', 'two']]
Manipulate your array using various methods ,such as pop(), push(),shift(),
and Unshift(),and transform it into the following:
["FIRST","Svekis","MIDDLE","hello world","LAST"]
You can take this steps or adopt your own approach
 >Remove the first and the last item
 >add FIRST to the start of the array
 >assign hello world to the forth item value.
 >assign MIDDLE to the third index value.
 >add  last to the last position in the array.
 > output it to the console.


*/
the_list =["laurance", "Svekis","true",32,"null","undefined"];
the_list.pop()
console.log(the_list);
let removeditem =the_list.shift();
console.log(removeditem);
console.log(the_list);
the_list.splice(0,0,"FIRST");
console.log(the_list);
the_list.splice(4,1,"hello world");
console.log(the_list);
the_list.splice(3,1,"MIDDLE");
console.log(the_list);
the_list.push("LAST");
console.log(the_list);
the_list.splice(2,1);
console.log(the_list);
