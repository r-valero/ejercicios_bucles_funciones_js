/* Ejercicio 12
Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.
Considera el caso de múltiples mutantes con el mismo poder. */
const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
]

function findMutantByPower(mutants, power) {
  const mutantes = []
  for (const m of mutants) {
    if (m.power === power) {
      mutantes.push(m.name)
    }
  }
  if (mutantes.length > 0) {
    return `Hay ${
      mutantes.length
    } mutante(s) con el poder «${power}»: ${mutantes.join(', ')}.`
  } else {
    return `No se encontró ningún mutante con el poder «${power}».`
  }
}
console.log(findMutantByPower(mutants, 'telepathy'))
console.log(findMutantByPower(mutants, 'programar en JavaScript'))
