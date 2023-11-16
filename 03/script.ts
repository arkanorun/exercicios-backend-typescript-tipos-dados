
let b = [1, 5, 2] //se eu ponho b: Number[] da erro na linha 6! 

for (let i = 0; i < b.length; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${b[i]} x ${j} = ${b[i] * j}`)
    }
    console.log('---------------')
    console.log()
}