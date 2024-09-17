// Global Scope
let age = 21 // This is a global variable
console.log(`My age is ${age}`)

const callAge = () => {
    console.log(`My age is ${age}`)
}
callAge()

// Function Scope
let age = 21 // This is a global variable
console.log(`My age is ${age}`)

const callAge = () => {
    let name = "Alex" // Function scope Variable
    console.log(`My age is ${age}`)
    console.log(`My name is ${name}`)
}
callAge()
console.log(`Hello my name is ${name}`) // ReferenceError: name is not defined


// // Block Scope
// function startLet() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i)
//     }
//     console.log(i)
// }
// startLet()

// function startVar() {
//     for (var i = 0; i < 6; i++) {
//         console.log(i)
//     }
//     console.log(i)
// }
// startVar()



// function startLet() {
//     for (let i = 0; i < 5; i++) {
//         if (true) {
//             let colour = "Red"
//             console.log(i, colour)
//         }
//     }
//     console.log(i,colour)
// }
// startLet()


// function startVar() {
//     for (var i = 0; i < 5; i++) {
//         if (true) {
//             var colour = "Blue"
//             console.log(i, colour)
//         }
//     }
//     console.log(i,colour)
// }
// startVar()



