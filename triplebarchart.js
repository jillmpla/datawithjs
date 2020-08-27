//data procured from - https://www.seethroughny.net/benchmarking/local-government-spending-and-revenue#
//see the file OverallPoliceSpendingandPopulationSize.csv in the datafiles folder for all data used below

var ctx = document.getElementById("tripleBarChart");

var policeSpendingData = {
    label: 'Police Spending Per Resident ($USD)',
    data: [62, 42, 39, 52, 57, 41, 481, 61, 374, 28],
    backgroundColor: 'rgba(19, 168, 158, 1)',
    borderColor: 'rgba(255,255,255, 1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(19, 168, 158, 1)',
    hoverBorderColor: 'rgba(255,255,255, 1)',
    yAxisID: "y-axis-police"
};

var populationData = {
    label: 'Population',
    data: [216469, 200600, 372813, 304204, 467026, 949113, 1339532, 744344, 1493350, 919040],
    backgroundColor: 'rgba(77, 65, 154, 1)',
    borderColor: 'rgba(255,255,255, 1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(77, 65, 154, 1)',
    hoverBorderColor: 'rgba(255,255,255, 1)',
    yAxisID: "y-axis-population"
};

//********the whole bar chart is ordered by this data (top 10 (non-NYC) counties with the highest crime totals!!!)********
var totalsData = {
    label: 'Crime Total',
    data: [5455, 5568, 6739, 8777, 10893, 11572, 14016, 18945, 20543, 23371],
    backgroundColor: 'rgba(62, 148, 192, 1)',
    borderColor: 'rgba(255,255,255, 1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(62, 148, 192, 1)',
    hoverBorderColor: 'rgba(255,255,255, 1)',
    yAxisID: "y-axis-totals"
};

var overallData = {
    labels: ["Niagara", "Broome", "Orange", "Albany", "Onondaga", "Westchester", "Nassau", "Monroe", "Suffolk", "Erie"],
    datasets: [totalsData, populationData, policeSpendingData]
};

var barChartOptions = {
    scales: {
        xAxes: [{
            barPercentage: 1,
            categoryPercentage: 0.6
        }],
        yAxes: [{
            id: "y-axis-police"
        }, {
            id: "y-axis-population"
        }, {
            id: "y-axis-totals"
        }]
    },
    animation: {
        duration:5000
    },
    title: {
        display: true,
        fontColor: "#000000",
        fontFamily: "Oxygen, sans-serif",
        fontSize: 30,
        text: 'Top 10 (*non-NYC) Counties with Highest Crime Totals'
    }
};

var barChart = new Chart(ctx, {
    type: 'bar',
    data: overallData,
    options: barChartOptions
});
