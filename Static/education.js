
console.log(data)

//2015 data filter
function filter2015(data){return data["Year"]==2015;}
//2016 data filter
function filter2016(data){return data["Year"]==2016;}
//2017 data filter
function filter2017(data){return data["Year"]==2017;}
//2018 data filter
function filter2018(data){return data["Year"]==2018;}
//2019 data filter
function filter2019(data){return data["Year"]==2019;}
//2020 data filter
function filter2020(data){return data["Year"]==2020;}
//2021 data filter
function filter2021(data){return data["Year"]==2021;}

//data variables for each year
let data2015 = data.filter(filter2015);
let data2016 = data.filter(filter2016);
let data2017 = data.filter(filter2017);
let data2018 = data.filter(filter2018);
let data2019 = data.filter(filter2019);
let data2020 = data.filter(filter2020);
let data2021 = data.filter(filter2021);

let country = data2015.map(items => items.Country).slice(0, 10);
console.log(country);

let country2 = data2015.map(items => items.Country).slice(-10);
console.log(country2);

//call function selYear when year is changed
d3.selectAll("#selDataset").on("change", selYear);

//initial function to generate default charts and graphs
function init() {
  //default top 10 countries bar chart
  var trace1 = {
    x: ['Switzerland', 'Iceland', 'Denmark', 'Norway', 'Canada', 'Finland', 'Netherlands', 'Sweden', 'New Zealand', 'Australia'],
    y: [1479263, 45322, 1064569, 844843, 5720374, 1107252, 3048357, 1929653, 667708, 3555144],
    name: 'Age 65+',
    type: 'bar'
  };

  //default bot 10 countries bar chart
  var trace6 = {
    x: ['Chad', 'Guinea', 'Ivory Coast', 'Burkina Faso', 'Afghanistan', 'Rwanda', 'Benin', 'Syria', 'Burundi', 'Togo'],
    y: [287343, 402388, null, 487589, 812050, 346737, 338026, 793558, 244066, 215465],
    name: 'Age 65+',
    type: 'bar'
  };
  
  var data2 = [trace6, trace7,trace8,trace9,trace10];
  var layout = {barmode: 'stack'};
  Plotly.newPlot('age_bar_bot', data2, layout);
}

//function to redraw graphs and charts
function selYear() {
  // Use D3 to select the dropdown menu
  let dropdownMenu = d3.select("#selDataset");

  // Assign the value of the dropdown menu option to a variable
  let curYear = dropdownMenu.property("value");

  //empty data array 
  let data =[];

  //set data depending on selected year
  if (curYear === '2015') {data = data2015;}
  else if (curYear === '2016') {data = data2016;}
  else if (curYear === '2017') {data = data2017;}
  else if (curYear === '2018') {data = data2018;}
  else if (curYear === '2019') {data = data2019;}
  else if (curYear === '2020') {data = data2020;}
  else if (curYear === '2021') {data = data2021;}

  //map top 10 countries and age group into list 
  let country = data.map(items => items.Country).slice(0, 10);
  let age65 = data.map(items => items["Age 65+"]).slice(0, 10);
  let age64_25 = data.map(items => items["Age 64-25"]).slice(0, 10);
  let age24_15 = data.map(items => items["Age 24-15"]).slice(0, 10);
  let age14_5 = data.map(items => items["Age 14-5"]).slice(0, 10);
  let age5 = data.map(items => items["Age <5"]).slice(0, 10);
    
  //map bot 10 countries and age group into list 
  let lastcountry = data.map(items => items.Country).slice(-10);
  let lastage65 = data.map(items => items["Age 65+"]).slice(-10);
  let lastage64_25 = data.map(items => items["Age 64-25"]).slice(-10);
  let lastage24_15 = data.map(items => items["Age 24-15"]).slice(-10);
  let lastage14_5 = data.map(items => items["Age 14-5"]).slice(-10);
  let lastage5 = data.map(items => items["Age <5"]).slice(-10);

  //update top 10 country bar chart
  Plotly.update('age_bar_top', {
    x: [country, country,country,country,country],
    y: [age65, age64_25,age24_15,age14_5,age5] 
  });

  //update bot 10 country bar chart
  Plotly.update('age_bar_bot', {
    x: [lastcountry, lastcountry,lastcountry,lastcountry,lastcountry],
    y: [lastage65, lastage64_25,lastage24_15,lastage14_5,lastage5] 
  });
}

init();