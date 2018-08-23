const express = require('express')
const app = express()
const axios = require('axios')
// const authRoutes = requrie('./')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/auth/authorize', (req, res) => {
  const uri = 'https://secure.meetup.com/oauth2'
  axios
    .get(
      `${uri}/authorize?client_id=7dnkmfgs6sc9c9o0fhmictckk8&redirect_uri=http://localhost:3000/auth/callback`
    )
    .then(authRes => {
      console.log('the params: ', authRes)
      const code = authRes.params.code
      const clientSecret = 'k7aumgnfsqd98fnbcvc6rqjtfm'
      return axios
        .post(`${uri}/access`, {
          client_secret,
          redirect_uri: 'http://localhost:3000/auth/callback',
          code
        })
        .then(data => {
          console.log('the data: ', data)
          res.send(data)
        })
    })
    .catch(err => res.send(err))
})

app.get('/auth/callback', (req, res) => {
  console.log('callback...')
  //   console.log(req)
})

app.get('/api/people', (req, res) => {
  const people = [
    { name: 'HASAN', lastname: 'shahoud', age: 23 },
    { name: 'John', lastname: 'Doe', age: 32 },
    { name: 'Jane', lastname: 'Doe', age: 35 }
  ]
  res.status(200).json(people)
})

app.get('/', (req, res) => {
  const api = 'https://api.meetup.com/Learning-to-Code-Amsterdam/members'
  https
    .get(api, resp => {
      let data = ''

      // A chunk of data has been recei.
      resp.on('data', chunk => {
        data += chunk
      })

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        //	console.log(JSON.parse(data).explanation);
        data = JSON.parse(data)
        console.log(data)
        res.json(data)
      })
    })
    .on('error', err => {
      console.log('Error: ' + err.message)
    })
})

app.get('/m/:id', (req, res) => {
  const { id } = req.params
  console.log(id)
  const api = 'https://api.meetup.com/members/' + id
  https
    .get(api, resp => {
      let data = ''

      // A chunk of data has been recieved.
      resp.on('data', chunk => {
        data += chunk
      })

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        //	console.log(JSON.parse(data).explanation);
        data = JSON.parse(data)
        console.log(data)
        res.json(data)
      })
    })
    .on('error', err => {
      console.log('Error: ' + err.message)
    })
})
app.listen(5000, () => console.log('The server listening on port 5000!'))
