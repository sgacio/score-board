const resetButton = () => {
  document.querySelector('.team-1-score').textContent = 0
  document.querySelector('.team-2-score').textContent = 0
  document.querySelector('.team-1-name').textContent = 'Team 1'
  document.querySelector('.team-2-name').textContent = 'Team 2'
  document.querySelector('.update-team-1-name').disabled = false
  document.querySelector('.team-1-add-1-button').disabled = false
  document.querySelector('.team-1-add-6-button').disabled = false
  document.querySelector('.team-1-subtract-1-button').disabled = false
  document.querySelector('.team-1-subtract-6-button').disabled = false
  document.querySelector('.update-team-2-name').disabled = false
  document.querySelector('.team-2-add-1-button').disabled = false
  document.querySelector('.team-2-add-6-button').disabled = false
  document.querySelector('.team-2-subtract-1-button').disabled = false
  document.querySelector('.team-2-subtract-6-button').disabled = false
  document.querySelector('.reset-button').classList.add('hide')
  document.querySelector('.team-1-name').classList.remove('you-win')
}

// team 1 functions  and constants //
const team1UpdateName = () => {
  console.log('New name was typed into box, button was clicked')

  const currentName = document.querySelector('.team-1-name')

  const team1Input = document.querySelector('.team-1-input')

  currentName.innerHTML = team1Input.value
}

const team1AddButton = () => {
  console.log('Button was clicked')

  const currentScore = document.querySelector('.team-1-score').textContent

  const newScore = parseInt(currentScore) + 1

  document.querySelector('.team-1-score').textContent = newScore
  if (newScore > 21) {
    document.querySelector('.team-1-score').textContent = 'You Win!'
    document.querySelector('.team-1-name').classList.add('you-win')
    document.querySelector('.reset-button').classList.remove('hide')
    document.querySelector('.update-team-1-name').disabled = true
    document.querySelector('.team-1-add-1-button').disabled = true
    document.querySelector('.team-1-add-6-button').disabled = true
    document.querySelector('.team-1-subtract-1-button').disabled = true
    document.querySelector('.team-1-subtract-6-button').disabled = true
    document.querySelector('.update-team-2-name').disabled = true
    document.querySelector('.team-2-add-1-button').disabled = true
    document.querySelector('.team-2-add-6-button').disabled = true
    document.querySelector('.team-2-subtract-1-button').disabled = true
    document.querySelector('.team-2-subtract-6-button').disabled = true
  } else {
    document.querySelector('.team-1-score').textContent = newScore
  }
}

const team1SubButton = () => {
  console.log('Button was clicked')

  const currentScore = document.querySelector('.team-1-score').textContent

  const newScore = currentScore - 1

  document.querySelector('.team-1-score').textContent = newScore
  if (newScore < 0) {
    document.querySelector('.team-1-score').textContent = 0
  } else {
    document.querySelector('.team-1-score').textContent = newScore
  }
}

const team1Add6Button = () => {
  console.log('Button was clicked')

  const currentScore = document.querySelector('.team-1-score').textContent

  const newScore = parseInt(currentScore) + 6

  document.querySelector('.team-1-score').textContent = newScore
  if (newScore > 21) {
    document.querySelector('.team-1-score').textContent = 'You Win!'
    document.querySelector('.team-1-name').classList.add('you-win')
    document.querySelector('.reset-button').classList.remove('hide')
    document.querySelector('.update-team-1-name').disabled = true
    document.querySelector('.team-1-add-1-button').disabled = true
    document.querySelector('.team-1-add-6-button').disabled = true
    document.querySelector('.team-1-subtract-1-button').disabled = true
    document.querySelector('.team-1-subtract-6-button').disabled = true
    document.querySelector('.update-team-2-name').disabled = true
    document.querySelector('.team-2-add-1-button').disabled = true
    document.querySelector('.team-2-add-6-button').disabled = true
    document.querySelector('.team-2-subtract-1-button').disabled = true
    document.querySelector('.team-2-subtract-6-button').disabled = true
  } else {
    document.querySelector('.team-1-score').textContent = newScore
  }
}

const team1Sub6Button = () => {
  console.log('Button was clicked')

  const currentScore = document.querySelector('.team-1-score').textContent

  const newScore = currentScore - 6

  document.querySelector('.team-1-score').textContent = newScore
  if (newScore < 0) {
    document.querySelector('.team-1-score').textContent = 0
  } else {
    document.querySelector('.team-1-score').textContent = newScore
  }
}

