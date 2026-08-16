// function demo(...parameter){
//     //code
// }

// function demo(a,b,c,d){
//     console.log(a,b,c,d);
// }

// demo(10,20,30,40)

function demo(...numbers){
    console.log(numbers);
}

demo(10,20,30,40)

function fun(name,...mark){
    console.log(name);
    console.log(mark);
}
fun("anu", "10,20,30")