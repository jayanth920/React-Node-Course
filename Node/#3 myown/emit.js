const EventEmitter = require("events")
const uuid = require("uuid");

// //create Class
// class MytEmitter extends EventEmitter {}

// //object creation
// const myEmitter = new MytEmitter()

// //Event Listener

// myEmitter.on("event", () => console.log("Event fired"))

// //Init Event

// myEmitter.emit("event");
// myEmitter.emit("event");
// myEmitter.emit("event");
// myEmitter.emit("event");
// myEmitter.emit("event");

// console.log(uuid.v4())

class Logger extends EventEmitter {
    log(msg){
        //call event
        this.emit("message", {id: uuid.v4(), msg: msg});
    }
}

module.exports = Logger;

