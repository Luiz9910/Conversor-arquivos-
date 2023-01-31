const pdf = require('html-pdf');

class PDFWhiter {
    static WhitePDF(filename, html) {
        pdf.create(html, {}).toFile(filename, (error) => {

        })
    }
}

module.exports = PDFWhiter;