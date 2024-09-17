// always import local, core and third-party modules at the top of the file
const os = require('os') // os stands for operating system
const fs = require('fs') // fs stands for file system

const {add, subtract} = require('./functions')
// const myFunctions = require('./functions')

////// LOCAL MODULES

// console.log(myFunctions.add(5,5))
// console.log(myFunctions.subtract(10,3))

// console.log(add(5,5))
// console.log(subtract(10,3))

////// CORE MODULES
let userDetails = os.userInfo().username // gets username of the user currently logged into the operating system

fs.appendFile('oh-hi.txt', `Hello 2 ${userDetails}`, (err) => {
    if (err) {
        console.log("oops")
    }
})