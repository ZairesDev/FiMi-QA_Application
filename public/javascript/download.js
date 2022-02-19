const tableData = document.querySelector(".table");
const btn = document.querySelector('#downloadButton')

makeXLSX = () => {
    //Converts the HTML Table to Excel data
    let tableToExcelData = XLSX.utils.table_to_book(tableData);

    //This creates a sheet to import our data onto 
    let ws = tableToExcelData.Sheets["Sheet1"];

    //Works nearly the same as file system writeFile
    XLSX.writeFile(tableToExcelData, "Test.xlsx");
}

btn.addEventListener('click', () => {
    makeXLSX();
})