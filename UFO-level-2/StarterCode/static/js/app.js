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
//1. show datatime search ufo data in dataset
/////////////////////////////////////////////////////////////////////

// Select the button
var buttonDatetime = d3.select("#filter-btn-datetime");
// Select the form
var formDatetime = d3.select("#ufoform-datetime");
// Create event handlers 
buttonDatetime.on("click", runEnterDatetime);
formDatetime.on("submit", runEnterDatetime);

// Complete the event handler function for the form
function runEnterDatetime() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    //filter the datatime you input 
    var filteredDatas = tableData.filter(ufodata => ufodata.datetime === inputValue);
    // show data 
    displayData(filteredDatas)
};

/////////////////////////////////////////////////////////////////////
//2. show city search ufo data in dataset
/////////////////////////////////////////////////////////////////////
// Select the city search button
var buttonCity = d3.select("#filter-btn-city");
// Select the form
var formCity = d3.select("#ufoform-city");

// Create event handlers 
buttonCity.on("click", runEnterCity);
formCity.on("submit", runEnterCity);

// Complete the event handler function for the form
function runEnterCity() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#cityname");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    //filter the City you input 
    var filteredDatas = tableData.filter(ufodata => ufodata.city === inputValue);
    // show data 
    displayData(filteredDatas)
};

/////////////////////////////////////////////////////////////////////
//3. show state search ufo data in dataset
/////////////////////////////////////////////////////////////////////
// Select the state search button
var buttonState = d3.select("#filter-btn-state");
// Select the form
var formState = d3.select("#ufoform-state");

// Create event handlers 
buttonState.on("click", runEnterState);
formState.on("submit", runEnterState);

// Complete the event handler function for the form
function runEnterState() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#statename");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    //filter the state you input
    var filteredDatas = tableData.filter(ufodata => ufodata.state === inputValue);
    // show data 
    displayData(filteredDatas)
};


/////////////////////////////////////////////////////////////////////
//4. show country search ufo data in dataset
/////////////////////////////////////////////////////////////////////
// Select the country search button
var buttonCountryname = d3.select("#filter-btn-country");
// Select the form
var formCountryname = d3.select("#countryname");

// Create event handlers 
buttonCountryname.on("click", runEnterCountryname);
formCountryname.on("submit", runEnterCountryname);

// Complete the event handler function for the form
function runEnterCountryname() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#countryname");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    //filter the country you input
    var filteredDatas = tableData.filter(ufodata => ufodata.country === inputValue);
    // show data 
    displayData(filteredDatas)
};

/////////////////////////////////////////////////////////////////////
//5. show shape search ufo data in dataset
/////////////////////////////////////////////////////////////////////
// Select the shape search button
var buttonShape = d3.select("#filter-btn-shape");
// Select the form
var formShape = d3.select("#ufoform-shape");
// Create event handlers 
buttonShape.on("click", runEnterShape);
formShape.on("submit", runEnterShape);

// Complete the event handler function for the form
function runEnterShape() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#shapename");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    //filter the shape you input
    var filteredDatas = tableData.filter(ufodata => ufodata.shape === inputValue);

    // show data 
    displayData(filteredDatas)
};

