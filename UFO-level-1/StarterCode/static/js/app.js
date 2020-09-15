// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");
var table = d3.select("table");
tbody.style("text-align", "center")

data.forEach(function (tableData) {
    var row = tbody.append("tr")
    Object.entries(tableData).forEach(function ([key, value]) {
        var cell = row.append("td")
        cell.text(value)
    })

    // <td style="text-align:center">NetBeans</td>
})

// <tbody style="text-align:right;">
// <tr><td></td><td>123,456,789</td><td></td></tr>
// <tr><td></td><td>456,789</td><td></td></tr>
// <tr><td></td><td>789</td><td></td></tr>
// </tbody>
