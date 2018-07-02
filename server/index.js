import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../src/App'
import express from 'express'
import path from 'path'
const app = express()

app.get('/bundle.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist/client.bundle.js"))
})

app.get('**', (req, res) => {
  let html = renderToString(<App req={req}/>)
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>React App</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `)
})

app.listen(8000, () => console.log('[server] listening...'))