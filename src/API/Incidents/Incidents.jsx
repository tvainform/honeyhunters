import React, {Component} from 'react';
import * as XLSX from "xlsx";
import file from './file.xlsx'

let Incidents = () => {
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
            const dataParse = XLSX.utils.sheet_to_json(ws, {header: 1});
            /*setFileUploaded(dataParse);*/
            console.log(dataParse);
        };
        reader.readAsBinaryString(f)
    }
    return (
        <div>
            <input type='file' onChange={handleUpload}/>
        </div>
    );

}
export default Incidents;
