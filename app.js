const Reader = require('./Reader');
const Process = require('./Process');
const Table = require('./Table');
const HtmlParser = require('./HtmlParser');
const Writer = require('./Writer');
const PDFWriter = require('./PdfWriter');

let leitor = new Reader();
let escritor = new Writer(); 

async function main() {
    let dados = await leitor.Read('./trabalho.csv');
    let dadosProcessados = Process.Process(dados);
    let usuarios = new Table(dadosProcessados);
    let html = await HtmlParser.Parse(usuarios);

    escritor.Write("./public/views/" + Date.now() + ".html", html);
    PDFWriter.WhitePDF("./public/Pdf/" + Date.now() + ".pdf", html)
}

main();