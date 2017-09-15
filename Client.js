google.charts.load('current', {'packages':['annotationchart']});
google.charts.setOnLoadCallback(drawChart);
var allData =[new Date(2017,8,15,12,33), 5333333, 5151509, 5108954, 4436667, 4121458, 4019470, 3971292, 3855849, 3401762, 3368998]];
h = new XMLHttpRequest();
h.onreadystatechange = function() {
    if (h.readyState == 4) {
        allData = JSON.parse(h.responseText);
        for (var i in allData) {
          allData[i][0]= new Date(allData[i][0][0],allData[i][0][1],allData[i][0][2],allData[i][0][3],allData[i][0][4]);
        }
    }
};
h.open('GET', '/finddata', true);
h.send(null);

function clearChart() {
  var chart = new google.visualization.AnnotationChart(document.getElementById('chart_div'));
  chart.clearChart();
}

function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Date');
  data.addColumn('number', '#1');
  data.addColumn('number', '#2');
  data.addColumn('number', '#3');
  data.addColumn('number', '#4');
  data.addColumn('number', '#5');
  data.addColumn('number', '#6');
  data.addColumn('number', '#7');
  data.addColumn('number', '#8');
  data.addColumn('number', '#9');
  data.addColumn('number', '#10');

  data.addRows(allData);

  var chart = new google.visualization.AnnotationChart(document.getElementById('chart_div'));

  var options = {
    displayAnnotations: true
  };

  chart.draw(data, options);
}
function doSomething() {
    var d = new Date(),
        h = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes() + 1, 0, 0),
        e = h - d;
    if (e > 100) { // some arbitrary time period
        window.setTimeout(doSomething, e);
    }
    // your code
    h = new XMLHttpRequest();
    h.onreadystatechange = function() {
        if (h.readyState == 4) {
            allData = JSON.parse(h.responseText);
            for (var i in allData) {
              allData[i][0]= new Date(allData[i][0][0],allData[i][0][1],allData[i][0][2],allData[i][0][3],allData[i][0][4]);
            }
        }
    };
    h.open('GET', '/finddata', true);
    h.send(null);

    clearChart();
    drawChart();
};
doSomething();
