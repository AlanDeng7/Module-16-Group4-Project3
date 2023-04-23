// import data from the destination.js and origin.js

// select the plot divs using their IDs
var plot1Div = document.getElementById('plot1');
var plot2Div = document.getElementById('plot2');

// create a function to update the plots when the year is changed
function updatePlots(year) {
    // filter the data by the selected year and by Type = 'Combined'
    var filteredData = data.filter(d => d.Year == year);
    var filteredData_1 = data.filter(d => d.Year == year);

    // sort the data by Total
    filteredData.sort((a, b) => b["Migrating into the country(combined)"] - a["Migrating into the country(combined)"]);
    filteredData_1.sort((a, b) => b["Migrating from the country(combined)"] - a["Migrating from the country(combined)"]);

    // create the first plot
    var plot1Data = [{
        x: filteredData.slice(0,10).map(items => `${items.Country} (Rank:${items["Happiness Rank"]})`),
        y: filteredData.slice(0,10).map(d => d["Migrating into the country(combined)"]),
        type: 'bar'
    }];
    Plotly.newPlot(plot1Div, plot1Data, {
      title: `Top ten countries favoured for immigration in ${year}`
  });

    // create the second plot
    var plot2Data = [{
        x: filteredData_1.slice(0,10).map(items => `${items.Country} (Rank:${items["Happiness Rank"]})`),
        y: filteredData_1.slice(0,10).map(d => d["Migrating from the country(combined)"]),
        type: 'bar'
    }];
    Plotly.newPlot(plot2Div, plot2Data, {
      title: `Top ten countries favoured for emmigration in ${year}`
    });
}

// call the updatePlots function when the year is changed
document.getElementById('year').addEventListener('change', function() {
    updatePlots(this.value);
});

// initialize the plots with the default year
updatePlots(2015);

