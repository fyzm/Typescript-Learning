class Log<T> {
    run(value: T) {
        console.log(value)
        return value
    }
}
let log1 = new Log<number>()

log1.run(1)

let log2 = new Log()
log2.run('2')

interface Length {
    length: number
}

function log<T extends Length>(value: T): T {
    console.log(value,value.length)
    return value
}
log([1])
log('123')

log({length: 1})









