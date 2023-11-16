const usuarios = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
]


type lista = { nome: String, idade: Number, status: boolean }

const filtrarUsusario = (busca: lista[], nome: String) => {

    const array: any = []

    for (let i of busca) {
        const procurarString1 = i.nome.indexOf(nome.slice(0, 1).toUpperCase() + nome.slice(1))
        const procurarString2 = i.nome.indexOf(nome.slice(0, 1).toLowerCase() + nome.slice(1))
        if (procurarString1 === 0) {
            array.push(i)
        } else if (procurarString2 === 0) {
            array.push(i)
        }
    }
    return array
}

console.log(filtrarUsusario(usuarios, 'é'))


