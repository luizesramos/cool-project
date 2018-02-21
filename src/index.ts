import {greetUser} from "./service/Greeter";

greetUser('John Doe').then(message => {
    console.log(message);
});