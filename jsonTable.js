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
var url = 'http://61.72.187.6/phps/stock_table?gold=1&power=2&supply=3&performance=4&value=5';
var height = $(window).height()*0.888;

$(document).ready(function(){
  $.getJSON(url + "?gold=" + gold + "&power=" + power + "&supply=" + supply + "&perfomance=" + perfomance + "&value=" + value, function(data){
    var json_data = '';
    console.log(gold);
    console.log(power);
    json_data += '<tbody>'
    $.each(data, function(key, value){
      json_data += '<tr>';
      json_data += '<td>'+value.companycode+'</td>';
      if(value.goldagg == "1 등급" || value.goldagg == "2 등급"){
        json_data += '<td style="color:red">'+value.goldagg+'</td>';
      }
      else if(value.goldagg == "3 등급"){
        json_data += '<td>'+value.goldagg+'</td>';
      }
      else {
        json_data += '<td style="color:blue">'+value.goldagg+'</td>';
      }

      if(value.powerrating == "1 등급" || value.powerrating == "2 등급"){
        json_data += '<td style="color:red">'+value.powerrating+'</td>';
      }
      else if(value.powerrating == "3등급"){
        json_data += '<td>'+value.powerrating+'</td>';
      }
      else {
        json_data += '<td style="color:blue">'+value.powerrating+'</td>';
      }

      if(value.demandrating == "1 등급" || value.demandrating == "2 등급"){
        json_data += '<td style="color:red">'+value.demandrating+'</td>';
      }
      else if(value.demandrating == "3 등급"){
        json_data += '<td>'+value.demandrating+'</td>';
      }
      else {
        json_data += '<td style="color:blue">'+value.demandrating+'</td>';
      }

      if(value.performancegrade == "1 등급" || value.performancegrade == "2 등급"){
        json_data += '<td style="color:red">'+value.performancegrade+'</td>';
      }
      else if(value.performancegrade == "3 등급"){
        json_data += '<td>'+value.performancegrade+'</td>';
      }
      else {
        json_data += '<td style="color:blue">'+value.performancegrade+'</td>';
      }

      if(value.currentvalue == "1 등급" || value.currentvalue == "2 등급"){
        json_data += '<td style="color:red">'+value.performancegrade+'</td>';
      }
      else if(value.currentvalue == "3 등급"){
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
      "scrollY": height,
      "scrollX": true,
      "scrollCollapse": true,
      "columnDefs": [
          { width: '15%', targets: 0 }
      ],
      // "ordering": false,
      // "fixedColumns": true,
      "bInfo" : false,
       // "sinfo": false,
       "bFilter": false
    } );
  });
});
