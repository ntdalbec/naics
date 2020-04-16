const xlsx = require("xlsx");
const fs = require("fs");

const workbook = xlsx.readFile(
    // Synchronously read the excel document
    `${__dirname}/../data/2017_NAICS_Descriptions.xlsx`
);

const worksheet = workbook.Sheets[workbook.SheetNames[0]]; // Get the first sheet in the workbook

const rows = xlsx.utils.sheet_to_json(worksheet); // Transform the worksheet into an
// array of objects where each property key is the label of column

// Transform the array to an object where Code is the key for a given entry
const codes = rows.reduce(
    (codes, { Code, ...rest }) => Object.assign(codes, { [Code]: rest }),
    // Seperate the Code property from the rest of the object and use it as
    // the key in an object of type Record<string, { title: string, description: string }>
    {}
);

// Create a JSON file of the processed data
fs.writeFileSync(
    `${__dirname}/../data/2017_NAICS_Descriptions.json`,
    JSON.stringify(codes)
);