// team 2 functions and constants //

const teamTwoUpdateName = () => {
  console.log('Name was typed into box, button clicked')

  const currentName = document.querySelector('.team-2-name')

  const team2Input = document.querySelector('.team-2-input')

  currentName.innerHTML = team2Input.value
}

const team2AddButton = () => {
  console.log('Button was clicked')

  const currentScore = document.querySelector('.team-2-score').textContent

  const newScore = parseInt(currentScore) + 1

  document.querySelector('.team-2-score').textContent = newScore
  if (newScore > 21) {
    document.querySelector('.team-2-score').textContent = 'You Win!'
    document.querySelector('.team-2-name').classList.add('you-win')
    document.querySelector('.reset-button').classList.remove('hide')
    document.querySelector('.update-team-1-name').disabled = true
    document.querySelector('.team-1-add-1-button').disabled = true
    document.querySelector('.team-1-add-6-button').disabled = true
    document.querySelector('.team-1-subtract-1-button').disabled = true
    document.querySelector('.team-1-subtract-6-button').disabled = true
    document.querySelector('.update-team-2-name').disabled = true
    document.querySelector('.team-2-add-1-button').disabled = true
    document.querySelector('.team-2-add-6-button').disabled = true
    document.querySelector('.team-2-subtract-1-button').disabled = true
    document.querySelector('.team-2-subtract-6-button').disabled = true
  } else {
    document.querySelector('.team-2-score').textContent = newScore
  }
}

const team2SubButton = () => {
  console.log('Button was clicked')

  const currentScore = document.querySelector('.team-2-score').textContent

  const newScore = currentScore - 1

  document.querySelector('.team-2-score').textContent = newScore
  if (newScore < 0) {
    document.querySelector('.team-2-score').textContent = 0
  } else {
    document.querySelector('team-2-score').textContent = newScore
  }
}

const team2Add6Button = () => {
  console.log('Button was clicked')

  const currentScore = document.querySelector('.team-2-score').textContent

  const newScore = parseInt(currentScore) + 6

  document.querySelector('.team-2-score').textContent = newScore
  if (newScore > 21) {
    document.querySelector('.team-2-score').textContent = 'You Win!'
    document.querySelector('.team-2-name').classList.add('you-win')
    document.querySelector('.reset-button').classList.remove('hide')
    document.querySelector('.update-team-1-name').disabled = true
    document.querySelector('.team-1-add-1-button').disabled = true
    document.querySelector('.team-1-add-6-button').disabled = true
    document.querySelector('.team-1-subtract-1-button').disabled = true
    document.querySelector('.team-1-subtract-6-button').disabled = true
    document.querySelector('.update-team-2-name').disabled = true
    document.querySelector('.team-2-add-1-button').disabled = true
    document.querySelector('.team-2-add-6-button').disabled = true
    document.querySelector('.team-2-subtract-1-button').disabled = true
    document.querySelector('.team-2-subtract-6-button').disabled = true
  } else {
    document.querySelector('.team-2-score').textContent = newScore
  }
}

const team2Sub6Button = () => {
  console.log('Button was clicked')

  const currentScore = document.querySelector('.team-2-score').textContent

  const newScore = currentScore - 6

  document.querySelector('.team-2-score').textContent = newScore
  if (newScore < 0) {
    document.querySelector('.team-2-score').textContent = 0
  } else {
    document.querySelector('.team-2-score').textContent = newScore
  }
}

// team 1 events //
document
  .querySelector('.update-team-1-name')
  .addEventListener('click', team1UpdateName)

document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', team1AddButton)

document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', team1SubButton)

document
  .querySelector('.team-1-add-6-button')
  .addEventListener('click', team1Add6Button)

document
  .querySelector('.team-1-subtract-6-button')
  .addEventListener('click', team1Sub6Button)

// team 2 events //
document
  .querySelector('.update-team-2-name')
  .addEventListener('click', teamTwoUpdateName)

document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', team2AddButton)

document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', team2SubButton)

document
  .querySelector('.team-2-add-6-button')
  .addEventListener('click', team2Add6Button)

document
  .querySelector('.team-2-subtract-6-button')
  .addEventListener('click', team2Sub6Button)

document
  .querySelector('.reset-button')
  .addEventListener('click', resetButton)

document.addEventListener('DOMContentLoaded', () => {})