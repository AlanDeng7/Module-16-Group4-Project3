function init() {
    data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16] }];
  
    Plotly.newPlot("pop_line", data);
  }
  
  // Call updatePlotly() when a change takes place to the DOM
  d3.selectAll("#selDataset").on("change", updatePlotly);
  
  // This function is called when a dropdown menu item is selected
  function updatePlotly() {
    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    let dataset = dropdownMenu.property("value");
  
    // Initialize x and y arrays
    let x = [];
    let y = [];
  
    if (dataset === "2015") {
      x = [1, 2, 3, 4, 5];
      y = [1, 2, 4, 8, 16];
    }
  
    else if (dataset === "2016") {
      x = [10, 20, 30, 40, 50];
      y = [1, 10, 100, 1000, 10000];
    }
  
    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle("pop_line", "x", [x]);
    Plotly.restyle("pop_line", "y", [y]);
  }
  
  init();