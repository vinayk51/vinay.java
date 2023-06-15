//q1
let square = (a) => {
    console.log(a * 2);
  }
    square(7);
    //q2
    let Word = (h) => {
      const words = [...(h).split(" ")];
      return words.length;
    };
    console.log(Word("hi hello h"));
    //q3
   class person {
    constructor(name, age, address){
      this.name = name;
      this.age = age;
      this.address = address;
    }
   }
   let vinay =new person("vinay", 24, "880 S coit rd");
  console.log(vinay);     
  //q4
  let numbers = [1,2,3,4,5,6,,7,8,9,10];
  let getevenNumber = (numbers) => numbers.filter(num => num % 2 === 0);
  let evenNumbers = getevenNumber(numbers);
  console.log(evenNumbers);
  //q5
  let member = {
    firstname:'vinay',
    lastname :'kokkonda',
    age: '24',
    address: '880 s coit',
  };
  let {firstname, lastname} = member;
  console.log(firstname,lastname);
  
  
  
   //q8
   const name = 'vinay';
   const year =2;
   console.log(`my name is ${name},i completed my masters in ${year}`);
  
   //q9
  
  function* fibonacci(l) {
      let current = 0;
      let next = 1;
    
      while (current <= l) {
        yield current;
    
        const temp = current + next;
        current = next;
        next = temp;
      }
    }
    const l = 10;
  
    for (const num of fibonacci(l)) {
      console.log(num);
    }
  //q11
  class sumValues {
      static sumOfElements(numbers) {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
          sum += numbers[i];
        }
        return sum;
      }
    }
    const numbe = [5, 6, 7, 8, 9, 10];
    const sum = sumValues.sumOfElements(numbe);
    console.log(`Sum of Values is: ${sum}`);
    //q12
    let check = [4,5,6,7,8,,9];
    console.log(check.includes(4));
    //q14
    import reverse from './reverse.js';
  
    let words = 'javascript';
    console.log(reverse(words));
  
    //q15
    let car = 'kia';
  
    function time (callback,delay) {
    setTimeout (callback,delay)
    }
  
    function setTime(){
      console.log(car);
    }
    time(setTime, 5000);
  
   
  
    
    
    
    
    
    
    