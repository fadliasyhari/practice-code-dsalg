const { messages, data } = require('./initialData')
const idx = Math.floor(Math.random() * 4)

const main = (data, message) => {
  // code here
  
}

// don't change code below
const test = (func, result) => {
  return console.log(func === result)
}

test(main(data[idx], messages[0]), `${data[idx].name} GPA is ${data[idx].GPA}`)
test(main(data[idx], messages[1]), `${data[idx].GPA} is GPA for ${data[idx].name}`)
test(main(data[idx], messages[2]), `The principal announces ${data[idx].name} graduation with GPA ${data[idx].GPA} of 4.0`)
test(main(data[idx], messages[3]), `After 3 years ${data[idx].name} graduated with GPA ${data[idx].GPA} of 4.0`)