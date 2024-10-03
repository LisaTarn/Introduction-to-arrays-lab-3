let array = ["apple", 2, 3, true, "green"]; //Step 1: Declaring array with at least 5 elements
console.log(array);

console.log(array.length); //Step 2: Accessing Arrays
console.log(array[0]);  //Access the first element
console.log(array[2]); //Access the middle element
console.log(array[4]); //Access the last element

console.log(array.length); //Step 3: Using Array Properies and using the .length property to determine the number of elements and logging the results

let lastArray = array.pop(); //Step 4: Array Methods - experimenting with pop to remove last element
console.log(lastArray);
console.log(array);

array.push("blue"); //Using push to add new element at end
console.log(array);

let num = array.slice(1, 3); //Using slice to show a certain range on the array
console.log(num);

//Step 5:Iterating Through Arrays

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
} //Traditional loop that goes through each element and logs in console

array.forEach ((element) => {
    console.log(element);

}); //forEach loop

let [firstArray, secondArray, ...rest] = array; //Step 6:Array Destructuring

console.log(firstArray);
console.log(secondArray);
console.log(rest);