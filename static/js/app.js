// from data.js
var tableData = data;

var submit = d3.select("#filter-btn");

submit.on("click", function() {

  d3.event.preventDefault();

  var inputElement = d3.select("#datetime");

  var inputValue = inputElement.property("value");
  console.log(inputValue);

  var filteredData = data.filter(data => data.datetime === inputValue);
  console.log(filteredData);
  
    var tbody = d3.select("tbody");
    console.log(data)

    data.forEach(function(filteredData) {
    console.log(filteredData);
    var row = tbody.append("tr");
        
    Object.entries(filteredData).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value)
           });
   });
});
