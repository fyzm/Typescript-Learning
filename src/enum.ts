//number enum
enum Role {
    Reporter = 1,
    Developer,
    Maintainer,
    Owner,
    Guest
}
console.log(Role.Reporter)
console.log(Role)
//string enum
enum Message {
    Suceess = '',
    Fail = ''
}

//异构枚举

enum Answer {
    N,
    Y = 'Yes'
}

//
enum Char {
    a,
    b = Char.a,
    c = 1 + 3,
    d = Math.random(),
    e = '123'.length
}

console.log(Char.a)
console.log(Char.c)
console.log(Char.d)
//常量枚举

const enum Month {
    Jan,
    Feb,
    Mar
}

enum E {a,b}
enum F {a = 0,b = 1}
enum G {a = 'apple',b = 'bannana'}

let e: E = 3
let f: F = 3
console.log(e)
let e3: E.a = 1
e === e3









