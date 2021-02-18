module.exports = function(copy) {
    const obj = {};
    for (const [key, name] of Object.entries(copy)) {
        obj[key] = name;
    };

    return obj;
};

module.exports.copyArray = function (copy) {
    const arr = [];

    for (const element of copy) {
        arr.push(element);
    };

    return arr;
};