const { translate } = require('./message.controller')

const responseData = (extendsData, status = null) => {
    if (typeof extendsData === 'string') {
        extendsData = { message: extendsData };
    }

    if (typeof status === 'boolean') {
        extendsData.status = status;
    }

    const jsonData = Object.assign(
        {
            status: false,
            message: null,
            totalRow: 0,
            rowsPerPage: null,
            data: {},
        },
        extendsData,
    );
    if (jsonData.message && jsonData.message.match(/^[A-Z0-9_.]+$/g)) {
        jsonData.message = translate(jsonData.message);
    }
    // writeLogs(jsonData, false);
    return jsonData;
};

const responseSuccess = extendsData => responseData(extendsData, true);
const responseError = extendsData => responseData(extendsData, false);

module.exports = { responseData, responseSuccess, responseError };
