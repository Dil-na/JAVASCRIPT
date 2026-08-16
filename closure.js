// function outer() {
//     let name ="anu";
//     function inner (){
//         console.log(name);
//     }
//     return inner;
// }
// let result = outer();
// result();

function outer(){
     let count=0;
    function inner (){
        count++;
        console.log(count);
    }
    return inner;
}
const fn = outer();
fn();
fn();
fn();
fn();

function bankAccount() {
  let balance = 1000;

  return function(amount) {
    balance += amount;
    console.log("Balance:", balance);
  };
}

const account = bankAccount();

account(500);  // Balance: 1500
account(-200); // Balance: 1300