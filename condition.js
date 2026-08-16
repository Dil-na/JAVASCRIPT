//if statement

// let age = 30
// if(age>=18){
//     console.log("You can vote");
// }

//if else statement

// let age=10
// if(age>=18){
//     console.log("You can vote");
// }else{
//     console.log("Not Eligible for vote");
// }

//if else if statement

// let age=18
// if(age>=18){
//     console.log("You can vote");
// }else if (age>18){
//     console.log("You can vote....");
// }else{
//     console.log("Not Eligible for vote");
// }

// //nested if

// const a = 123;
// const b = 964;
// const c = 789;
// if(a==b){
//     if (a>c){
//         console.log("a is the largest number!")
//     }else{
//         console.log("c is the largest number!")
//     }
// }else{
//     if(b>c){
//         console.log("b is the largest number!")
//     }else{
//         console.log("c is the largest number!")
//     }
// }

//switch statement

// let day = 7; 
// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid entry")
// }

let day = "Wednesday" //monday - friday (weekday)
                      //saturday - sunday (weekend)
switch(day){
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("weekday")
        break;
    case "Saturday":
    case "Sunday":
        console.log("weekend")
        break;
    default:
        console.log("Invalid entry")
}