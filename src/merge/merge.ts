interface A {
    x: number;
    foo (bar: number): number;//5
    foo (bar: 'a'): number;//2
}

interface A {
    y: number;
    foo (bar: string): string;//3
    foo (bar: number[]): number[];//4
    foo (bar: 'b'): number;//1
}

// let a9: A  = {
//     x: 1,
//     y: 1,
//     foo(bar: any) {
//         return bar
//     }
// }
function Lib() {}
namespace Lib {
    export let version = '1.0'
}
console.log(Lib.version)

class C2 {}
namespace C2 {
    export let state = 1
}
console.log(C2.state)

enum Color {
    Red1,
    Yellow1,
    Bule
}

namespace Color {
    export function mix() {}
}
console.log(Color)








