const os = require('os');
const path = require('path');
const freeMemory = os.freemem();

console.log(freeMemory);
// platform 
const platform = os.platform();
console.log(platform);
// read file from the file
const fs = require('fs');
fs.readFile('./text.txt', 'utf8', (err, data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})

// path core modules

let pathobj = path.parse(__filename);

console.log(pathobj);  //it display all the path on object form
console.log(__filename); //the file name path 
console.log(__dirname);


let totalMemory = os.totalmem();
let memo = os.freemem();
console.log("used memory", ((totalMemory - memo)/ (1024*1024)));

console.log(os.arch);
//we can import in this way also
const {readdir, mkdir, readFile, writeFile } = require('fs');

readdir("./", (err, files) =>{
    if(err) {
        console.log('error', err);
    }
    // else console.log(files);
});
// To create new directory in the current path

// mkdir("random", (err, path)=>{
//     if(err) console.log("error", err);
//     console.log(path);
// });

// create a new file and then write text into the file system

writeFile("message.txt", "hello programer how u doing", (err)=>{
    if(err) throw err;
    console.log("the file has been saved");
});

// events core module
const events = require("events");
const eventEmitter = new events.EventEmitter();

// creat an event handler
const myEventHandler = function(){
    console.log("hi how are u, just keep up the good job. SUCCESS WILL COME AFTER COMMITMENT TO THE RIGHT WAY");

}
// assign the event handler to an event listiner
eventEmitter.on("Edemialem", myEventHandler);

// fire. or trigger the event
eventEmitter.emit("Edemialem");

// 
// Building Node web servere
// it is a computer with a software installed on it,   which handle http requests
// http core module ---web server which handle http requests
