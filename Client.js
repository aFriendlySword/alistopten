google.charts.load('current', {'packages':['annotationchart']});
google.charts.setOnLoadCallback(drawChart1);
google.charts.setOnLoadCallback(drawChart2);
easyData=[];
var allData =[[new Date(2017,8,15,12,33), 5333333, 5151509, 5108954, 4436667, 4121458, 4019470, 3971292, 3855849, 3401762, 3368998]];
function clearChart1() {
  var chart = new google.visualization.AnnotationChart(document.getElementById("chart_div"));
  chart.clearChart();
}
function clearChart2() {
  var chart = new google.visualization.AnnotationChart(document.getElementById("chart_div2"));
  chart.clearChart();
}
function drawChart1() {
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
  data.addColumn('number', '225');
  data.addColumn('number', '250');
  data.addColumn('number', '275');
  data.addColumn('number', '300');
  data.addColumn('number', '325');

  newData=[];
  for (var i in allData) {
    newData.push([allData[i][0]]);
    for (var j=0;j<10;j++) {
      newData[i].push(allData[i][j+1][0]);
    }
    newData[i].push(2995562);
    newData[i].push(3698225);
    newData[i].push(4474852);
    newData[i].push(5325444);
    newData[i].push(6250000);
  }
  data.addRows(newData);

  var chart = new google.visualization.AnnotationChart(document.getElementById("chart_div"));

  var options = {
    displayAnnotations: true,
    thickness:2,
    colors:['#3366cc','#dc3912','#ff9900','#2ea335','b240b2','#20a6cd','#dd4477','#66aa00','#c14848','#4b76a2','black','black','black','black','black']
  };

  chart.draw(data, options);
}
function drawChart2() {
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
  data.addColumn('number', '3M');
  data.addColumn('number', '4M');
  data.addColumn('number', '5M');
  data.addColumn('number', '6M');
  newData=[];
  for (var i in allData) {
    newData.push([allData[i][0]]);
    for (var j=0;j<10;j++) {
      newData[i].push(Math.floor(Math.sqrt(allData[i][j+1][0])*0.13));
    }
    newData[i].push(225);
    newData[i].push(260);
    newData[i].push(290);
    newData[i].push(318);
  }
  data.addRows(newData);

  var chart = new google.visualization.AnnotationChart(document.getElementById("chart_div2"));

  var options = {
    displayAnnotations: true,
    thickness:2,
    colors:['#3366cc','#dc3912','#ff9900','#2ea335','b240b2','#20a6cd','#dd4477','#66aa00','#c14848','#4b76a2','black','black','black','black']
  };

  chart.draw(data, options);
}
function doSomething() {
    var d = new Date(),
        h = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes() , Math.ceil((d.getSeconds() + 10)/15)*15, 0),
        e = h - d;
    if (e > 100) { // some arbitrary time period
        window.setTimeout(doSomething, e);
    }
    // your code
    h = new XMLHttpRequest();
    h.onreadystatechange = function() {
        if (h.readyState == 4) {
            allData = JSON.parse(h.responseText);
            easyData = h.responseText;
            for (var i in allData) {
              allData[i][0]= new Date(allData[i][0][0],allData[i][0][1],allData[i][0][2],allData[i][0][3],allData[i][0][4]);
            }
            clearChart1();
            drawChart1();
            clearChart2();
            drawChart2();
        }
    };
    h.open('GET', '/finddata', true);
    h.send(null);
};
doSomething();
