import { type } from "os";

//function define
function add2(x: number,y: number) {
    return x + y;
}
let add3: (x: number,y: number) => number

type add4 = (x: number,y: number) => number

interface add5 {
    (x: number,y: number): number
}

add2(1,2)

function add6(x: number,y?: number) {
    return y? x+y: x;
}
add6(1)

function add7(x: number,y = 0, z: number, q = 1) {
    return x + y + z + q;
}

console.log(add7(1,undefined,3))

function add8(x: number,...rest: number[]) {
    return x + rest.reduce((pre,cur) => pre + cur)
}

console.log(add8(1,2,3,4,5,6))

function add9(...rest: number[]): number;
function add9(...rest: string[]): string;

function add9(...rest: any[]): any {
    let first = rest[0];
    if (typeof first === 'string') {
        return rest.join('')
    }
    if (typeof first === 'number') {
        return rest.reduce((pre,cur) => pre + cur)
    }
}


console.log(add9(1,2,3))
console.log(add9('a','b','c'))


































