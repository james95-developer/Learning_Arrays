//Array defination
const myArray = [
    "Volvo",
    "Mazda", 
    "Toyota", 
    "isuzu"];
    //Another Array
    const numbers = [
        20, 
        10, 
        40, 
        100, 
        59,
        100]
    //Accessing an Array with index 2 position
let access_array = myArray[2];
//Changing an Array Element---Toyota will be changed to BMW because it's index is 2
myArray[2] = "BMW";
//The toString() method returns an array as a comma separated string:
myArray.toString(myArray);//you can store this value in a variable and output
numbers.sort(function(a,b){
    return a-b;
});
//using length property in arrays
lengthOfArray = numbers.length;
numbers[numbers.length - 1]
console.log(numbers[numbers.length - 1]);

