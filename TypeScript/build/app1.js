"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function ModifyMessage(sender) {
    return function (target, propertyKey) {
        let modifiedMessage;
        // Return modifiedMessage whenever the message is asked
        const getter = function () {
            return modifiedMessage;
        };
        // Set the modifiedMessage value
        const setter = function () {
            modifiedMessage = `Hello from ${sender}!`;
        };
        // Overwrite the original message with
        // modifiedMessage we just created
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
class Greeter {
    constructor() {
        this.firstMessage = "Hi there!";
        this.secondMessage = "Hi there!";
    }
    greet() {
        console.log(`first message: ${this.firstMessage}`);
        console.log(`second message: ${this.secondMessage}`);
    }
}
__decorate([
    ModifyMessage("gfg")
], Greeter.prototype, "firstMessage", void 0);
let myGreeter = new Greeter();
myGreeter.greet();
