const path = require('path');

module.exports = (filePath) => {
    return path.resolve(__dirname, filePath);
}