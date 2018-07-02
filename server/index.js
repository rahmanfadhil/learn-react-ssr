import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../src/App'
import express from 'express'
import path from 'path'
import fs from 'fs'
const app = express()

app.get('/dist/client.bundle.js', (req, res) => res.sendFile(path.resolve(__dirname, '../dist/client.bundle.js')))

app.get('**', (req, res) => {
  let html = renderToString(<App req={req}/>)
  fs.readFile(path.resolve(__dirname, '../index.html'), 'utf8', (err, data) => {
    if(err) return res.send('ERROR! ' + err)
    res.send(data.replace('<div id="root"></div>', `<div id="root">${html}</div>`))
  })
})

app.listen(8000, () => console.log('[server] listening...'))