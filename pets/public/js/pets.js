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

const pageChangeBtn = document.querySelector('#change-title')
const pageTitle = document.querySelector('#page-title')

pageChangeBtn.addEventListener('click', (event) => {
  if (pageTitle.innerHTML === 'Pets') {
    pageTitle.innerHTML = 'Super Pets'
    event.target.innerHTML = 'Change title back'
  }
  else if (pageTitle.innerHTML === 'Super Pets') {
    pageTitle.innerHTML = 'Pets';
    event.target.innerHTML = 'Change Title'
  }
  else {
    console.error('I don\'t know what you clicked, but it wasn\'t what I expected')
  }
})
