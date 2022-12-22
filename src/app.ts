import { Invoice } from './classes/invoice.js'
import { ListTemplate } from './classes/listTemplate.js';
import { Payment } from './classes/payments.js'
import { HasFormatter } from './interfaces/HasFormatter.js';


// Learning to use interface

// let docOne: HasFormatter
// let docTwo: HasFormatter

// docOne = new Invoice('yoshi', 'web work', 250)
// docTwo = new Payment('mario', 'plumbing', 200)

// let docs: HasFormatter[] = []

// docs.push(docOne)
// docs.push(docTwo)

// console.log(docs)

// interface isPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): void;
// }

// const me: isPerson = {
//     name: 'shaun',
//     age: 30,
//     speak(text: string): void {
//         console.log(text);
//     },
//     spend(amount: number): number {
//         console.log('I want', amount)
//         return amount
//     }
// }

// console.log(me)

// const invOne = new Payment('mario', 'work on the mario website', 250)
// const invTwo = new Invoice('luigi', 'work on the luigi website', 300)

// console.log(invOne, invTwo)

// let invoices: Invoice[] = []



// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format())
//    })

const form = document.querySelector('.new-item-form') as HTMLFormElement
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement


// list template instance

const ul = document.querySelector('ul')!
const newListTemplate = new ListTemplate(ul)


form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    let doc: HasFormatter;

    if (type.value === 'payment') {
        doc = new Payment(tofrom.value,details.value, amount.valueAsNumber)
    }
    else {
        doc = new Invoice(tofrom.value,details.value, amount.valueAsNumber)
    }

        // Using tuples
        // let values: [string, string, number] = [tofrom.value,details.value, amount.valueAsNumber] 

        // if (type.value === 'payment') {
        //     doc = new Payment(...values)
        // }
        // else {
        //     doc = new Invoice(...values)
        // }
    
    newListTemplate.render(doc, type.value,'end')

})
