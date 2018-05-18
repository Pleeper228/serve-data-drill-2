var express = require('express')
var cors = require('cors')

const data = [
  {
    id: 1,
    full_name: 'Kyle Coberly',
    title: 'Faculty Director',
    number_of_dogs: 0
  },
  {
    id: 2,
    full_name: 'Danny Fritz',
    title: 'Lead Instructor',
    number_of_dogs: 0
  },
  {
    id: 3,
    full_name: 'CJ Reynolds',
    title: 'Lead Instructor',
    number_of_dogs: 0
  },
  {
    id: 4,
    full_name: 'Brooks Patton',
    title: 'Lead Instructor',
    number_of_dogs: 0
  },
  {
    id: 5,
    full_name: 'Roberto Ortega',
    title: 'Lead Instructor',
    number_of_dogs: 0
  },
  {
    id: 6,
    full_name: 'Chad Drummond',
    title: 'Instructor',
    number_of_dogs: 0
  },
  {
    id: 7,
    full_name: 'Kim Schlesinger',
    title: 'Instructor',
    number_of_dogs: 0
  },
  {
    id: 8,
    full_name: 'Peter Ostiguy',
    title: 'Associate Instructor',
    number_of_dogs: 0
  },
  {
    id: 9,
    full_name: 'Cass Torske',
    title: 'Resident',
    number_of_dogs: 0
  },
  {
    id: 10,
    full_name: 'Matt Winzer',
    title: 'Resident',
    number_of_dogs: 0
  },
  {
    id: 11,
    full_name: 'Aaron Goodman',
    title: 'Resident',
    number_of_dogs: 0
  },
  {
    id: 12,
    full_name: 'Michelle Bergquist',
    title: 'Resident',
    number_of_dogs: 0
  }
]

let port = proccess.env.PORT || 3000

function findById(data, id) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      return data[i]
    }
  }
  return null
}

const app = express()
app.use(cors())

app.get('/', (request, response) => {
  response.json({data})
})

app.get('/:id', (request, response) => {
  var result = findById(data, request.params.id)
  if (!result) {
    response.status(404).json({
      error: {
        message: 'No record found!'
      }
    })
  } else {
    response.json({data: result})
  }
})

app.listen(port)
