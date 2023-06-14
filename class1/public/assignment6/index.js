//q1
function addElementToEnd(array,element) {
    array.push(element);
    return array;
    }
    
    let myArray = [2,3,4];
    console.log(addElementToEnd(myArray,5));
    //q2
    function removeLastElement(array) {
        array.pop();
        return array;
    }
    let myarray = [6,7,8,9]
    console.log(removeLastElement(myarray));
    //q3
    let array1 =[1,2];
    let array2 =[3,4];
    function combine(a,b) {
        return a.concat(b);
    }
    console.log(combine(array1,array2));
    //q4
    function findElementIndex(array, element) {
        return array.indexOf(element);
    }
    let mya=('hi','hello');
    console.log(findElementIndex(mya,'i'));
    console.log(findElementIndex(mya,'l'));
    //q5
    function portion() {
        return p.slice(2, 5);
    }
    let p=[1,2,3,4,5,6];
    console.log(portion(p));
    //q6
    function convertToUppercase(string) {
        return string.toUpperCase();
      }
      let myString = "apple";
      console.log(convertToUppercase(myString));
      //q7
      function convertToLowercase(string) {
        return string.toLowerCase();
      }
      let myStrin = "apple";
      console.log(convertToLowercase(myStrin));
      //q8
      function splitStringToArray() {
        return mySt.split(" ");
      }
      let mySt = "hello welcome";
      console.log(splitStringToArray(mySt));
      //q9
      function getCharacterAtIndex() {
        return mySti.charAt ("4");
      }
      let mySti = "hello welcome";
      console.log(getCharacterAtIndex(mySti));
      //q10
      function extractStringPortion() {
        return mySti.substring ("7");
      }
      let myS = "hello welcome";
      console.log(extractStringPortion(myS));
      //q11
    let array=[1,2,3,4,5,6];
    function doubleArrayElements(array)  {
        return array.map(function(element) {
           return element * 2 ;
        })
    }
    console.log(doubleArrayElements(array));
    //q12
    let arr=[1,2,3,4,5,6];
    function removeallElement(arr) {
        return arr.filter(function(number) {
           return number % 2 !== 0 ;
        })
    }
    console.log(removeallElement(arr));
    //q13
    let arrr=[1,2,3,4,5,6];
    function logeachelement(arrr) {
        return arrr.forEach(function(element) {
     
          console.log(element)
        })
    }
    logeachelement(arrr)
    //q14 a
    function reverseString(string) {
        let reversedString = '';
        for (let i = string.length - 1; i >= 0; i--) {
          reversedString += string.charAt(i);
        }
        return reversedString;
      }
      let a = "Hello, Welcome";
    console.log(reverseString(a));
    //b
    function reverseString(string) {
        return string.split('').reverse().join('');
      }
      let m = "Hello, Welcome";
    console.log(reverseString(m));
    //q15
    function palindrome(value) {
      for (i=0; i<=value.length/2;i++) {
          if (value[i] != value[value.length-1 - i]) {
              return false;
          }
      }
      return true;
    }
    console.log(palindrome("hi"));
    //q16
    function find(array) {
      let maxNumber = array[0];
      for (let i = 1; i < array.length; i++) {
        if (array[i] > maxNumber) {
          maxNumber = array[i];
        }
      }
      return maxNumber;
    }
    let numbers = [7, 12, 4, 6, 3];
    console.log(find(numbers));
    //q17
    function removeDuplicates(array) {
      const uniqueArray = [];
      array.forEach(function(element) {
        if (!uniqueArray.includes(element)) {
          uniqueArray.push(element);
        }
      });
      return uniqueArray;
    }
    let num= [1, 2, 3, 2, 4, 3, 5, 6, 1];
    console.log(removeDuplicates(num));
    //q18
    
    
    
      
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    //q19
    console.log(myVariable); 
    var myVariable = "Hi, Welcomr";
    
    function sayHello() {
      console.log("Hello, v");
    }
    
    sayHello(); 
    console.log("Hello, welcome");
    
    
    
    
    