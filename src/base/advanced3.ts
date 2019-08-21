let obj3 = {
    a: 1,
    b: 2,
    c: 3
}

function getValues<T,K extends keyof T>(obj3: T,keys: K[]): T[K][] {
    return keys.map(key => obj3[key])
}

console.log(getValues(obj3,['a','b']))
//console.log(getValues(obj3,['e','f']))


//key of T
interface Obj {
    a: number
    b: number
}

let key: keyof Obj

// T[k]
let value: Obj['a']
// T extends U










