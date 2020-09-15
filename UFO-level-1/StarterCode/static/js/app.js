// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");
var table = d3.select("table");

// var counter = 1 
data.forEach(function (tableData) {
    // console.log(tableData)
    // console.log(`--------------${counter}-----------------------------`);
    // counter +=1
    var row = tbody.append("tr")
    Object.entries(tableData).forEach(function ([key, value]) {
        row.append("td").text(value)
    })
})


