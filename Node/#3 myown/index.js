const path = require("path")
const fs = require("fs")
const Logger = require("./emit")

// console.log(path.basename(__filename))
// console.log(path.basename(__dirname))
// console.log(path.extname(__filename))
// console.log(path.parse(__filename))
// console.log(path.join(__dirname, "boss", "test"))

// MAKE DIRECTORY
// fs.mkdir(path.join(__dirname, "/test"), {}, err => {
//     if (err) throw err;
//     console.log("folder created !!")
// })


// WRITE FILE
// fs.writeFile(path.join(__dirname, "/test", "test.txt"), "HELLO WORLD TO TEST.JS", err => {
//     if (err) throw err
//     console.log("written !!!!")
// })

// READ FILE
// fs.readFile(path.join(__dirname, "/test", "Test.txt"), "utf8", (err, data) => {
//     if (err) throw err
//     console.log(data)
// })

// READ FILE
// fs.rename(path.join(__dirname, "/test", "hello1.txt"), path.join(__dirname, "/test", "Test.txt"), (err, data) => {
//     if (err) throw err
//     console.log("CHANGED NAME !!!!")
// })

const logger = new Logger();

logger.on("message", (data) => {
    console.log("Called Listener", data)

})

logger.log("Hello World!")