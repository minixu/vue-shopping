const express = require('express')
const env = process.env.NODE_ENV || 'development'
const app = express()

app.use(express.static('./dist'))

const server = app.listen(8082, () => {
  console.log(`Express started in ${app.get('env')} mode on http://localhsot:8082`)
})
