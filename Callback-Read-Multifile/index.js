const fs = require('fs');

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function match_data(parent_file, children_file) {
  // read data parent secara asyn
  fs.readFile('./parents.json', 'utf-8', (err, data) =>{
    if(err){
      console.log(err)
    } else {
      setTimeout (function() {
        // parse data parent agar menjadi object
        let parent_data = JSON.parse(data)

        // read data children secara asyn
        fs.readFile('./children.json', 'utf-8', (err, data) => {
          if(err) {
            console.log(err)
          } else {
            setTimeout (function() {
              let children_data = JSON.parse(data)
              
              for(let i = 0; i < parent_data.length; i++) {
                parent_data[i].children = [];

                for(let j = 0; j < children_data.length; j++) {
                  if(parent_data[i].last_name === children_data[j].family) {
                    parent_data[i].children.push(children_data[j].full_name);
                  }
                }
              }
              console.log(parent_data)
              // console.log(children_data)
            }, 5000)
          }
        });
      }, 5000)
    }
  });

}
// match_data('./parent.json')

match_data('./parents.json', './children.json')
console.log("Notification : Data sedang diproses !");
