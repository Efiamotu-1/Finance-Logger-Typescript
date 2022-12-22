// let character = 'mario'
// let age = 20

// Checking for types
// const circ = (diameter: number) => {
//     return diameter * Math.PI
// } 

// console.log(circ(7.5))
 

// Arrays 
const names = ['yoshi', 'ryu', 'mario']

names.push('john')
// names.push(20)
// names[0] = true

const numbers = [10, 20, 30]

numbers.push(40)
// numbers.push('read')
// numbers[3] = false

// const mixed = ['string', 30, 'play', true]

// mixed.push(40)
// mixed.push('grown')
// mixed[3] = false

// Objects 

let ninjas = {
    name: 'yoshi',
    belt: 'black',
    age: 30 
}

ninjas.age = 40
ninjas.belt = 'blue'
// ninjas.name = false

ninjas = {
    name: 'mario',
    belt: 'yellow',
    age: 20,
    // skills: ['fighting', swimming] 
}

// Explicit types
let character: string
let age: number
let isLoggedIn: boolean

age = 30
isLoggedIn = true

let people:string[] = []

people.push('johnson')

let mixed:(string|boolean|number)[] = []

mixed.push('hello')
mixed.push(20)
mixed.push(true)
console.log(mixed)

let number:string|number

number = 123
number = '123'

let objectOne: object

objectOne = {
    name: 'yoshi', age: 30
}

let objectTwo: {
    name: string,
    age: number,
    isLoggedIn: boolean
}

objectTwo = {
    name: 'john',
    age: 30,
    isLoggedIn: true,
    // skills: []
}

// using dynamic (any) type i.e it will act like javascript would act

let person: any = 'shaun'
console.log(person)
person = 11
console.log(person)
person = true
console.log(person)

let array:any[] = []

array.push('hello')
array.push(20)
array.push(true)
console.log(array)

let obj: {
    name: any,
    age: any,
    belt: any
}

obj = {
    name: 'mario',
    age: 20,
    belt: 'black'
}
console.log(obj)

obj = {
    name: 20,
    age: 'mario',
    belt: false
}
console.log(obj)

// functions in ts

let greet: Function;

greet = () => {
    console.log('welcome!')
}

// greet = 'some'

const add = (a: number, b: number, c: number|string = 10) => {
    console.log(a)
    console.log(b)
    console.log(c)
    return a + b
}  

add(5, 4, '20')

let result = add(10, 7)
console.log(result)

// type aliases;

type stringOrNum = string|number
type objAndName = {user: string, uid: stringOrNum}

// function signature
// test 1
let greeting: (first: string, last: string) => void
greeting = (name: string, person: string) => {
    console.log(`${name}, ${person} `)
}

// test 2
let calc: (a: number, b: number, c: string) => number
 calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo
    }
    return numTwo - numOne
}

// test 3
let logDetails: (obj: {name: string, age: number}) => void
    type person = {name: string, age: number}
    logDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`)
}