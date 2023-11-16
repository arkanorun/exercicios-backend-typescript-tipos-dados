let lote1 = {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}

type tipo = { produto: String, lote: Number, ano: Number, qtd: Number }

//erro se passar let i:Number ou let i:number
const etiquetas = (maquinas: tipo) => {
    let array: String[] = []

    for (let i: any = 1; i <= maquinas.qtd; i++) {
        array.push(`${maquinas.lote}-${maquinas.ano}-${(i.toString()).padStart(3, 0)}`)
    }
    return array
}

console.log(etiquetas(lote1))