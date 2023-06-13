//q1
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
var result = isEven(7);
console.log(result)
//q2
var students = [
  {name:'vinay',age:24},
  {name:'pranay',age:20},
  {name:'ravi',age:25}
];
 for (var i = 0; i < students.length; i++) {
  console.log(students[i].name);
}
//q3
var users =[
{name:'vinay',email:'kokkondavinay9@gmail.com'},
{name:'pranay',email:'jjk@gmail.com'},
{name:'ravi',email:'vgf@gmail.com'}

];
var vinayemail = null;

for (var i = 0; i < users.length; i++) {
if (users[i].name === 'vinay') {
  vinayemail = users[i].email;
  break;
}
}
console.log(vinayemail);
//q4

function isPositive(num) {
if (num > 0) {
  return true;
} else {
  return false;
}
}
var result = isPositive(-2);
console.log(result)
//q5
var grade = 85;
if (grade>=60){
console.log("pass");
} else {
console.log("fail");
}
//q6
function isPalindrome(word) {
var reversedWord = word.split('').reverse().join('');

if (word === reversedWord) {
  return true;
} else {
  return false;
}
}
var result = isPalindrome("racecar");
console.log(result);
//q7
var numbers = [1, 2, 3, 4, 5];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
sum += numbers[i];
}

console.log(sum);
//q8
var name = "Alice";
if (name === "Alice") {
console.log("Hello Alice");
} else {
console.log("Hello stranger");
}
//q9
var books = [
{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
{ title: 'To Kill a Mockingbird', author: 'Harper Lee' },
{ title: 'Pride and Prejudice', author: 'Jane Austen' }
];
var bookAuthor = null;

for (var i = 0; i < books.length; i++) {
if (books[i].title === 'The Great Gatsby') {
  bookAuthor = books[i].author;
  break;
}
}

var book = books.find(function(book) {
return book.title === 'The Great Gatsby';
});

var bookAuthor = book ? book.author : null;
console.log(bookAuthor);
//q10
function caluculatorArea(length , width){
var area = length * width
return area;
}
var result = caluculatorArea(5, 6);
console.log(result);
//q11
function printPrimesUpToN(n) {
function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

for (let i = 2; i <= n; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
}


printPrimesUpToN(10);




















