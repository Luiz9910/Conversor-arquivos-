const fs = require('fs');

class Reader {
    async Read(filepath) {
        try {
            return fs.readFileSync(filepath, 'utf8');
        } catch(error) {
            return undefined;
        }
    }
}

module.exports = Reader;