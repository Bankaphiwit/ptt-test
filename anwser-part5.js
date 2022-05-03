/*
1. สร้าง Database 
price_data โดยมี fields
- Code, Description, IsNotify, IsChange, changeDate, ChangeTime
CREATE TABLE price_data (
    ID Int,
    Code Varchar,
    Description Varchar,
    IsNotify Bit,
    IsChange Bit,
    changeDate Timestamp,
    ChangeTime Timestamp,
);
price_info โดยมี fields
- MAT_NAME, DIVISION_ID, DIVISION_NAME, MAT_NAME2, TYPE_NAME, MAT_ID, PRICE0
CREATE TABLE price_info (
    ID Int,
    MAT_NAME Varchar,
    DIVISION_ID Int,
    DIVISION_NAME Varchar,
    MAT_NAME2 Varchar,
    TYPE_NAME Varchar,
    MAT_ID Int,
    PRICE0 Decimal,
    price_dataId Int
);
2. สร้าง webservice ด้วย node.js
3. ใช้ package 
- express สำหรับสร้าง webservice จัดการเรื่อง port และ path url
- mysql สำหรับเชื่อมต่อกับฐานข้อมูล
4. สร้าง method รับค่า Get ด้วย param GetListOfPrice
5. ทำการ Query Sql และ คืนค่า
*/
// ตัวอย่าง code

let express = require("express");
let app = express();

// connection to mysql database
let dbCon = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "admin",
    database: "ptt_test",
});
dbCon.connect();

app.get("/GetListOfPrice", (req, res) => {
    dbCon.query("SELECT * FROM `price_data`", (error, results, fields) => {
        if (error) throw error;
        let message = "";
        if (results === undefined || results.length === 0) {
            message = "table is empty";
        } else {
            message = "Successfully retrieved all";
        }
        let tempResult = results;
        results.map((item, key) => {
            dbCon.query(
                `SELECT * FROM price_info WHERE price_dataId = ${item.ID} `,
                (error2, results2, fields2) => {
                    tempResult[key].ListOfPrice = results2;
                }
            );
        });
        return res.send({ error: false, data: tempResult, message: message });
    });
});

app.listen(9999, () => {
    console.log("Node App is running on port 3000");
});

module.exports = app;
