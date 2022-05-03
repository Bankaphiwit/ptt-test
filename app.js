const express = require("express");
const app = express();
const url = require("url");
const utils = require("./utils");

/*1.*/
app.get("/prime-number", (req, res) => {
    let q = url.parse(req.url, true).query;
    let start = q.start ? q.start : 1;
    let end = q.end ? q.end : 10000000;
    let primeNumber = utils.primeNumber(start, end);
    let content = `Start: ${start} <br/>`;
    content += `End: ${start} <br/>`;
    content += `Total: ${primeNumber.length} <br/>`;
    content += primeNumber.join(", ");
    res.send(content);
});
/*2.*/
app.get("/factorial", (req, res) => {
    let q = url.parse(req.url, true).query;
    let number = q.number ? q.number : 100;
    let factorial = utils.factorial(number);
    let content = `factorial number ${number}: ${factorial}`;
    res.send(content);
});
/*3.*/
app.get("/same-reverse", (req, res) => {
    let q = url.parse(req.url, true).query;
    let str = q.str ? q.str : "deleveled";
    let sameReverse = utils.isSameReverse(str) ? "Yes" : "No";
    let content = `String ${str} is same reverse ${sameReverse}`;
    res.send(content);
});
/*4.*/
app.get("/newline", (req, res) => {
    let q = url.parse(req.url, true).query;
    let num = q.num ? q.num : 1000;
    let content = utils.plusNewLine(num);
    res.send(content);
});

app.listen(9000, () => {
    console.log("Start sever on port 9000");
});