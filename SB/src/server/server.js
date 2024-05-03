import Express from 'express'
import ReactDOM from 'react-dom/server'
import { indexTemplate } from './indexTemplate'
import App from '../app'
import axios from 'axios'

// const Express = require('express')
const app = Express()

app.use('/static',Express.static('./dist/client'))

app.get('/',  (req, res) => {
  res.send(
    indexTemplate(ReactDOM.renderToString(App())
  ))
})

app.get('/auth',  (req, res) => {
  // req.query.code
  axios.post(
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://127.0.0.1:3000/auth`,
    {
      auth:{ username: '3JiIECYiumd7kyk561FaKA', password: "snLIH8CJkBgv5pOU7CCJ-M_qaKXLWQ"},
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    }
  )
  .then(({data}) => {
    res.send(
      indexTemplate(ReactDOM.renderToString(App()), data.access_token)
      )
      })
  .catch(console.log)
  
})

app.listen(3000, () => {
  console.log('server started on http://127.0.0.1:3000/')
})
