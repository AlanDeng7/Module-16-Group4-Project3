// Sort the data by Greek search results descending
let sortedByCountryMigratedTo = data.sort((a, b) => b["Migrating into the country(combined)"] - a["Migrating into the country(combined)"]);

// Slice the first 10 objects for plotting
slicedData = sortedByCountryMigratedTo.slice(0, 10);

// Reverse the array to accommodate Plotly's defaults
reversedData = slicedData.reverse();

// Trace1 for the Greek Data
let trace1 = {
  x: reversedData.map(object => object["Migrating into the country(combined)"]),
  y: reversedData.map(object => object.Country),
  text: reversedData.map(object => object.Country),
  name: "Migration",
  type: "bar",
  orientation: "h"
};

// Data array
// `data` has already been defined, so we must choose a new name here:
let traceData = [trace1];

// Apply a title to the layout
let layout = {
  title: "Top ten countries favoured for migration",
  margin: {
    l: 100,
    r: 100,
    t: 100,
    b: 100
  }
};

// Render the plot to the div tag with id "plot"
// Note that we use `traceData` here, not `data`
Plotly.newPlot("plot", traceData, layout);
