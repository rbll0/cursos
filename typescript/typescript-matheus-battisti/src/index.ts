// string, number, boolean,...
const x:number = 25

console.log(x)

// inferencia x annotation
const y = 12;
// y = "teste"

const z: number = 12;


// tipos básicos
const firstName: string = "Matheus"
const age: number = 30
const isAdmin: boolean = true

// String != string

console.log(typeof firstName)

// object
const myNumbers: number[] = [1,2,3]

console.log(myNumbers)
console.log(myNumbers.length)
// console.log(myNumbers.toUpperCase())
console.log(firstName.toLowerCase())
myNumbers.push(5)

// Tuplas
// biome-ignore lint/style/useConst: <explanation>
let myTuple: [number, string, string[]]

// myTuple = [5, 5, ["a", "b"]]
myTuple = [5, "teste", ["a", "b"]]

// object literals -> {props: value}
const user: {name: string, age: number} = {
    name: "Gustavo",
    age: 18
}

// user.job = "Programador"

// any
// let a:any = 0

// a = 0
// a = "teste"
// a = true


// union type

let id: string | number = "10"

id = 200

// type alias
type myIdType = number | string
const userId: myIdType = 10
const productId: myIdType = "001"
const shirdId: myIdType  = 123

// enum
// tamanho de roupas (size: Médio, size: Pequeno)
enum Size {
    P = "Small",
    M = "Medium",
    G = "Large"
}

const camisa = {
    name: "Camisa oversized",
    size: Size.G,
}

// literal types
let teste: "autenticado" | null
teste = "autenticado"
teste = null 

// funcoes 
const sum = (a: number, b: number) => {
    return a + b
}

console.log(sum(12, 12))

function sayHelloTo(name: string): string {
    return `Hello ${name}`
}

console.log(sayHelloTo("Gustavo"))

function logger(msg:string): void {
    console.log(msg)
}

logger("Teste!")

function greeting(name: string, greet?: string) {
    if(greet) {
        console.log(`Olá ${greet} ${name}`)
        return
    }
    console.log(`Olá ${name}`)
}

greeting("José")
greeting("Gustavo", "Sir")

// interfaces
interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctionParams) {
    return nums.n1 + nums.n2
}

console.log(sumNumbers({n1: 1, n2: 2}))

function multiplyNumbers(nums: MathFunctionParams) {
    return nums.n1 * nums.n2
}

const someNumbers: MathFunctionParams = {
    n1: 5,
    n2: 10,
}

console.log(multiplyNumbers(someNumbers))

// Narrowing
// Checagem de tipos

function doSomething(info:number | boolean) {
    if(typeof info === "number") {
        console.log(`O número é ${info}`)
        return
    }
    console.log("Não foi passado um número")
}

doSomething(5);
doSomething(true)

// Generics

function showArraysItems<T>(arr: T[]) {
    for (const item of arr) {
        console.log(`ITEM: ${item}`)
    }
}

const a1 = [1,2,3]
const a2 = ["a","b","c"]

showArraysItems(a1)
showArraysItems(a2)

class User {
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }

    showUserName() {
        console.log(`O nome do usuário é ${this.name}`)
    }

    showUserRole(canShow: boolean): void {
        if(canShow) {
            console.log(`O usuário é ${this.role}`)
            return
        }

        console.log("Informação Restrita")
    }
}

const zeca  = new User("Zéca", "Admin", true)
console.log(zeca)
zeca.showUserName()
zeca.showUserRole(false)


// interfaces em classes
interface IVehicle {
    brand: string
    showBrand(): void
}

class Car implements IVehicle {
    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand
        this.wheels = wheels
    }

    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`)
    }
}

const fusca = new Car("FIAT", 4)
fusca.showBrand()


// herança 
class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand,wheels)
        this.engine = engine
    }
}

const a4 = new SuperCar("Audi", 4, 2.0)

console.log(a4)
a4.showBrand()

// decorators
function BaseParameters() {
    // biome-ignore lint/suspicious/noExplicitAny: Decorator pattern requires any for constructor args
    return <T extends {new (...args: any[]): object}>(cls: T) => {
        return class extends cls {
            id = Math.random()
            createdAt = new Date()
        }
    }
}

@BaseParameters()
class Person {
    name

    constructor(name: string) {
        this.name = name
    }
}

const sam = new Person("Sam")
console.log(sam)
