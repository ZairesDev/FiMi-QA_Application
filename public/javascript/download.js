const XLSX = require('xlsx')

const btn = document.querySelector('#downloadButton');

let tableImport = XLSX.table_to_book(document.querySelector('.table-name'), { sheet: 'Test' });

const tableExport = XLSX.write(tableImport, { bookType: 'xlsx', bookSST: true, type: 'binary' });

btn.addEventListener(click, function() {
    return XLSX.writeFile(tableExport, 'xlsx/result.xlsx')
})