let x=Number("123")+7
console.log(x);



  
 function x(value) {
     if(!value){ 
        return"Inalid";      
     }
       return value;     
 }

    console.log(x(0))



 for (let i = 0; i < 10; i++) {
   console.log(i);
  
 }




 function evenNumbers(arr) {
       return arr.filter(num=>num% 2==0)  
 }

 const numbers =[1,2,3,4,5];
 const evenNumbers = evennumbers(numbers);
 console.log(evenNumbers);




 function merge(...arrays) {
   return [].concat(...arrays)
 }
 const arr1=[1,2,3];
 const arr2=[4,5,6];
 console.log(merge(arr1, arr2));







 function Day (daysnumber) {
   switch (daysnumber) {
      case 1:
          return "sunday";

      case 2: 
          return "monday";

      case 3: 
          return "tuesday";    
   
      case 4:
          return "wednesday";    

      case 5: 
          return "thursday";

      case 6: 
         return "friday";

      case 7: 
         return "saturday";

      default:
       return "Invalid day number"



   } 
 }    
  console.log(Day(2));




 


 let x=["a","ab","abc"];

 let lengths =x.map(x=>x.length);
 console.log(lengths);  





 function check (num) {  
        if (num % 3===0 && num % 5===0) {
         return "Divisible by both"   
        } else{
           return "Not divisible by both "    
        }
 }
 console.log(check(15)) 

 





 const x = () =>{
     return Math.pow (5,2)

 }
 console.log(x())




 let x = {
    name: "john",
    age: 25
 } 

 let output = x.name + " is " + x.age + " years old ";
 console.log(output);





 function sum(... nums) {
        return nums.reduce((acc, curr)=>acc + curr,0);
 }
 console.log(sum(1,2,3,4,5));




 function x() {
     return new Promise((resolve) => 
         setTimeout(() => resolve("Success"), 3000));
 }

 x().then((msg) => console.log(msg));









 const findLargest = (nums) => {
   let largest = nums[0];

   nums.forEach((num) => {
     if (num > largest) {
       largest = num;
     }
   });

   return largest;
 };

 console.log(findLargest([1, 3, 7, 2, 4])); 






 let x = {
     name:"john",
     age: 30
 }
 console.log(Object.keys(x));







 function x(str) {
   return str.split(" ");
       
 }
 console.log(x("the quick brown fox"));




 //BONUS

var createCount = function(init) { 
     let value =init;
      return {
         increment: function(){
            value += 1;
            return value;
         },
         decrement: function(){
            value -=1;
            return value;
         },
         reset: function(){
             value = init;
             return value;
         }
      };
 };

 const count = createCounter(5);

console.log(count. increment());
 console.log(count.reset()); 
 console.log(count.decrement());








var createCounter = function(init) { 
    let value =init;
     return {
        increment: function(){
           value += 1;
           return value;
        },
        decrement: function(){
           value -=1;
           return value;
        },
        reset: function(){
            value = init;
            return value;
        }
     };
};

const counter = createCounter(0);

console.log(counter. increment());
console.log(counter. increment());
console.log(counter.decrement());
console.log(counter.reset()); 
console.log(counter.reset()); 