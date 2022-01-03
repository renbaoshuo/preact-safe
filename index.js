const preact = require('preact');
const htmlTags = require('html-tags');

/**
 * Exclude some key values in Object.
 * @param {Array<string>} keys keys to be excluded
 * @param {Object} object data to be transformed
 * @returns {Object} transformed data
 */
function exclude(keys, object) {
    let _object = {};

    for (let key of Object.keys(object)) {
        if (!keys.includes(key)) {
            _object[key] = object[key];
        }
    }

    return _object;
}

module.exports = htmlTags.reduce((tags, tag) => {
    tags[tag] = (props) =>
        preact.createElement(
            tag,
            Object.assign(exclude(['children'], props), {
                dangerouslySetInnerHTML: {
                    __html: props.children,
                },
            })
        );
    return tags;
}, {});
