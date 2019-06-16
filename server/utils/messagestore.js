var fs = require("fs");

var message = function(data) {
  fs.readFile("./utils/messages.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      var obj;
      if (data) {
        obj = JSON.parse(data); //now it an object
      } else {
        obj = [];
      }
      console.log(data);
      obj.push({ from: data.from, message: data.msg }); //add some data
      json = JSON.stringify(obj); //convert it back to json

      fs.writeFile("./utils/messages.json", json, "utf8", (err, result) => {
        console.log(result);
      }); // write it back
    }
  });
};

module.exports = message;
