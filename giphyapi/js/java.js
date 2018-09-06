//api giphy request------------------------------------------------
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=uQeliy7464TSKIKD1MqIiZ7XHNsDlevZ&limit=5");
    
xhr.done(function(data) {
    console.log("success got data", data);
});
//Array----------------------------------------------------------
var animals = new Array("bear", "cat", "dog");
animals.sort();
//function onClick----------------------------------------------

    $(function(){
        $('myFunction').on('click',function(){
            var addBtn= $('<input type="button" value="new button"/>');
            $("body").append(addBtn);
        });
    });


//var newArray = document.getElementById("animal-input").value;
//animals.push(newArray);
//document.getElementById("animal-input").value = "";
//}
//for(i=0; i<animals.length; i++) {
//    document.write(animals[i] + "<br/>");
// };
//sending data json
//var myObj = {name: "John", age: 31, city: "New York"};
//var myJSON = JSON.stringify(myObj);
//window.location = "demo_json.php?x=" + myJSON;

//recieving data json
//var myJSON = '{"name":"John", "age":31, "city":"New York"}';
//var myObj = JSON.parse(myJSON);
//document.getElementById("demo").innerHTML = myObj.name;