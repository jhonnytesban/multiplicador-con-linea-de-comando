const fs = require('fs')
const {logica} = require('./logica')

const multiplicar = (base, limite, visualizar) => {

  
  
  const resultado = logica(base, limite)
  
  if (visualizar) {
    console.log(`tabla del ${base}`)
    console.log(`${resultado}`)
  }
  
  fs.writeFile(`tablas/tabla-del-${base}.txt`, resultado, (err) => {
    if (err) throw err;
    console.log(`Archivo tabla-del-${base} creado!!`)
  })
}

module.exports = {
  multiplicar
}