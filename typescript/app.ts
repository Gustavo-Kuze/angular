let message: string = "E aí vei, belê?"
console.log(message)

let episode: number = 4
console.log(episode)
episode += 1

console.log(episode)

const bira: object = {
    name: "string",
    age: 2
}

const bira2 = { ...bira, height: 2 }
console.log(bira2["age"])

// parâmetros e retornos tipados

// ao invés de ": number =>", poderia ser "=> <number>"
const soma = (n1 = 0, n2?: number, ...ns: number[]): number =>
    n1 + (n2 || 0) + (ns.length > 0 ? ns.reduce((prev, next) => prev + next) : 0)

console.log("Soma:")
console.log(soma(23, 1, 2, 23, 3, 1231234, 5))
