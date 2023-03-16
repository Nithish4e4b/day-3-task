var json = [{
    "id" : "nk1", 
    "message"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "zen portal task",
    "mail": "nithishkumar.17@hotmail.com"
},
{
    "id" : "nk2", 
    "message"   : "For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "zen portal task",
    "mail": "nithishkumar.17@hotmail.com"
}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.message);
    console.log(obj.task);
    console.log(obj.mail);

}
//for Each
json.forEach(function(obj) { console.log(obj.message); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].id);
  //console.log(json[key].message);
 
}
}
//for Of
let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);