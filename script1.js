
// let arr = [1,2,false,"hello", 24, "world", undefined, null, "error", 22]

// let num = []

// arr.filter(item => {if (typeof item === "number") {
//     num.push(item)
//     if (num.length > 5) {
//         console.log("good");
//     } else {
//         console.log("bad");
//     }
// }else{

// }})



let arr = [4, 16, 19, 22, 11, 144, 967, 19124]

let even = []
let odd = []

arr.filter(item => {
    if (item % 2 === 0) {
        even.push(item)
    }else{
        odd.push(item)
    }
})

console.log(odd);