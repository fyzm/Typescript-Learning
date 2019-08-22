/// <reference path="a.ts" />

namespace Shape {
    export function square(x: number) {
        return x * x;
    }
}

Shape.cricle(1);
Shape.square(1);

console.log(Shape.cricle(1))
console.log(Shape.square(1))