const importxlsx = ()=>
{
    const xlsx = require("xlsx");
    const wb = xlsx.readFile("file.xlsx", {cellDates: true});
    const data = xlsx.utils.sheet_to_json(wb.Sheets["АСУТП"])
    console.log(data);
}
