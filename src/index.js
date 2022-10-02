const express = require('express')
const { translate } = require('./message.controller')
const { responseData, responseSuccess, responseError } = require('./responseSuccess.controller')
const { middleware } = require('./middleware')
const { response } = require('./ulti')
const app = express()
const port = 3000

app.get('/test-success', middleware, response, (req, res) => {
    console.log({
        message: translate('USER.ACTIVITY_CREATED', { username: "123", actionDate: "1" })
    })
    res.apiResponse(200, responseSuccess(translate('USER.ACTIVITY_CREATED', { username: "123", actionDate: "1" })));
})

app.get('/test-err', middleware, response, (req, res) => {

    res.apiThrowError(400, responseError('PROJECT.NOTHING_TO_CREATE_MSG'))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
