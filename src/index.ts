import * as greeter from './service/Greeter';

greeter.greetUser('John Doe').then(message => {
    console.log(message);
});