var URL="https://randomuser.me/api/"


$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    //console.log(data.results);
    var name = data.results[0]
    console.log(name);
    name.name
    console.log(name.name);
    var first = name.name.first
    console.log(first);
  }
});