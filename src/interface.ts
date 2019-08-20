interface List {
    id: number;
    name: string; 
}

interface Result {
    data: List[]
}

function render(result: Result) {
    result.data.forEach((value) => {
        console.log(value.id,value.name)
    })
}

let result = {
    data: [
        {id: 1,name: 'A'},
        {id: 2,name: 'B'}
    ]
}
render(result)

interface StringArray {
    [index: number]: string
}

let chars: StringArray = ['A','B']
interface Names {
    [x: string]: string;
    // y: number
    [z: number]: string
}

// interface Add {
//     (x: number,y: number):number
// }

type Add = (x: number,y: number) => number

let add1: Add = (a,b) => a + b

interface Lib {
    (): void;
    version: string;
    doSomething(): void
}


function getLib() {
  let lib: Lib = (() => {}) as Lib ;
  lib.version = '1.0';
  lib.doSomething = () => {}
  return lib;
}

let lib1 = getLib();
lib1();
lib1.doSomething();
let lib2 = getLib();

























