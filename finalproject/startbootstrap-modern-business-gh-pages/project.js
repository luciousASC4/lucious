var url = "http://api.edamam.com/search?key=";
var key = "a670bf11c7898288386dbde2f1dad80f"
var appid= "3ce69ad1"
var q = "burrito"; 


$.ajax({
    url: url + key + "&q="+q + "&appid=" +appid,
    dataType: 'JSON',
    type: 'GET',
    success: function(data)
    {
    //    console.log(data);
    //    console.log(data.hits);
    //    console.log(data.hits[0]);
    //    console.log(data.hits[0].recipe);
        console.log(data);
       console.log(data.hits[0].recipe.label);
       console.log(data.hits[1].recipe.label);
       console.log(data.hits[0].recipe.label);
       console.log(data.hits[0].recipe.calories);
       console.log(data.hits[0].recipe.cautions);
       console.log(data.hits[0].recipe.dietLabels);
       //console.log(data.hits[0].recipe.healthLabels);
       //console.log(data.hits[0].recipe);
       
    }
       
})