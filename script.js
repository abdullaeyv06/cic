// let age = prompt("pin")

// while (age === 7777) {
//     console.log(age); 

// } 
// var step;


// let ask 
// for ( let step = 0; step < 3; step++) {
//     let pwd = 1234
// ask=+prompt("num") 
// ask!=pwd

// }

// let pwd = 33
// let step = 0

// do { 
//     ask=+prompt("num")
//     step++ 
// step<3
// } while (ask!=pwd );


// let pwd = 7777

// let vopros 
// do { 
//     vopros=prompt("number")
// } while (vopros!=pwd);  

let pwd = 1234
let ask
let num = 0;

do {
    ask = +prompt("write a pin!")
    num++;
    if (ask != pwd) {
        if (num > 3) {
            alert("you tried  more than 3 times")
            break;
        } else { 
        
        }
    } else {
alert ("right")
break;
    }

} while (true);


