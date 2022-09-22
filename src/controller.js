const i18n = {
    language: 'vi',
    strings: {},
};

const getI18n = language => {
    if (['en', 'vi'].indexOf(language) === -1) {
        language = 'vi';
    }
    return require('./lang/' + language);
};

const loadLanguage = (language) => {
    i18n.language = language;
    i18n.strings = getI18n(language);
};

const translate = (str, placeholders = null, sourceStrings = null) => {
    sourceStrings = sourceStrings || i18n.strings;
    const [group, key] = str.split('.');
    let text = str;

    if (sourceStrings[group] && sourceStrings[group][key]) {
        text = sourceStrings[group][key];
    }

    if (placeholders !== null && typeof placeholders === 'object') {
        for (const name in placeholders) {
            text = text.replace('%' + name + '%', placeholders[name], text);
        }
    }

    return text.replace(/_EOL_/g, '\n');
};

module.exports = {
    translate,
    loadLanguage
}
