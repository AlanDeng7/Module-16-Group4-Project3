//to check data
//console.log(data);

//2015 data filter
function filter2015(data){
    return data["Year"]==2015;
}
//2016 data filter
function filter2016(data){
    return data["Year"]==2016;
}
//2017 data filter
function filter2017(data){
    return data["Year"]==2017;
}
//2018 data filter
function filter2018(data){
    return data["Year"]==2018;
}
//2019 data filter
function filter2019(data){
    return data["Year"]==2019;
}
//2020 data filter
function filter2020(data){
    return data["Year"]==2020;
}
//2021 data filter
function filter2021(data){
    return data["Year"]==2021;
}

//data variables 
let data2015 = data.filter(filter2015);
let data2016 = data.filter(filter2016);
let data2017 = data.filter(filter2017);
let data2018 = data.filter(filter2018);
let data2019 = data.filter(filter2019);
let data2020 = data.filter(filter2020);
let data2021 = data.filter(filter2021);

d3.selectAll("#selDataset").on("change", selYear);

// Create a custom filtering function
function selYear() {
    
    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    let curYear = dropdownMenu.property("value");

    let data =[];

    if (curYear === '2015') {
        data = data2015;
    }
  
    else if (curYear === '2016') {
        data = data2016;
    }

    else if (curYear === '2017') {
        data = data2017;
    }

    else if (curYear === '2018') {
        data = data2018;
    }

    else if (curYear === '2019') {
        data = data2019;
    }

    else if (curYear === '2020') {
        data = data2020;
    }

    else if (curYear === '2021') {
        data = data2021;
    }

    //turn code and happiness score column into list 
    let code = data.map(items => items.Code);
    let score = data.map(items => items["Happiness Score"]);

    console.log(code);
    console.log(score);

    var happinessScore = {};

    //get dictionary of code and happiness score
    for (var i = 0; i < data.length; i++) {
        happinessScore["\""+code[i]+ "\""] = score[i];
    }

    console.log(happinessScore);
    return happinessScore;
}




let code2015 = data2015.map(items => items.Code);
    // Data trace array
let score2015 = data2015.map(items => items["Happiness Score"]);

var happinessScore2015 = {};

for (var i = 0; i < data2015.length; i++) {
    happinessScore2015["\""+code2015[i]+ "\""] = score2015[i];
}


    
