const inquire = require('@inquirer/prompts') // must use require when importing packages with node

const answer = async() => {
    const name  = await  inquire.input({message: "Enter your name"})
    console.log(`Hello my name is ${name}`)
}
answer()
