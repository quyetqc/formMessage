const { loadLanguage } = require('./message.controller')

const middleware = async (req, res, next) => {
    loadLanguage(req.headers.lang ? req.headers.lang : 'vi')
    next();
}

module.exports = {
    middleware,
}
