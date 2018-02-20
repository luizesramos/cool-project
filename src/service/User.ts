import * as slowApi from '../networking/SlowApi';

export async function greetUserPromise(userName: string): Promise<string> {
    console.log('greetUserPromise starting...');
    return Promise.all([
        slowApi.fetchGreeting(),
        slowApi.fetchQuestion()
    ]).then(results => {
        const message = buildMessage(results[0], userName, results[1]);
        console.log('greetUserPromise finishing');
        return Promise.resolve(message);
    })
}

export async function greetUserAsyncAwait(userName: string): Promise<string> {
    console.log('greetUserAsyncAwait starting...');

    const greeting = await slowApi.fetchGreeting();
    const question = await slowApi.fetchQuestion();
    const message = buildMessage(greeting, userName, question);

    console.log('greetUserAsyncAwait finishing.');
    return Promise.resolve(message);
}

function buildMessage(greeting: string, userName: string, question: string): string {
    return '************\n' + greeting + ' ' + userName + '\n' + question + '\n************';
}