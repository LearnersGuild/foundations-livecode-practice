console.log('running pets.js')

const speciesCells = document.querySelectorAll('.species')
// console.log(speciesCells)

// Need to add an event listener to each cell
// individually; can't just say speciesCells.addEventListener
speciesCells.forEach((cell) => {
  cell.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = '#ddd'
  })
})

// change background color back to white on mouseout
speciesCells.forEach((cell) => {
  cell.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = '#fff'
  })
})
