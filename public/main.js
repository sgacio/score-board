// setting the constants for team two //
// const teamTwoInput = document.querySelector('.team-2-input')

// const teamTwoName = document.querySelector('.team-2-name')

// const teamTwoScore = document.querySelector('.team-2-score')

// const teamTwoUpdateName = document.querySelector('.update-team-2-name')

// const team2AddButton = document.querySelector('.team-2-add-1-button')

// const team2SubButton = document.querySelector('.team-2-subtract-1-button')

// team 1 functions  and constants //
const team1UpdateName = () => {
  console.log('New name was typed into box')

  const currentName = document.querySelector('.team-1-name')

  const team1Input = document.querySelector('.team-1-input')

  currentName.innerHTML = team1Input.value
}

const team1AddButton = () => {
  console.log('Button was clicked')

  const currentScore = document.querySelector('.team-1-score').textContent

  const newScore = parseInt(currentScore) + 1

  document.querySelector('.team-1-score').textContent = newScore
}

const team1SubButton = () => {
  console.log('Button was clicked')

  const currentScore = document.querySelector('.team-1-score').textContent

  const newScore = currentScore - 1

  document.querySelector('.team-1-score').textContent = newScore
}

// team 2 functions and constants //

// team 1 events //

document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', team1AddButton)

document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', team1SubButton)

document
  .querySelector('.update-team-1-name')
  .addEventListener('click', team1UpdateName)

document.addEventListener('DOMContentLoaded', () => {})