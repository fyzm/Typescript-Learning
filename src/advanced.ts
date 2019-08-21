let a = 1
let b = [1]

let c = (x = 1) => x + 1

// Window.onkeydown = (event) => {
//     console.log(event.button)
// }

interface Foo {
    bar: number
}

//let foo = {} as Foo

let foo: Foo = {
    bar: 1
}
//foo.bar = 1

let s: string = 'a'
s = null


//interface type

interface X {
    a: any;
    b: any;
}

interface Y {
    a: any;
    b: any;
    c: any;
}

let x1: X = {a: 1,b: 2}

let y1: Y = {a: 1,b: 2,c: 3}

x1 =y1


//Function compatibility

type Handler = (a: number,b: number) => void
function hof(handler: Handler) {
    return handler
}
//Number of parameters

let handler1 = (a: number) => {}
hof(handler1)
let handler2 = (a:number,b: number,c: number) => {}

//hof(handler2)
//selected parameters
let a1 = (p1: number,p2: number) => {}
let b1 = (p1?: number,p2?: number) => {}
let c1 = (...args: number[]) => {}

a1 = b1
a1 = c1
b1 = c1
b1 = a1
c1 = a1
c1 =  b1

//2)parameters type
let handler3 = (a: string) => {}

interface Point3D {
    x: number;
    y: number;
    z: number;
}


interface Point2D {
    x: number;
    y: number;
}
let p3d = (point: Point3D) => {}
let p2d = (point: Point2D) => {}

p3d = p2d
p2d = p3d

//return value

let f1 = () => ({name: 'Alice'})
let g1 = () => ({name: 'Alice',location: 'Beijing'})
f1 = g1


function overload(a: number,b: number): number;
function overload(a: string,b: number): string;
function overload(a: any, b: any): any {}

//enum 

enum Fruit {Apple,Banana}
enum Color {Red,Yellow}

let fruit: Fruit.Apple = 3
let no: number = Fruit.Apple
//let color: Color.Red = Fruit.Apple



//type 
class A {
    constructor(p: number,q: number) {}
    id: number = 1
    private name: string = ' '
}
class B {
    static s = 1
    constructor(p: number) {}
    id: number = 2
    private name: string = ' '
}
let aa = new A(1,2);
let bb = new B(1)

//aa = bb
//bb = aa

class C1 extends A {}
let cc = new C1(1,2)

aa = cc
cc = aa

//泛型兼容性
interface Empty<T> {
    value: T
}

// let obj1: Empty<number> = {}
// let obj2: Empty<string> = {}

// obj1 = obj2


let log11 = <T>(x: T): T => {
    console.log('x')
    return x
}
let log22= <U>(y: U): U => {
    console.log('y')
    return y
}

log11 = log22



































































































