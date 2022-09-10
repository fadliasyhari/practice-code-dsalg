const data = [
    {
      name: "Jay",
      GPA: 3.8
    }, {
      name: "Robert",
      GPA: 2.4
    }, {
      name: "Zoe",
      GPA: 2.7
    }, {
      name: "Gloria",
      GPA: 1.5
    }
  ]
  
  const messages = [
    '{name} GPA is {GPA}', '{GPA} is GPA for {name}', 'The principal announces {name} graduation with GPA {GPA} of 4.0', 'After 3 years {name} graduated with GPA {GPA} of 4.0'
  ]
  
  module.exports = { messages, data }