
const whichGreeting = (timeOfDay) => {
    console.log(`Good ${timeOfDay}`)
}
const greet = (time, fn) => { 
    if (time < 1200) {
        fn("Morning")
    } 
    else if (time >= 1200 && time < 1800) {
        fn("Afternoon")
    } else {
        fn('Evening')
    }
}

greet(1400, whichGreeting)


const add = () => {
    return 10 + 3
}
console.log(add())

const add = (num1) => {
    return (num2) => {
        return num1 + num2
    }
}
console.log(add(2)(3))









