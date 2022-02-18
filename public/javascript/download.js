const tableData = document.querySelector(".table");

makeXSLX = () => {
    //Converts the HTML Table to Excel data
    let tableToExcelData = XLSX.utils.table_to_book(tableData);

    // This is create a sheet 
    let ws = tableToExcelData.Sheets["Sheet1"];

    //Works nearly the same as file system writeFile
    XLSX.writeFile(tableToExcelData, "Test.xlsx");
}