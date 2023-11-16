function soletrar(nome: String) {
    const nomeSoletrado = nome.split('').join('-')
    return nomeSoletrado
}
let palavra: String = 'terminei'

console.log(soletrar(palavra))