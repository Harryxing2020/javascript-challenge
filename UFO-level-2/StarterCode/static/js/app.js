// from data.js
var tableData = data;
var tbody = d3.select("tbody");
var table = d3.select("table");
tbody.style("text-align", "center")
/////////////////////////////////////////////////////////////////////
//Display tables
function displayData(showData) {
    // clear data 
    tbody.html("");
    // cannot find any data 
    if (showData.length == 0) {
        d3.select("tbody")
            .append("tr")
            .append("td")
            .attr("colspan", 7)
            .html("<h5>Sorry, no records found</h5>");
    } else {
        // show the data from json data
        showData.forEach(function (ufodata) {
            var row = tbody.append("tr")
            Object.entries(ufodata).forEach(function ([key, value]) {
                var cell = row.append("td")
                cell.text(value)
            })
        })

    }

}

/////////////////////////////////////////////////////////////////////
// show all ufo data in dataset
/////////////////////////////////////////////////////////////////////
displayData(tableData)

/////////////////////////////////////////////////////////////////////
//show search ufo data in dataset
/////////////////////////////////////////////////////////////////////


var buttonFilter = d3.select("#filter-btn-filter");

var buttonShowAll = d3.select("#filter-btn-all-data");


// 


// Select the form
// var formShape = d3.select("#ufoform-shape");
// Create event handlers 
buttonFilter.on("click", runEnterFilter);

buttonShowAll.on("click", showAllData);

function showAllData(){
    displayData(tableData)
}


// Complete the event handler function for the form
function runEnterFilter() {

    console.log("-----++++++++++++++++++++++++++++++++++++++++")


    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElementdatetime = d3.select("#datetime");
    // Get the value property of the input element
    var inputElementdatetimeValue = inputElementdatetime.property("value");

    var inputElementcityname = d3.select("#cityname");
    // Get the value property of the input element
    var inputElementcitynameValue = inputElementcityname.property("value");

    var inputElementstatename = d3.select("#statename");
    // Get the value property of the input element
    var inputElementstatenameValue = inputElementstatename.property("value");

    var inputElementcountryname = d3.select("#countryname");
    // Get the value property of the input element
    var inputElementcountrynameValue = inputElementcountryname.property("value");

    var inputElementshape = d3.select("#shapename");
    // Get the value property of the input element
    var inputElementshapeValue = inputElementshape.property("value");

    var filteredDatas =[]
    if (inputElementdatetimeValue ==="" 
        && inputElementcitynameValue ===""
        && inputElementstatenameValue ===""
        && inputElementcountrynameValue ===""
        && inputElementshapeValue ===""){
        // all field empty
    } else{

        if (inputElementdatetimeValue !=""){
                filteredDatas = tableData.filter(ufodata => ufodata.datetime === inputElementdatetimeValue);

                if (inputElementcitynameValue !="" && filteredDatas.length !=0){
                    filteredDatas = filteredDatas.filter(ufodata => ufodata.city === inputElementcitynameValue.toLowerCase());
                }

                if (inputElementstatenameValue !="" && filteredDatas.length !=0){

                    filteredDatas = filteredDatas.filter(ufodata => ufodata.state === inputElementstatenameValue.toLowerCase());
                }

                if (inputElementcountrynameValue !="" && filteredDatas.length !=0){
                    filteredDatas = filteredDatas.filter(ufodata => ufodata.country === inputElementcountrynameValue.toLowerCase());
                }

                if (inputElementshapeValue !="" && filteredDatas.length !=0){
                    filteredDatas = filteredDatas.filter(ufodata => ufodata.shape === inputElementshapeValue);

                }

        }

    }

    // show data 
    displayData(filteredDatas)
};

