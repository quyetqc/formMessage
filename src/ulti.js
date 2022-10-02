const { responseData, responseSuccess, responseError } = require('./responseSuccess.controller')

const response = async (req, res, next) => {
    res.apiThrowError = (statusCode, message) => {
        try {
            res._apiError = {
                statusCode,
                message: responseError(message),
            };
            throw new Error(JSON.stringify(responseError(message)));
        }
        catch (e) {
            return res.status(statusCode).json(JSON.parse(e.message));
        }

    };
    res.apiResponse = (statusCode, message) => {
        return res.status(statusCode).json(message);
    };
    next()
}
module.exports = {
    response
}