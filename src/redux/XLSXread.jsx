import React from 'react';
import * as XLSX from "xlsx";

const XLSXread = () => {
    const handleUpload = (e) => {
        e.preventDefault();

        const files = e.target.files, f = files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            const data = e.target.result;
            let readedData = XLSX.read(data, {type: 'binary'});
            const wsname = readedData.SheetNames[0];
            const ws = readedData.Sheets[wsname];

            /* Convert array to json*/
            const dataParse = XLSX.utils.sheet_to_json(ws, {header:1});
            setFileUploaded(dataParse);
            console.log(dataParse);
        };
        reader.readAsBinaryString(f)
    }
    return (
    if(typeof require !== 'undefined') {
        XLSX = require('xlsx');
    }
    /* output format determined by filename */
    XLSX.writeFile(workbook, 'out.xlsb');
    /* at this point, out.xlsb is a file that you can distribute */
);
};
export default XLSXread;
