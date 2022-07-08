function ModifyMessage(sender: string) {
  
    return function(target: any, propertyKey: string) {
      
        let modifiedMessage : string;
          
        // Return modifiedMessage whenever the message is asked
        const getter = function() {
            return modifiedMessage;
        };
          
        // Set the modifiedMessage value
        const setter = function() {
            modifiedMessage = `Hello from ${sender}!`;  
        }; 
  
        // Overwrite the original message with
        // modifiedMessage we just created
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    }
}
  
class Greeter {
      
     // Modify message property using decorator
    @ModifyMessage("gfg")
    firstMessage: string;
  
    secondMessage: string;
   
    constructor() {
        this.firstMessage = "Hi there!";
        this.secondMessage = "Hi there!";
    }
  
    greet() {
        console.log(`first message: ${this.firstMessage}`);
        console.log(`second message: ${this.secondMessage}`);
    }
}
  
let myGreeter = new Greeter();
myGreeter.greet();