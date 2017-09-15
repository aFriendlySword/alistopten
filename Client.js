google.charts.load('current', {'packages':['annotationchart']});
      google.charts.setOnLoadCallback(drawChart);

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

        data.addRows([
          [new Date(2017, 9, 13, 15, 27),5276282,5151509,5090882,4394711,4119670,3974131,3967951,3849720,3378263,3350543]);

        var chart = new google.visualization.AnnotationChart(document.getElementById('chart_div'));

        var options = {
          displayAnnotations: true
        };

        chart.draw(data, options);
      }
function doSomething() {
    var d = new Date(),
        h = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes() + 10, 0, 0),
        e = h - d;
    if (e > 100) { // some arbitrary time period
        window.setTimeout(doSomething, e);
    }
    // your code
    function readBody(xhr) {
        var data;
        if (!xhr.responseType || xhr.responseType === "text") {
            data = xhr.responseText;
        } else if (xhr.responseType === "document") {
            data = xhr.responseXML;
        } else {
            data = xhr.response;
        }
        return data;
    }

    var str = "";

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            str = readBody(xhr);
        }
    }
    xhr.open('GET', 'https://alis.io/top10', true);
    xhr.send(null);

};
