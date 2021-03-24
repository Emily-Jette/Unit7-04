alert('Answer must be in lowercase')
// the following code takes the age and day the user inputs and decides if they are eligible for student pricing.
let day = null
let age = 0

document.getElementById('button').addEventListener('click', pricing)

function pricing () {
  age = document.getElementById('age').value
  age = parseInt(age)
  day = document.getElementById('day').value
  if (age <= 5 || age >= 95) {
    document.getElementById('answer').innerHTML = 'It is free for you to attend the museum.'
  } else if ((age > 12 && age < 21) || (day === 'tuesday' || day === 'thursday')) {
    document.getElementById('answer').innerHTML = 'You are eligible for student pricing. '
  } else {
    document.getElementById('answer').innerHTML = 'You are not eligible for student pricing'
  }
}
