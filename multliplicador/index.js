const fs = require('fs')

const multiplicar = (base) => {

  let resultado = ""
  
  console.log(`tabla del ${base}`)
  for(let i = 0; i<= 10; i++) {
    resultado += `${base} * ${i} = ${base * i}\n`
  }
  console.log(`${resultado}`)
  
  fs.writeFileSync(`tablas/tabla-del-${base}.txt`, resultado)
}

module.exports = {
  multiplicar
}