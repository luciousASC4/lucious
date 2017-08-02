var URL="https://randomuser.me/api/"


$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
   var userFirstname= data.results[0].name.first
   //console.log(userFirstname);
   $("body").append(userFirstname+" ");
   var userLastname= data.results[0].name.last
   console.log(data.results[0].name);
    console.log(userLastname+" ");
   console.log(data.results[0]);
    $("body").append(userLastname);
    var userPic = (data.results[0].picture.large);
    $("body").append(userPic+" ");
    var locat = (data.results[0].location.state);
    $("body").append(locat+ " ");


   
  

  }
});