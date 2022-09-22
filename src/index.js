const express = require('express')
const { translate } = require('./controller')
const { middleware } = require('./middleware')
const app = express()
const port = 3000

app.get('/test', middleware, (req, res) => {
    console.log({
        message: translate('USER.ACTIVITY_CREATED', { username: "123", actionDate: "1" })
    })
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
