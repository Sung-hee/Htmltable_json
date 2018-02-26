function getParams(paramUrl){
  var _tempUrl = window.location.search.substring(1);
  var _tempArray = _tempUrl.split('&');

  for(var i = 0; i < _tempArray.length; i++){
    var _keyValuePair = _tempArray[i].split('=');

    if(_keyValuePair[0] == paramUrl){
      return _keyValuePair[1];
    }
  }
}

var gold = getParams('gold');
var power = getParams('power');
var supply = getParams('supply');
var perfomance = getParams('perfomance');
var value = getParams('value');
var url = 'https://charttest-sungheeek.c9users.io/stock_table.json';

$(document).ready(function(){
  $.getJSON(url + "?gold=" + gold + "&power=" + power + "&supply=" + supply + "&perfomance=" + perfomance + "&value=" + value, function(data){
    var json_data = '';
    console.log(gold);
    console.log(power);
    json_data += '<tbody>'
    $.each(data, function(key, value){
      json_data += '<tr>';
      json_data += '<td>'+value.companycode+'</td>';
      if(value.goldagg == "매우우수" || value.goldagg == "우수"){
        json_data += '<td style="color:red">'+value.goldagg+'</td>';
      }
      else if(value.goldagg == "평범"){
        json_data += '<td>'+value.goldagg+'</td>';
      }
      else {
        json_data += '<td style="color:blue">'+value.goldagg+'</td>';
      }

      if(value.powerrating == "매우우수" || value.powerrating == "우수"){
        json_data += '<td style="color:red">'+value.powerrating+'</td>';
      }
      else if(value.powerrating == "평범"){
        json_data += '<td>'+value.powerrating+'</td>';
      }
      else {
        json_data += '<td style="color:blue">'+value.powerrating+'</td>';
      }

      if(value.demandrating == "매우우수" || value.demandrating == "우수"){
        json_data += '<td style="color:red">'+value.demandrating+'</td>';
      }
      else if(value.demandrating == "평범"){
        json_data += '<td>'+value.demandrating+'</td>';
      }
      else {
        json_data += '<td style="color:blue">'+value.demandrating+'</td>';
      }

      if(value.performancegrade == "매우우수" || value.performancegrade == "우수"){
        json_data += '<td style="color:red">'+value.performancegrade+'</td>';
      }
      else if(value.performancegrade == "평범"){
        json_data += '<td>'+value.performancegrade+'</td>';
      }
      else {
        json_data += '<td style="color:blue">'+value.performancegrade+'</td>';
      }

      if(value.currentvalue == "매우우수" || value.currentvalue == "우수"){
        json_data += '<td style="color:red">'+value.performancegrade+'</td>';
      }
      else if(value.currentvalue == "평범"){
        json_data += '<td>'+value.currentvalue+'</td>';
      }
      else {
        json_data += '<td style="color:blue">'+value.currentvalue+'</td>';
      }
      json_data += '</tr>';
    });
    json_data += '</tbody>'
    $('#stock_table').append(json_data);
    $('#stock_table').DataTable( {
      "paging": false,
      "scrollY": 700,
      "scrollX": true,
      "scrollCollapse": true,
      "columnDefs": [
          { width: '15%', targets: 0 }
      ],
      "fixedColumns": true,
      "bInfo" : false,
       // "sinfo": false,
       "bFilter": false
    } );
  });
});
