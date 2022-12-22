export class Invoice {
    // Initial method
    //    readonly client: string
    //    private details: string
    //    public amount: number
    //     constructor(c: string, d: string, a: number) {
    //         this.client = c
    //         this.details = d
    //         this.amount = a
    //     }
    // this only works when you used access mofifiers in the constructor
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes  ${this.amount} for ${this.details}`;
    }
}
