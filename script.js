// To compare two JSON have the same properties without order


let obj1 = { name: "person1", age: 5 };
let obj2 = { age: 5, name: "person1" };

let str1 = JSON.stringify(obj1);
console.log(str1);
let str2 = JSON.stringify(obj2);
console.log(str2);
for (key in obj1) {
  if (obj1[key] === obj2[key]) {
    console.log("The JSON objects are equal");
  } else {
    console.log("The JSON objects are not equal");
  }
}



//!  TO display the Flags in Given API

var request2 = new XMLHttpRequest();
request2.open("GET", "https://restcountries.com/v3.1/all", true);
request2.send();
request2.onload = function () {
  var data2 = request2.response;
  var result2 = JSON.parse(data2);
  for (var i = 0; i < result2.length; i++) {
    console.log(
      "Contry :" + " " + result2[i].name.common,
      ".",
      "Flag" + "--> " + result2[i].flags.png
    );
  }
  ("");
};

//!  TO display the ContryName , Region , Subregion , Population in Given API

var request3 = new XMLHttpRequest();
request3.open("GET", "https://restcountries.com/v3.1/all", true);
request3.send();
request3.onload = function () {
  var data3 = request3.response;
  var result3 = JSON.parse(data3);
  for (var i = 0; i < result3.length; i++) {
    console.log(
      "Country Name :" + " " + result3[i].name.common + ".",
      "Region :" + " " + result3[i].region + ".",
      "Subregion :" + " " + result3[i].subregion + ".",
      "Population" + " " + result3[i].population
    );
  }
};

