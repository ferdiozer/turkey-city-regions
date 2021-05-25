
var fs = require('fs');

var XLSX = require('xlsx');

class MyLib {
    constructor() { }

    setInitDataFromXlsx() {
        const filepath = __dirname + '/pk_20210512.xlsx';

        var workbook = XLSX.readFile(filepath);
        var sheet_name_list = workbook.SheetNames;
        sheet_name_list.forEach(function (y) {
            var worksheet = workbook.Sheets[y];
            var headers = {};
            var data = [];
            for (var z in worksheet) {
                if (z[0] === '!') continue;
                //parse out the column, row, and value
                var tt = 0;
                for (var i = 0; i < z.length; i++) {
                    if (!isNaN(z[i])) {
                        tt = i;
                        break;
                    }
                }
                var col = z.substring(0, tt);
                var row = parseInt(z.substring(tt));
                var value = worksheet[z].v;

                //store header names
                if (row == 1 && value) {
                    headers[col] = value;
                    continue;
                }

                if (!data[row]) data[row] = {};
                data[row][headers[col]] = value;
            }
            //drop those first two rows which are empty
            data.shift();
            data.shift();
            // console.log({ data });
        });

        let area = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
        //console.log({ area })
        return area
    }
}

module.exports = {
    MyLib
}