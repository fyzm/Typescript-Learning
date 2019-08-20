let bool: boolean = true
let num: number | undefined | null = 123
let string: string = 'abc'

//str = 123

//array
let arr1: number[] = [1,2,4]

let arr2: Array<number | string> = [1,2,3,'4']
// tuple
let tuple: [number,string] = [12,'12']

tuple.push(2)
console.log(tuple)
//tuple[2]


//function
let add = (x:number,y:number) => x + y




// object
let obj: {x: number,y: number} = {x: 1, y: 3}
obj.x = 3
console.log(obj.x)



// symbol
let s1: symbol = Symbol()
let s2 = Symbol()

console.log(s1 == s2)

//undefined ,null
let un: undefined = undefined
let nu: null = null

num = undefined
num = null
console.log(typeof(nu))
console.log(typeof(un))
//void

let noReturn = () => {}

//any
let x
x = 1
x = []
x = {}
x = () => {}


//never
let error = () => {
    throw new Error('error')
}
let endless = () => {
    while(true) {}
}



















